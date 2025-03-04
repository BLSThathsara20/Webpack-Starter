import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ModelControl {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.loader = new GLTFLoader();
        this.model = null;
    }

    loadModel(modelPath) {
        return new Promise((resolve, reject) => {
            this.loader.load(
                modelPath,
                (gltf) => {
                    this.model = gltf.scene;
                    this.scene.add(this.model);
                    resolve(this.model);
                },
                (progress) => {
                    console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
                },
                (error) => {
                    console.error('Error loading model:', error);
                    reject(error);
                }
            );
        });
    }

    setModelPosition(x, y, z) {
        if (this.model) {
            this.model.position.set(x, y, z);
        }
    }

    setModelRotation(x, y, z) {
        if (this.model) {
            this.model.rotation.set(x, y, z);
        }
    }

    setModelScale(x, y, z) {
        if (this.model) {
            this.model.scale.set(x, y, z);
        }
    }

    animate() {
        if (this.model) {
            // Add custom animation logic here
            this.model.rotation.y += 0.01;
        }
    }
}