/* Base class for creating objects */

class GraphicEntity extends THREE.Object3D{
    
    constructor(x, y, z){
        super();
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        //this.material
    }

    changeMaterialToPhong(){
        for(var i = 0; i < this.children.length; i++){
            var wirefr = this.children[i].material.wireframe;
            this.children[i].material = this.material[0];
            this.children[i].material.wireframe = wirefr;
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }

    changeMaterialToBasic(){
        for(var i = 0; i < this.children.length; i++){
            var wirefr = this.children[i].material.wireframe;
            this.children[i].material = this.material[1];
            this.children[i].material.wireframe = wirefr;
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }
}