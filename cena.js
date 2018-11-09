/* Projeto 3 - CG@IST/UL (2018/2019) */
/* global THREE, requestAnimationFrame, console //console.log()*/

/* Global Variables */
var camera, scene, renderer;

var numOfSpotlights = 4; // DEFINE

var plane;
var spotLightsObj = [];
var spotLights = [];
var globalLight;

var flag = 0;


/* Methods */
function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    // criacao do plane e coloca lo na cena
    plane = new Plane(0, 0, 0);
    scene.add(plane);
    
    // criacao dos spotLightObj e coloca los na cena
    spotLightsObj[0] = new Spotlight(20, 20, 20, Math.PI/4, 0, -Math.PI/4);
    scene.add(spotLightsObj[0]);
    spotLightsObj[1] = new Spotlight(-20, 20, 20, Math.PI/4, 0, Math.PI/4);
    scene.add(spotLightsObj[1]);
    spotLightsObj[2] = new Spotlight(20, 20, -20, -Math.PI/4, 0, -Math.PI/4);
    scene.add(spotLightsObj[2]);
    spotLightsObj[3] = new Spotlight(-20, 20, -20, -Math.PI/4, 0, Math.PI/4);
    scene.add(spotLightsObj[3]);
    
    // criacao das luzes spotLight e coloca las na cena
    for(var i = 0; i < numOfSpotlights; i++){
        spotLights[i] = new THREE.SpotLight(0xffffff);
        spotLights[i].position.set(spotLightsObj[i].position.x, spotLightsObj[i].position.y, spotLightsObj[i].position.z);
        spotLights[i].target = plane;
        scene.add(spotLights[i]);
    }
    
    // criacao da luz ambiente direcional e coloca la na cena
    globalLight = new THREE.DirectionalLight(0xffffff); // default intensity = 1
    scene.add(globalLight);
    

}

function onKeyDown(e){
    'use strict';
    
    switch (e.keyCode) {
        case 65: // 'A'
        case 97: // 'a'
            // wireframe spotLightObj
            for(var i = 0; i < spotLightsObj.length ; i++){
                for(var j = 0; j < spotLightsObj[i].material.length; j++){
                    spotLightsObj[i].material[j].wireframe = !spotLightsObj[i].material[j].wireframe;
                }
            }
            for(i = 0; i < plane.children.length; i++){
                plane.children[i].material.wireframe = !plane.children[i].material.wireframe;
            }
            break;

        case 78: // 'N'
        case 110: // 'n'
            if(globalLight.intensity == 1){
                globalLight.intensity = 0;
            }
            else if(globalLight.intensity == 0){
                globalLight.intensity = 1;
            }
            break;

        case 76: // 'L'
        case 108: // 'l'
            if(plane.children[0].material.type == "MeshPhongMaterial"){
                plane.changeMaterialToBasic();
                flag = 0;
            }
            else if(plane.children[0].material.type == "MeshLambertMaterial"){
                plane.changeMaterialToBasic();
                flag = 1;
            }
            else if(flag == 0){
                plane.changeMaterialToPhong();
            }
            else if(flag == 1){
                plane.changeMaterialToLambert();
            }
            break;

        case 71: // 'G'
        case 103: // 'g'
            if(plane.children[0].material.type == "MeshLambertMaterial"){
                plane.changeMaterialToPhong();
            }
            else if(plane.children[0].material.type == "MeshPhongMaterial"){
                plane.changeMaterialToLambert();
            }
            break;

        case 49: // '1'
            if(spotLights[0].intensity == 1){
                spotLights[0].intensity = 0;
            }
            else{
                spotLights[0].intensity = 1;
            }
            break;
        case 50: // '2'
            if(spotLights[1].intensity == 1){
                spotLights[1].intensity = 0;
            }
            else{
                spotLights[1].intensity = 1;
            }
            break;
        case 51: // '3'
            if(spotLights[2].intensity == 1){
                spotLights[2].intensity = 0;
            }
            else{
                spotLights[2].intensity = 1;
            }
            break;
        case 52: // '4'
            if(spotLights[3].intensity == 1){
                spotLights[3].intensity = 0;
            }
            else{
                spotLights[3].intensity = 1;
            }
            break;

        case 37: // '<' left arrow
            plane.rotateZ(-0.05);
            break;
        case 39: // '>' right arrow
            plane.rotateZ(0.05);
            break;
        case 38: // '^' top arrow
            plane.rotateX(-0.05);
            break;
        case 40: // 'v' down arrow
            plane.rotateX(0.05);
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

    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.set(25, 25, 25);
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onResize);
    
    render();
}

function animate() {
    'use strict';
    
    render();
    requestAnimationFrame(animate);
}