// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set ( 0, 5, 5 );

const renderer = new THREE.WebGLRenderer({alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0xFF5733 } );
// const box = new THREE.Mesh( geometry, material );
// scene.add( box );

// camera.lookAt( box.position );

/* scene */ 
const sceneWidth = 20;

//street
const streetGeo = new THREE.PlaneGeometry( sceneWidth, 8 );
const streetMat = new THREE.MeshBasicMaterial( {color: 0x3D7C47,  side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMat );
street.rotation.x = Math.PI * -0.5;
scene.add( street );

// sidewalk 
for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 1) {
	const geo = new THREE.BoxGeometry( 0.95, 0.1, 0.95 );
	const mat = new THREE.MeshBasicMaterial( { color: 0x828282 } );
	const sidewalk1 = new THREE.Mesh( geo, mat );
	sidewalk1.position.set( x + 0.5, 0.05, -2.4 );
	scene.add( sidewalk1 );

	const sidewalk2 = new THREE.Mesh( geo, mat );
	sidewalk2.position.set( x + 0.5, 0.05, -3.42 );
	scene.add( sidewalk2 );
}

let mesh, mixer;

const radius = 600;
let theta = 0;
let prevTime = Date.now();

init();
animate();

function init() {

	camera.position.y = 5;
	camera.position.z = 5;
	camera.target = new THREE.Vector3( 0, 0, 0 );

	scene.background = new THREE.Color( 0xf0f0f0 );

	//

	const light1 = new THREE.DirectionalLight( 0xefefff, 1.5 );
	light1.position.set( 1, 1, 1 ).normalize();
	scene.add( light1 );

	const light2 = new THREE.DirectionalLight( 0xffefef, 1.5 );
	light2.position.set( - 1, - 1, - 1 ).normalize();
	scene.add( light2 );

	const loader = new THREE.GLTFLoader();
	loader.load( "Horse.glb", function ( gltf ) {

		mesh = gltf.scene.children[ 0 ];
		mesh.scale.set( 0.01, 0.01, 0.01 );
		scene.add( mesh );

		mixer = new THREE.AnimationMixer( mesh );

		mixer.clipAction( gltf.animations[ 0 ] ).setDuration( 1 ).play();

	} );


	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	theta += 0.1;

	//camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
	//camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );

	camera.lookAt( camera.target );

	if ( mixer ) {

		const time = Date.now();

		mixer.update( ( time - prevTime ) * 0.001 );

		prevTime = time;

	}

	renderer.render( scene, camera );

}
 animate();
