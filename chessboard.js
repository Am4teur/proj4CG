/* Chessboard Object */

class Chessboard extends GraphicEntity{
    
    constructor(x, y, z){
        super(x, y, z);

        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0x0000ff, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.material[1] = new THREE.MeshBasicMaterial({color: 0x0000ff, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.addField(0, 0, 0);
    }

    addField(x, y, z){
        this.geometry = new THREE.BoxGeometry(100, 2, 100);
        var mesh = new THREE.Mesh(this.geometry, this.material[0]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
}