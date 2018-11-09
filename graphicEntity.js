/* Base class for creating objects */

class GraphicEntity extends THREE.Object3D{
    
    constructor(x, y, z){
        super();
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }
}