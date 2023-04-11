// import * as THREE from "three";

const scene = new THREE.Scene();

// RED cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

/**
 * different ways to provide a color
 * 0xff0000
 * '#ff0000'
 * 'red
 */
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 500,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 2;
// camera.position.x = 2;

scene.add(camera);
// Renderer
const canvas = document.querySelector(".webgl");
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
