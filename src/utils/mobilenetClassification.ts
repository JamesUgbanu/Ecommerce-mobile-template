/**
 * mobileClassification.ts
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import * as tf from "@tensorflow/tfjs";
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as jpeg from "jpeg-js";

class MobilenetClassification {
    mobilenetModel: mobilenet.MobileNet | undefined;

    async loadModel() {
        if (this.mobilenetModel) {
            return this.mobilenetModel;
        }
        await tf.ready();
        this.mobilenetModel = await mobilenet.load();
        return this.mobilenetModel;
    }

    imageToTensor(rawImageData: ArrayBuffer) {
        const { width, height, data } = jpeg.decode(rawImageData, {
            useTArray: true,
        }); // return as Uint8Array

        // Drop the alpha channel info for mobilenet
        const buffer = new Uint8Array(width * height * 3);
        let offset = 0; // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset];
            buffer[i + 1] = data[offset + 1];
            buffer[i + 2] = data[offset + 2];

            offset += 4;
        }

        return tf.tensor3d(buffer, [height, width, 3]);
    }

    async classify(imageBuffer: ArrayBuffer, topk = 3) {
        if (!this.mobilenetModel) {
            await this.loadModel();
        }

        const imageTensor = this.imageToTensor(imageBuffer);
        return this.mobilenetModel?.classify(imageTensor, topk);
    };
}

export default new MobilenetClassification();