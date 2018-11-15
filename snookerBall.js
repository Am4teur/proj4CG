/* Snooker Ball Object */

class SnookerBall extends GraphicEntity{
    
    constructor(x, y, z){
        super(x, y, z);

        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0xff0000, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.material[1] = new THREE.MeshBasicMaterial({color: 0xff0000, 
                                                        wireframe: false}); // this.children[i].material.wireframe});
        this.addBall(0, 0, 0);
    }

    addBall(x, y, z){
        this.geometry = new THREE.SphereGeometry(2, 25, 25);
        var mesh = new THREE.Mesh(this.geometry, this.material[0]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
}