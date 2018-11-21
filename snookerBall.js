/* Snooker Ball Object */

class SnookerBall extends GraphicEntity{
    
    constructor(x, y, z){
        super(x, y, z);

        this.mesh;
        this.map = new THREE.TextureLoader().load("snookerBallTexture.png");
        this.material = [];
        this.material[0] = new THREE.MeshPhongMaterial({color: 0xffffff,
                                                        specular: 0xffffff,
                                                        shininess: 80,
                                                        map: this.map,
                                                        wireframe: false
                                                    });
        this.material[1] = new THREE.MeshBasicMaterial({color: 0xffffff,
                                                        map: this.map, 
                                                        wireframe: false
                                                    });
        this.addBall(0, 0, 12);

        // updatePostion variables
        this.t = Date.now();
        this.delta = 0;
    }

    addBall(x, y, z){
        this.geometry = new THREE.SphereGeometry(2, 20, 20);
        this.mesh = new THREE.Mesh(this.geometry, this.material[0]);
        this.mesh.position.set(x, y, z);
        this.add(this.mesh);
    }

    updatePosition(ballMov){
        // obtencao do tempo/delta
        this.t = Date.now();
        var now = Date.now();
    
        // velocidade maxima
        if(this.delta < 3 && ballMov){
            this.delta += 0.4*(now - this.t);
        }
        else if(this.delta > 0 && !ballMov){
            this.delta -= 0.4*(now - this.t) ; 
        }
        if(this.delta >= 3){
            this.delta = 3;
        }
        if(this.delta <= 0){
            this.delta = 0; 
        }

    
        this.rotation.y += Math.PI/180 * this.delta;
        this.mesh.rotation.z -= Math.PI/90 * this.delta;
    }
}