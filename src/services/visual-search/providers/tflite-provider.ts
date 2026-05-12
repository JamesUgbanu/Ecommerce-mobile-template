import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import * as jpeg from 'jpeg-js';
import { loadTensorflowModel } from 'react-native-fast-tflite';

import type {
  VisualSearchPrediction,
  VisualSearchProvider,
  VisualSearchRequest,
  VisualSearchResult,
} from '../../../types/visual-search';

const MODEL_ASSET = require('../../../../assets/models/mobilenet_v2_1.0_224.tflite');
const LABELS_ASSET = require('../../../../assets/models/ImageNetLabels.txt');
const MODEL_SIZE = 224;
const MIN_MODEL_SIZE_BYTES = 1_000_000;
const MODEL_DOWNLOAD_MESSAGE =
  'Local TFLite model is not installed. Run `npm run download:model`, restart Expo with `npx expo start --clear`, and keep EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER=tflite.';

export class TfliteVisualSearchProvider implements VisualSearchProvider {
  id = 'tflite' as const;
  private modelPromise: ReturnType<typeof loadTensorflowModel> | null = null;
  private labelsPromise: Promise<string[]> | null = null;

  isConfigured() {
    return true;
  }

  private async ensureModelAsset() {
    const asset = Asset.fromModule(MODEL_ASSET);
    await asset.downloadAsync();
    const modelUri = asset.localUri ?? asset.uri;

    if (!modelUri) {
      throw new Error(MODEL_DOWNLOAD_MESSAGE);
    }

    const modelInfo = await FileSystem.getInfoAsync(modelUri);
    if (!modelInfo.exists || (modelInfo.size ?? 0) < MIN_MODEL_SIZE_BYTES) {
      throw new Error(MODEL_DOWNLOAD_MESSAGE);
    }
  }

  private async getModel() {
    if (!this.modelPromise) {
      this.modelPromise = this.loadModel();
    }

    return this.modelPromise;
  }

  private async loadModel() {
    await this.ensureModelAsset();
    return loadTensorflowModel(MODEL_ASSET, []);
  }

  private async getLabels() {
    if (!this.labelsPromise) {
      this.labelsPromise = this.loadLabels();
    }

    return this.labelsPromise;
  }

  private async loadLabels() {
    const asset = Asset.fromModule(LABELS_ASSET);
    await asset.downloadAsync();
    const labelsUri = asset.localUri ?? asset.uri;

    if (!labelsUri) {
      throw new Error('ImageNet labels asset could not be loaded.');
    }

    const labelsText = await FileSystem.readAsStringAsync(labelsUri);
    return labelsText
      .split('\n')
      .map((label) => label.trim())
      .filter(Boolean);
  }

  private async prepareInput(imageUri: string) {
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: MODEL_SIZE, height: MODEL_SIZE } }],
      {
        compress: 1,
        format: ImageManipulator.SaveFormat.JPEG,
      }
    );

    const response = await fetch(manipulatedImage.uri);
    const imageBuffer = await response.arrayBuffer();
    const { data } = jpeg.decode(imageBuffer, {
      useTArray: true,
    });
    const floatArray = new Float32Array(MODEL_SIZE * MODEL_SIZE * 3);

    let offset = 0;
    for (let sourceIndex = 0; sourceIndex < data.length; sourceIndex += 4) {
      floatArray[offset] = data[sourceIndex] / 127.5 - 1;
      floatArray[offset + 1] = data[sourceIndex + 1] / 127.5 - 1;
      floatArray[offset + 2] = data[sourceIndex + 2] / 127.5 - 1;
      offset += 3;
    }

    return floatArray.buffer;
  }

  private getTopPredictions(
    output: Float32Array,
    labels: string[],
    topK: number
  ): VisualSearchPrediction[] {
    return Array.from(output.entries())
      .map(([index, confidence]) => ({
        index,
        confidence,
        label: labels[index] ?? `Class ${index}`,
      }))
      .sort((left, right) => right.confidence - left.confidence)
      .slice(0, topK)
      .map(({ confidence, label }) => ({
        label,
        confidence,
      }));
  }

  async classifyImage(request: VisualSearchRequest): Promise<VisualSearchResult> {
    const startedAt = Date.now();
    const [model, labels, input] = await Promise.all([
      this.getModel(),
      this.getLabels(),
      this.prepareInput(request.uri),
    ]);
    const outputs = await model.run([input]);
    const [predictionBuffer] = outputs;
    const output = new Float32Array(predictionBuffer);
    const predictions = this.getTopPredictions(output, labels, request.topK ?? 3);

    return {
      provider: this.id,
      predictions,
      latencyMs: Date.now() - startedAt,
    };
  }
}
