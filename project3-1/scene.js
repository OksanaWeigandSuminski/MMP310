// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 2, 2);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

/* scene */
const sceneWidth = 20;



// sidewalk 
for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 1) {
	const geo = new THREE.BoxGeometry(0.95, 0.1, 0.95);
	const mat = new THREE.MeshBasicMaterial({ color: 0x828282 });
	// const sidewalk1 = new THREE.Mesh(geo, mat);
	// sidewalk1.position.set(x + 0.5, 0.05, -2.4);
	// scene.add(sidewalk1);

	// const sidewalk2 = new THREE.Mesh(geo, mat);
	// sidewalk2.position.set(x + 0.5, 0.05, -3.42);
	// scene.add(sidewalk2);
}

let mesh, mixer;

const radius = 600;
let theta = 0;
let prevTime = Date.now();

init();
animate();

function init() {

	camera.position.y = 75;
	camera.position.z = 75;
	camera.target = new THREE.Vector3(0, 0, 0);

	scene.background = new THREE.Color(0xf0f0f0);

	//horse set up

	const light1 = new THREE.DirectionalLight(0xefefff, 1.5);
	light1.position.set(1, 1, 1).normalize();
	scene.add(light1);

	const light2 = new THREE.DirectionalLight(0xffefef, 1.5);
	light2.position.set(- 1, - 1, - 1).normalize();
	scene.add(light2);

	const loader = new THREE.GLTFLoader();
	loader.load("Horse.glb", function (gltf) {

		mesh = gltf.scene.children[0];
		mesh.scale.set(0.2, 0.2, 0.2);
		mesh.position.set(0,-2,5);
		scene.add(mesh);

		mixer = new THREE.AnimationMixer(mesh);

		mixer.clipAction(gltf.animations[0]).setDuration(1).play();

	});

	// ground
	const tesxtLoader = new THREE.TextureLoader();

	const groundTexture =  tesxtLoader.load( 'grasslight-big.jpg' );
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
	groundTexture.repeat.set( 0.9, 0.9 );
	groundTexture.anisotropy = 16;
	groundTexture.encoding = THREE.sRGBEncoding;

	const groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

	//street
	const streetGeo = new THREE.PlaneGeometry(sceneWidth+100, 120);
	const streetMat = new THREE.MeshBasicMaterial({ color: 0x3D7C47, side: THREE.DoubleSide });
	const street = new THREE.Mesh(streetGeo, groundMaterial);
	street.rotation.x = Math.PI * -0.5;
	scene.add(street);

}


function animate() {

	requestAnimationFrame(animate);


	theta += 0.6;

	controls.update();

	camera.lookAt(camera.target);

	if (mixer) {

		const time = Date.now();

		mixer.update((time - prevTime) * 0.001);

		prevTime = time;

	}
	const time = Date.now() / 6000;

	camera.position.x = 80 * Math.cos( time * 4 );
	camera.position.z = 80 * Math.sin( time * 4 );

	renderer.render(scene, camera);

}
animate();
