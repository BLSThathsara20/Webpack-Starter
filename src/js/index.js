import $ from "jquery";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ModelControl } from "./model-control.js";

// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
	requestAnimationFrame(animate);
	if (modelControl) {
		modelControl.animate();
	}
	renderer.render(scene, camera);
}
animate();

// Initialize model control
const modelControl = new ModelControl(scene, camera);

$(document).ready(function () {
	// Load your 3D model here
	// modelControl.loadModel('path/to/your/model.gltf');
});
