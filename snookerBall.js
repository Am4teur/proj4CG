/* Snooker Ball Object */

class SnookerBall extends GraphicEntity{
    
    constructor(x, y, z){
        super(x, y, z);

        this.map = new THREE.TextureLoader().load("snookerBallTexture.png");
        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0xffffff, 
                                                        wireframe: false,
                                                        specular: 0xffffff,
                                                        shininess: 25,
                                                        map: this.map
                                                    });
        this.material[1] = new THREE.MeshBasicMaterial({color: 0xffffff, 
                                                        wireframe: false,
                                                        map: this.mapHeight
                                                    });
        this.addBall(0, 0, 12);

        // updatePostion variables
        this.vx = 0.001;
        this.vz = 1;
        this.t = Date.now();
        this.delta = 0;
    }

    addBall(x, y, z){
        this.geometry = new THREE.SphereGeometry(2, 20, 20);
        var mesh = new THREE.Mesh(this.geometry, this.material[0]);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    updatePosition(){
        // obtencao do tempo/delta
        var now = Date.now();
        //this.delta = now - this.t;
    
        // velocidade maxima
        if(this.vx * this.delta <= 0.1){
            this.delta = now - this.t;
        }
    
        this.rotation.y += Math.PI/180; // (this.vx * this.delta);
        //this.position.x += this.vx * Math.cos() * this.delta; // cos
        //this.position.z += this.vz * this.delta; // sen
    }
}