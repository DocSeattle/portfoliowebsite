import './three.module.js';

/** VARIABLES */
let pWidth = 200;
let pHeight = 200;

/** SCENE */
const scene = new THREE.Scene();
/** CAMERA */
const camera = new THREE.PerspectiveCamera( 75, pWidth / pHeight, 0.1, 1000 );
/** RENDERER */
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(pWidth, pHeight);
camera.position.setZ(30);

renderer.setClearColor( 0xffffff, 0);


/** OBJECT */
const cubegeometry = new THREE.BoxGeometry(10, 10, 10);
const dispmaterial = new THREE.MeshStandardMaterial( { color: 0xffffff} );
const objectmaterial = new THREE.MeshStandardMaterial( { color: 0xffffff} );
const cube = new THREE.Mesh( cubegeometry, objectmaterial );

const cylindergeometry = new THREE.CylinderGeometry(10, 10, 2, 32, 1, false);
const cylinder = new THREE.Mesh( cylindergeometry, dispmaterial );
/** LIGHTS */
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,10,10);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

/** SCENE SETUP */

scene.add(pointLight);
scene.add(cylinder);
scene.add(cube);
cylinder.position.set(0,-1,0);
cube.position.set(0,4,0);

/** CONTROLS */
const controls = new OrbitControls(camera, renderer.domElement);

function animate()
{
    requestAnimationFrame(animate);
    scene.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();