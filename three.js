import './styles.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load('tomato.glb', function(gltf) {
  gltf.scene.rotation.x += 0.5;
  gltf.scene.rotation.y += 0.5;
  scene.add(gltf.scene);
});

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.querySelector('#tomato');
const parentDiv = canvas.parentElement;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setClearColor(0xffffff, 0); // Set clearColor to match the page background color

function resizeRendererToParentSize() {
  const width = parentDiv.offsetWidth;
  const height = parentDiv.offsetHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

resizeRendererToParentSize();
window.addEventListener('resize', resizeRendererToParentSize);

camera.position.setZ(2);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff, 150);
pointLight.position.set(10, 10, 10);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(pointLight, ambientLight);

function animate() {
  requestAnimationFrame(animate);

  // Rotate the tomato
  scene.traverse(function(object) {
    if (object.isMesh) {
      object.rotation.y += 0.003;
    }
  });

  renderer.render(scene, camera);
}

animate();
