
// main.js - versione separata da usare con GitHub Pages
import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

window.drawSpiral3D = function () {
  const container = document.getElementById("spiral3dContainer");
  container.innerHTML = "";
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);
  const camera = new THREE.PerspectiveCamera(75, 1.8, 0.1, 1000);
  camera.position.z = 120;
  camera.position.y = 40;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const width = container.offsetWidth;
  const height = 500;
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(0.5, 12, 12);
  const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  let angle = 0;
  let radius = 1;
  let heightStep = 0.6;

  for (let n = 2; n < 1000; n++) {
    if (isPrime(n)) {
      const sphere = new THREE.Mesh(geometry, material);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = n * heightStep * 0.1;
      sphere.position.set(x, y, z);
      scene.add(sphere);
    }
    angle += 0.2;
    radius += 0.02;
  }

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(50, 50, 100);
  scene.add(light);

  const animate = function () {
    requestAnimationFrame(animate);
    scene.rotation.z += 0.001;
    scene.rotation.x += 0.001;
    renderer.render(scene, camera);
  };

  animate();
};

window.drawSpiral2D = function () {
  const canvas = document.getElementById("spiralCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  let angle = 0;
  let radius = 0;

  ctx.fillStyle = "#00d8ff";

  for (let n = 2; n < 1000; n++) {
    if (isPrime(n)) {
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
    radius += 0.5;
    angle += 0.2;
  }
};
