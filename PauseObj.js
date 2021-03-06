/* Pause Object */

class PauseObj extends GraphicEntity{

    constructor(x, y, z){
        super(x, y, z);

        this.map = new THREE.TextureLoader().load("Pause.png");

        this.material = new THREE.MeshBasicMaterial({color: 0xffffff,
                                                        map: this.map,
                                                        wireframe: false
                                                    });
        this.addCube(0, 0, 0);
    }

    addCube(x, y, z){
        this.geometry = new THREE.BoxGeometry(80, 80, 80);
        var mesh = new THREE.Mesh(this.geometry, this.material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
}