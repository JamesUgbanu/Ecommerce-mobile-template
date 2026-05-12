import '@tensorflow/tfjs-react-native';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import { fetch } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';

import type {
  VisualSearchPrediction,
  VisualSearchProvider,
  VisualSearchRequest,
  VisualSearchResult,
} from '../../../types/visual-search';

export class TensorflowVisualSearchProvider implements VisualSearchProvider {
  id = 'tensorflow' as const;
  private model: mobilenet.MobileNet | undefined;

  isConfigured() {
    return true;
  }

  private async getModel() {
    if (this.model) {
      return this.model;
    }

    await tf.ready();
    this.model = await mobilenet.load();
    return this.model;
  }

  private imageToTensor(rawImageData: ArrayBuffer) {
    const { width, height, data } = jpeg.decode(rawImageData, {
      useTArray: true,
    });
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;

    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
  }

  async classifyImage(request: VisualSearchRequest): Promise<VisualSearchResult> {
    const startedAt = Date.now();
    const response = await fetch(request.uri, {}, { isBinary: true });
    const rawImageData = await response.arrayBuffer();
    const imageTensor = this.imageToTensor(rawImageData);

    try {
      const model = await this.getModel();
      const predictions = await model.classify(imageTensor, request.topK ?? 3);

      return {
        provider: this.id,
        predictions: predictions.map<VisualSearchPrediction>((prediction) => ({
          label: prediction.className,
          confidence: prediction.probability,
        })),
        latencyMs: Date.now() - startedAt,
      };
    } finally {
      imageTensor.dispose();
    }
  }
}
