/* Projeto 3 - CG@IST/UL (2018/2019) */
/* global THREE, requestAnimationFrame, console //console.log()*/

/* Global Variables */
var camera, controls, scene, renderer;

var snookerBall, rubikCube, chessboard, pauseObj;
var directionalLight, pointLight;
var pause = false;
var ballMov = true;
var vecPos = [];

/* ________________ */

/* Methods */
function createScene() {
    'use strict';
    
    // criacao da snookerBall, da rubikCube e do chessboard e coloca los na cena
    snookerBall = new SnookerBall(0, 0, 0);
    scene.add(snookerBall);
    rubikCube = new RubikCube(0, 0.5, 0);
    scene.add(rubikCube);
    chessboard = new Chessboard(0, -3, 0);
    scene.add(chessboard);
    pauseObj = new PauseObj(3500, 0, 0);
    scene.add(pauseObj);
    
    // criacao das luzes directionalLight e a pointLight e coloca las na cena
    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0 , 10, -2);
    directionalLight.target = rubikCube;
    scene.add(directionalLight);
    pointLight = new THREE.PointLight(0xffffff, 1, 100, 2); // PointLight( color : Integer, intensity : Float, distance : Number, decay : Float ); suposto ter decay
    
    //
    var material = new THREE.MeshBasicMaterial({color: 0xff6600, wireframe: false});
    var geometry = new THREE.SphereGeometry(0.5, 10, 10);
    pointLight.add(new THREE.Mesh(geometry, material));
    //

    pointLight.position.set(0, 20, 0);
    pointLight.target = rubikCube;
    scene.add(pointLight);
}

function onKeyDown(e){
    'use strict';
    
    switch (e.keyCode) {
        case 66: // 'B'
        case 98: // 'b'
            if(!pause){
                ballMov = !ballMov;
            }
            break;
        case 67: // 'C'
        case 99: // 'c'
            controls.autoRotate = !controls.autoRotate;
            break;
        case 68: // 'D'
        case 100: // 'd'
            /* Liga e desliga a directionalLight */
            if(!pause){
                directionalLight.intensity == 1 ? directionalLight.intensity = 0 : directionalLight.intensity = 1;
            }
            break;
        case 76: // 'L'
        case 108: // 'l'
            if(!pause){
                if(snookerBall.children[0].material.type == "MeshPhongMaterial"){
                    snookerBall.changeMaterialToBasic();
                    rubikCube.changeCubeMaterialToBasic();
                    chessboard.changeCubeMaterialToBasic();
                }
                else{
                    snookerBall.changeMaterialToPhong();
                    rubikCube.changeCubeMaterialToPhong();
                    chessboard.changeCubeMaterialToPhong();
                }
            }
            break;
        case 80: // 'P'
        case 112: // 'p'
            /* Liga e desliga a pointLight */
            if(!pause){
                pointLight.intensity == 1 ? pointLight.intensity = 0 : pointLight.intensity = 1;
            }
            break;
        case 82: // 'R'
        case 114: // 'r'
            if(pause){
                reset();
            }
            break;
        case 83: // 'S'
        case 115: // 's'
            controls.autoRotate = !controls.autoRotate;
            if(!pause){
                vecPos[0] = camera.position.x;
                vecPos[1] = camera.position.y;
                vecPos[2] = camera.position.z;
            }
            camera.position.y > 1 ? camera.position.set(3506, 0, 0) : camera.position.set(vecPos[0], vecPos[1], vecPos[2]);
            pause = !pause;
            break;
        case 87: // 'W'
        case 119: // 'w'
            if(!pause){
                for(var i = 0; i < snookerBall.children.length; i++){
                    snookerBall.children[i].material.wireframe = !snookerBall.children[i].material.wireframe;
                }
                for(i = 0; i < rubikCube.children.length; i++){
                    for(var j = 0; j < rubikCube.children[i].material.materials.length; j++){
                        rubikCube.children[i].material.materials[j].wireframe = !rubikCube.children[i].material.materials[j].wireframe;
                    }
                }
                for(i = 0; i < chessboard.children.length; i++){
                    for(var j = 0; j < chessboard.children[i].material.materials.length; j++){
                        chessboard.children[i].material.materials[j].wireframe = !chessboard.children[i].material.materials[j].wireframe;
                    }
                }
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

    scene = new THREE.Scene();

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
    controls.autoRotate = true;
    //

    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onResize);
    
    render();
}

function animate() {
    'use strict';

    render();

    controls.update();

    if(!pause){
        snookerBall.updatePosition(ballMov);
    }
    requestAnimationFrame(animate);
}

function reset(){
    while(scene.children.length > 0){
        scene.remove(scene.children[0]);
    }
    pause = false;
    createScene();
    camera.position.set(50, 50, 50);
    controls.autoRotate = true;
}