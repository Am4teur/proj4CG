/* Projeto 3 - CG@IST/UL (2018/2019) */
/* global THREE, requestAnimationFrame, console //console.log()*/

/* Global Variables */
var camera, controls, scene, renderer;

var snookerBall, rubikCube, chessboard;
var directionalLight, pointLight;

/* ________________ */

/* Methods */
function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(5));
    
    // criacao da snookerBall, da rubikCube e do chessboard e coloca los na cena
    snookerBall = new SnookerBall(0, 0, 0);
    scene.add(snookerBall);
    rubikCube = new RubikCube(0, 0.5, 0);
    scene.add(rubikCube);
    chessboard = new Chessboard(0, -3, 0);
    scene.add(chessboard);

    
    // criacao das luzes directionalLight e a pointLight e coloca las na cena
    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0 , 10, -2);
    directionalLight.target = rubikCube;
    scene.add(directionalLight);
    pointLight = new THREE.PointLight(0xffffff, 1); // PointLight( color : Integer, intensity : Float, distance : Number, decay : Float ); suposto ter decay
    
    //
    var material = new THREE.MeshBasicMaterial({color: 0xff6600, wireframe: false});
    var geometry = new THREE.SphereGeometry(0.5, 10, 10);
    pointLight.add(new THREE.Mesh(geometry, material));
    //

    pointLight.position.set(10, -1.5, 10); // tem de ficar em cima do chessboard
    pointLight.target = rubikCube; // tem de iluminar bem a bola e o cubo
    scene.add(pointLight);
}

function onKeyDown(e){
    'use strict';
    
    switch (e.keyCode) {
        case 66: // 'B'
        case 98: // 'b'
            break;
        case 68: // 'D'
        case 100: // 'd'
            /* Liga e desliga a directionalLight */
            directionalLight.intensity == 1 ? directionalLight.intensity = 0 : directionalLight.intensity = 1;
            break;
        case 76: // 'L'
        case 108: // 'l'
            if(snookerBall.children[0].material.type == "MeshPhongMaterial"){
                snookerBall.changeMaterialToBasic();
                rubikCube.changeMaterialToBasic();
                chessboard.changeMaterialToBasic();
            }
            else{
                snookerBall.changeMaterialToPhong();
                rubikCube.changeMaterialToPhong();
                chessboard.changeMaterialToPhong();
            }
            break;
        case 80: // 'P'
        case 112: // 'p'
            /* Liga e desliga a pointLight */
            pointLight.intensity == 1 ? pointLight.intensity = 0 : pointLight.intensity = 1;
            break;
        case 82: // 'R'
        case 114: // 'r'
            break;
        case 83: // 'S'
        case 115: // 's'
            controls.autoRotate = !controls.autoRotate;
            break;
        case 87: // 'W'
        case 119: // 'w'
            for(var i = 0; i < snookerBall.children.length; i++){
                snookerBall.children[i].material.wireframe = !snookerBall.children[i].material.wireframe;
            }
            for(i = 0; i < rubikCube.children.length; i++){
                rubikCube.children[i].material.wireframe = !rubikCube.children[i].material.wireframe;
            }
            for(i = 0; i < chessboard.children.length; i++){
                chessboard.children[i].material.wireframe = !chessboard.children[i].material.wireframe;
            }
            break;
    }
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';

    createScene();

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(70,
                                        window.innerWidth / window.innerHeight,
                                        1,
                                        1000);
    camera.position.set(50, 50, 50);

    // controls

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;

    //

    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onResize);
    
    render();
}

function animate() {
    'use strict';
    
    render();

    controls.update();

    snookerBall.updatePosition();
    //rubikCube.updatePosition();

    requestAnimationFrame(animate);
}