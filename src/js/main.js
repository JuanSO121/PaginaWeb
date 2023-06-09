var scene = null,
  camera = null,
  renderer = null,
  controls = null,
  clock = null;

var sound1 = null,
  countPoints = null,
  modelLoad = null,
  light = null;

function start() {
  window.onresize = onWindowResize;
  initScene();
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function initScene() {
  initBasicElements(); // Scene, Camera and Render
  initSound();         // To generate 3D Audio
  createLight();       // Create light
  go2Play()
}


function createLight() {
  var light2 = new THREE.AmbientLight(0xffffff);
  light2.position.set(10, 10, 10);
  scene.add(light2);
  light = new THREE.DirectionalLight(0xffffff, 0, 1000);
  scene.add(light);
}



// ----------------------------------
// Funciones llamadas desde el index:
// ----------------------------------
function go2Play() {
  document.getElementById('blocker').style.display = 'none';
  document.getElementById('cointainerOthers').style.display = 'block';
  playAudio("src/songs/musica2.mp3");
  initialiseTimer();
}


function createAbuild() {
  alert("En esta seccion de código debe crear la lógica de construcción");
}
