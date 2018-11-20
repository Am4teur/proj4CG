/* Rubik's Cube Object */

class RubikCube extends GraphicEntity{

    constructor(x, y, z){
        super(x, y, z);

        /* TEXTURES */
        this.bumpMap = new THREE.TextureLoader().load("bumpMapRubik.png");
        this.redSide = new THREE.TextureLoader().load("mapRed.png");
        this.blueSide = new THREE.TextureLoader().load("mapBlue.png");
        this.greenSide = new THREE.TextureLoader().load("mapGreen.png");
        this.yellowSide = new THREE.TextureLoader().load("mapYellow.png");
        this.whiteSide = new THREE.TextureLoader().load("mapWhite.png");
        this.orangeSide = new THREE.TextureLoader().load("mapOrange.png");

        /* Materials */
        this.materialsPhong = [
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.redSide,    bumpMap: this.bumpMap, wireframe: false}), // RIGHT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.orangeSide, bumpMap: this.bumpMap, wireframe: false}), // LEFT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.yellowSide, bumpMap: this.bumpMap, wireframe: false}), // TOP SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.whiteSide,  bumpMap: this.bumpMap, wireframe: false}), // BOTTOM SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.blueSide,   bumpMap: this.bumpMap, wireframe: false}), // FRONT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, map: this.greenSide,  bumpMap: this.bumpMap, wireframe: false})  // BACK SIDE
        ];
        this.materialPhongFace = new THREE.MeshFaceMaterial(this.materialsPhong);

        this.materialsBasic = [
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.redSide,    bumpMap: this.bumpMap, wireframe: false}), // RIGHT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.orangeSide, bumpMap: this.bumpMap, wireframe: false}), // LEFT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.yellowSide, bumpMap: this.bumpMap, wireframe: false}), // TOP SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.whiteSide,  bumpMap: this.bumpMap, wireframe: false}), // BOTTOM SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.blueSide,   bumpMap: this.bumpMap, wireframe: false}), // FRONT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, map: this.greenSide,  bumpMap: this.bumpMap, wireframe: false})  // BACK SIDE
        ];
        this.materialBasicFace = new THREE.MeshFaceMaterial(this.materialsBasic);

        this.addCube(0, 0, 0);
    }

    addCube(x, y, z){
        this.geometry = new THREE.BoxGeometry(5, 5, 5);
        var mesh = new THREE.Mesh(this.geometry, this.materialPhongFace);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    changeCubeMaterialToPhong(){
        for(var i = 0; i < this.children.length; i++){
            var wirefr = this.children[i].material.materials[i].wireframe;
            this.children[i].material = this.materialPhongFace;
            for(var j = 0; j < rubikCube.children[i].material.materials.length; j++){
                this.children[i].material.materials[j].wireframe = wirefr;
            }
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }

    changeCubeMaterialToBasic(){
        for(var i = 0; i < this.children.length; i++){
            var wirefr = this.children[i].material.materials[i].wireframe;
            this.children[i].material = this.materialBasicFace;
            for(var j = 0; j < rubikCube.children[i].material.materials.length; j++){
                this.children[i].material.materials[j].wireframe = wirefr;
            }
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }
}