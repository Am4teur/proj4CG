/* Rubik's Cube Object */

class RubikCube extends GraphicEntity{

    constructor(x, y, z){
        super(x, y, z);

        this.bumpMap = new THREE.TextureLoader().load("bumpmapRubik.png");
        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0x00ff00, 
                                                        wireframe: false,
                                                        map: this.bumpMap,
                                                        bumpMap: this.bumpMap
                                                    });
        this.material[1] = new THREE.MeshBasicMaterial({color: 0x00ff00, 
                                                        wireframe: false
                                                    });
        this.addCube(0, 0, 0);
        //this.colorFaces();
    }

    addCube(x, y, z){
        this.geometry = new THREE.BoxGeometry(5, 5, 5, 1, 1, 1, this.material);
        var mesh = new THREE.Mesh(this.geometry, this.material[0]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    /*var materials = [
        leftSide,        // Left side
        rightSide,       // Right side
        topSide,         // Top side
        bottomSide,      // Bottom side
        frontSide,       // Front side
        backSide         // Back side
    ];
    var geometry = new THREE.CubeGeometry(100, 75, 8, 1, 1, 1, materials);
    var someMesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial());*/

}