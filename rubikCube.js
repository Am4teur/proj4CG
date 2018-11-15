/* Rubik's Cube Object */

class RubikCube extends GraphicEntity{

    constructor(x, y, z){
        super(x, y, z);

        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0x00ff00, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.material[1] = new THREE.MeshBasicMaterial({color: 0x00ff00, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.addCube(0, 0, 0);
    }

    addCube(x, y, z){
        this.geometry = new THREE.BoxGeometry(5, 5, 5);
        var mesh = new THREE.Mesh(this.geometry, this.material[0]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
}