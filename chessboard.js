/* Chessboard Object */

class Chessboard extends GraphicEntity{
    
    constructor(x, y, z){
        super(x, y, z);

        /* TEXTURES */
        this.map = new THREE.TextureLoader().load("Tabuleiro.png");
        this.whiteSide = new THREE.TextureLoader().load("mapWhite.png");

        /* Materials */
        this.materialsPhong = [
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false}), // RIGHT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false}), // LEFT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false,  map: this.map}), // TOP SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false}), // BOTTOM SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false}), // FRONT SIDE
            new THREE.MeshPhongMaterial({color: 0xffffff, shininess: 5, wireframe: false})  // BACK SIDE
        ];
        this.materialPhongFace = new THREE.MeshFaceMaterial(this.materialsPhong);

        this.materialsBasic = [
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false}), // RIGHT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false}), // LEFT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false, map: this.map}), // TOP SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false}), // BOTTOM SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false}), // FRONT SIDE
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false})  // BACK SIDE
        ];
        this.materialBasicFace = new THREE.MeshFaceMaterial(this.materialsBasic);

        this.addField(0, 0, 0);
    }

    addField(x, y, z){
        this.geometry = new THREE.BoxGeometry(100, 2, 100);
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