// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 5, 5);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

/* scene */
const sceneWidth = 20;

//street
const streetGeo = new THREE.PlaneGeometry(sceneWidth+100, 120);
const streetMat = new THREE.MeshBasicMaterial({ color: 0x3D7C47, side: THREE.DoubleSide });
const street = new THREE.Mesh(streetGeo, streetMat);
street.rotation.x = Math.PI * -0.5;
scene.add(street);

// sidewalk 
for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 1) {
	const geo = new THREE.BoxGeometry(0.95, 0.1, 0.95);
	const mat = new THREE.MeshBasicMaterial({ color: 0x828282 });
	const sidewalk1 = new THREE.Mesh(geo, mat);
	sidewalk1.position.set(x + 0.5, 0.05, -2.4);
	scene.add(sidewalk1);

	const sidewalk2 = new THREE.Mesh(geo, mat);
	sidewalk2.position.set(x + 0.5, 0.05, -3.42);
	scene.add(sidewalk2);
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
		scene.add(mesh);

		mixer = new THREE.AnimationMixer(mesh);

		mixer.clipAction(gltf.animations[0]).setDuration(1).play();

	});


	//grass set up
	const geometry = new THREE.PlaneBufferGeometry(100, 100);

	const texture = new THREE.CanvasTexture(generateTexture());

	for (let i = 0; i < 15; i++) {

		const material = new THREE.MeshBasicMaterial({
			color: new THREE.Color().setHSL(0.3, 0.75, (i / 15) * 0.4 + 0.1),
			map: texture,
			depthTest: false,
			depthWrite: false,
			transparent: true
		});

		const mesh = new THREE.Mesh(geometry, material);

		mesh.position.y = i * 0.25;
		mesh.rotation.x = - Math.PI / 2;

		scene.add(mesh);

	}
	scene.children.reverse();

	window.addEventListener('resize', onWindowResize, false);
}


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}
function generateTexture() {

	const canvas = document.createElement( 'canvas' );
	canvas.width = 512;
	canvas.height = 512;

	const context = canvas.getContext( '2d' );

	for ( let i = 0; i < 20000; i ++ ) {

		context.fillStyle = 'hsl(0,0%,' + ( Math.random() * 50 + 50 ) + '%)';
		context.beginPath();
		context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 0.15, 0, Math.PI * 2, true );
		context.fill();

	}

	context.globalAlpha = 0.075;
	context.globalCompositeOperation = 'lighter';

	return canvas;

}


function animate() {

	requestAnimationFrame(animate);
	//render();

	theta += 0.1;

	// camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
	// camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );

	camera.lookAt(camera.target);

	if (mixer) {

		const time = Date.now();

		mixer.update((time - prevTime) * 0.001);

		prevTime = time;

	}

	// function render() {

	// 	const time = Date.now() / 6000;

	// 	camera.position.x = 80 * Math.cos( time );
	// 	camera.position.z = 80 * Math.sin( time );

	// 	camera.lookAt( scene.position );

	// 	for ( let i = 0, l = scene.children.length; i < l; i ++ ) {

	// 		const mesh = scene.children[ i ];
	// 		mesh.position.x = Math.sin( time * 4 ) * i * i * 0.005;
	// 		mesh.position.z = Math.cos( time * 6 ) * i * i * 0.005;

	// 	}
	// }

	renderer.render(scene, camera);

}
animate();
