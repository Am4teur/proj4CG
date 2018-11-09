/* Spotlight Object */

class Spotlight extends GraphicEntity{
    
    constructor(x, y, z, rotx, roty,rotz) {
        super(x, y, z);
        this.material = [];
        this.addSphere(0, -1.5, 0);
        this.addCone(0, 0, 0);
        this.rotateX(rotx); 
        this.rotateY(roty);
        this.rotateZ(rotz);
    }
    
    addSphere(x, y, z){
        this.geometry = new THREE.SphereGeometry(1, 25, 25);
        this.material.push(new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true}));
        var mesh = new THREE.Mesh(this.geometry, this.material[this.material.length-1]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
    
    addCone(x, y, z){
        this.geometry = new THREE.ConeGeometry(2, 3, 25);
        this.material.push(new THREE.MeshBasicMaterial({color: 0xff6600, wireframe: true}))
        var mesh = new THREE.Mesh(this.geometry, this.material[this.material.length-1]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
    
    
}