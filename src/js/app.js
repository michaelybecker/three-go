const THREE = require("three");
const OrbitControls = require('three-orbit-controls')(THREE);
const clock = new THREE.Clock();
let scene, renderer, camera, controls;

let cube;

const init = () => {

    //boilerplate
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x333333);
    document.querySelector("#container").appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        3000
    );
    scene.add(camera);
    camera.position.set(0, 0, 10);
    controls = new OrbitControls(camera);
    //le Cube
    cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshNormalMaterial());
    scene.add(cube);

}

const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    cube.rotation.x += .01;
    cube.rotation.y += .01;
}

init();
render();

//helpers
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
