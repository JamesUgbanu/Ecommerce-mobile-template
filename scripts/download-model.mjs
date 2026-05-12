import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';

const MODEL_URL =
  'https://github.com/tensorflow/tflite-support/raw/master/tensorflow_lite_support/metadata/python/tests/testdata/image_classifier/mobilenet_v2_1.0_224.tflite';
const modelPath = path.resolve('assets/models/mobilenet_v2_1.0_224.tflite');

const download = (url, destination) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (
        response.statusCode &&
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        response.resume();
        resolve(download(response.headers.location, destination));
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Model download failed with status ${response.statusCode ?? 'unknown'}.`));
        return;
      }

      fs.mkdirSync(path.dirname(destination), { recursive: true });
      const output = fs.createWriteStream(destination);

      response.pipe(output);
      output.on('finish', () => {
        output.close(() => resolve(undefined));
      });
      output.on('error', (error) => {
        fs.unlink(destination, () => reject(error));
      });
    });

    request.on('error', (error) => reject(error));
  });

const run = async () => {
  console.log(`Downloading TFLite model from ${MODEL_URL}`);
  await download(MODEL_URL, modelPath);
  const { size } = fs.statSync(modelPath);

  if (size < 1_000_000) {
    throw new Error(
      'Downloaded file is unexpectedly small. The model may not have downloaded correctly.'
    );
  }

  console.log(`Saved model to ${modelPath} (${Math.round(size / 1024 / 1024)} MB).`);
  console.log(
    'Set EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER=tflite and restart Expo with a cleared cache.'
  );
};

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
