/* Plane Object */

class Plane extends GraphicEntity{

    constructor(x, y, z) {
        super(x, y, z);
        
        this.material = [];
        this.addBody();
        this.addWings();
        this.addCokpit();
        
    }
    
    addBody(){
        this.geometry = new THREE.Geometry();

        // Fuselagem
        //parte de cima do corpo do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( 5, 5, 10),
            new THREE.Vector3( 5, 5,-10),
            new THREE.Vector3(-5, 5,-10),
            new THREE.Vector3(-5, 5, 10),
            new THREE.Vector3( 5, 5, 10),
            new THREE.Vector3(-5, 5,-10)
        );

        //parte de baixo do corpo do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(-5, -5,-10),
            new THREE.Vector3( 5, -5,-10),
            new THREE.Vector3( 5, -5, 15),
            new THREE.Vector3(-5, -5,-10),
            new THREE.Vector3( 5, -5, 15),
            new THREE.Vector3(-5, -5, 15)
        );

        //lado direito do corpo do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(5, -5, 10),
            new THREE.Vector3(5, -5,-10),
            new THREE.Vector3(5,  5,-10),
            new THREE.Vector3(5,  5,-10),
            new THREE.Vector3(5,  5, 10),
            new THREE.Vector3(5, -5, 10)
        );
        
        //lado esquerdo do corpo do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(-5,  5,-10),
            new THREE.Vector3(-5, -5,-10),
            new THREE.Vector3(-5, -5, 10),
            new THREE.Vector3(-5, -5, 10),
            new THREE.Vector3(-5,  5, 10),
            new THREE.Vector3(-5,  5,-10)
        );
        
        //parte traseira do corpo do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( 5, -5, -10),
            new THREE.Vector3(-5, -5, -10),
            new THREE.Vector3(-5,  5, -10),
            new THREE.Vector3( 5, -5, -10),
            new THREE.Vector3(-5,  5, -10),
            new THREE.Vector3( 5,  5, -10)
        );

        //lado direito baixo da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(5, -5, 15),
            new THREE.Vector3(5, -5, 10),
            new THREE.Vector3(5,  0, 10),
            new THREE.Vector3(5, -5, 15),
            new THREE.Vector3(5,  0, 10),
            new THREE.Vector3(5,  0, 15)
        );
        
        //lado esquerdo baixo da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(-5,  0, 10),
            new THREE.Vector3(-5, -5, 10),
            new THREE.Vector3(-5, -5, 15),
            new THREE.Vector3(-5,  0, 15),
            new THREE.Vector3(-5,  0, 10),
            new THREE.Vector3(-5, -5, 15)
        );
        
        //lado direito cima da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(5, 0, 13),
            new THREE.Vector3(5, 0, 10),
            new THREE.Vector3(5, 5, 10),
            new THREE.Vector3(5, 0, 13),
            new THREE.Vector3(5, 5, 10),
            new THREE.Vector3(5, 5, 13)
        );
        
        //lado esquerdo cima da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(-5, 5, 10),
            new THREE.Vector3(-5, 0, 10),
            new THREE.Vector3(-5, 0, 13),
            new THREE.Vector3(-5, 5, 13),
            new THREE.Vector3(-5, 5, 10),
            new THREE.Vector3(-5, 0, 13)
        );
        
        //lado cima cima da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(  5, 5, 13),
            new THREE.Vector3(  5, 5, 10),
            new THREE.Vector3( -5, 5, 10),
            new THREE.Vector3(  5, 5, 13),
            new THREE.Vector3( -5, 5, 10),
            new THREE.Vector3( -5, 5, 13)
        );
        
        //lado cima meio da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( 5, 0, 15),
            new THREE.Vector3( 5, 0, 13),
            new THREE.Vector3(-5, 0, 13),
            new THREE.Vector3( 5, 0, 15),
            new THREE.Vector3(-5, 0, 13),
            new THREE.Vector3(-5, 0, 15)
        );
        
        //lado cima meio frente da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( -5, 0, 13),
            new THREE.Vector3( 5, 0, 13),
            new THREE.Vector3(5, 5, 13),
            new THREE.Vector3( -5, 0, 13),
            new THREE.Vector3(5, 5, 13),
            new THREE.Vector3(-5, 5, 13)
        );

        //triangulo direito da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( 5, 0, 15),
            new THREE.Vector3( 5, -2.5, 18),
            new THREE.Vector3(5, -5, 15)
        );

        //triangulo esquerdo da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(-5, -5, 15),
            new THREE.Vector3( -5, -2.5, 18),
            new THREE.Vector3( -5, 0, 15)
        );
        
        //lado cima triangulo da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3( -5, -2.5, 18),
            new THREE.Vector3( 5, -2.5, 18),
            new THREE.Vector3(5, 0, 15),
            new THREE.Vector3( -5, -2.5, 18),
            new THREE.Vector3(5, 0, 15),
            new THREE.Vector3(-5, 0, 15)
        );
        
        //lado baixo triangulo da cabeça do aviao
        this.geometry.vertices.push(
            new THREE.Vector3(5, -5, 15),
            new THREE.Vector3( 5, -2.5, 18),
            new THREE.Vector3( -5, -2.5, 18),
            new THREE.Vector3(-5, -5, 15),
            new THREE.Vector3(5, -5, 15),
            new THREE.Vector3( -5, -2.5, 18)
        );

        for(var i = 0; i < this.geometry.vertices.length ; i +=3){
            this.geometry.faces.push(new THREE.Face3(i, i+1, i+2));
        }
        
        this.geometry.computeFaceNormals();
        
        this.material.push(new THREE.MeshPhongMaterial({color: 0x3399ff, wireframe: true}));
        
        this.add(new THREE.Mesh(this.geometry, this.material[this.material.length-1]));
    }

    addWings(){
        this.geometry = new THREE.Geometry();
        
        //asa lado direito parte de cima e baixo
        this.geometry.vertices.push(
            new THREE.Vector3( 20, 1, 0),
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3(5, 1, 5),
            new THREE.Vector3(5, -1, 5),
            new THREE.Vector3( 5, -1, 0),
            new THREE.Vector3( 20, -1, 0)
        );
        
        //asa lado esquerdo parte de cima e baixo
        this.geometry.vertices.push(
            new THREE.Vector3(-5, 1, 5),
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3( -20, 1, 0),
            new THREE.Vector3( -20, -1, 0),
            new THREE.Vector3( -5, -1, 0),
            new THREE.Vector3(-5, -1, 5)
        );
        
        //asa lado esquerdo parte de cima e baixo
        this.geometry.vertices.push(
            new THREE.Vector3(5, -1, 5),
            new THREE.Vector3( 20, -1, 0),
            new THREE.Vector3( 20, 1, 0),
            new THREE.Vector3( 5, -1, 5),
            new THREE.Vector3( 20, 1, 0),
            new THREE.Vector3(5, 1, 5)
        );
        
        //asa lado esquerdo parte de cima e baixo
        this.geometry.vertices.push(
            new THREE.Vector3( -20, 1, 0),
            new THREE.Vector3( -20, -1, 0),
            new THREE.Vector3(-5, -1, 5),
            new THREE.Vector3(-5, 1, 5),
            new THREE.Vector3( -20, 1, 0),
            new THREE.Vector3( -5, -1, 5)
        );

        this.geometry.vertices.push(
            new THREE.Vector3( 20, -1, 0),
            new THREE.Vector3( 5, -1, 0),
            new THREE.Vector3(5, 1, 0),
            new THREE.Vector3(20, -1, 0),
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3( 20, 1, 0)
        );

        this.geometry.vertices.push(
            new THREE.Vector3(-5, 1, 0),
            new THREE.Vector3( -5, -1, 0),
            new THREE.Vector3( -20, -1, 0),
            new THREE.Vector3(-20, 1, 0),
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3( -20, -1, 0)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(20, 1, -2),
            new THREE.Vector3( 5, 1, -2),
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3(20, 1, -2),
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3( 20, 1, 0)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3( 5, 1, -2),
            new THREE.Vector3(20, 1, -2),
            new THREE.Vector3( 20, 1, 0),
            new THREE.Vector3( 5, 1, 0),
            new THREE.Vector3(20, 1, -2)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3( -5, 1, -2),
            new THREE.Vector3(-20, 1, -2),
            new THREE.Vector3( -20, 1, 0),
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3(-20, 1, -2)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(-20, 1, -2),
            new THREE.Vector3( -5, 1, -2),
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3(-20, 1, -2),
            new THREE.Vector3( -5, 1, 0),
            new THREE.Vector3( -20, 1, 0)
        );
        
        //estabelizadores
        this.geometry.vertices.push(
            new THREE.Vector3( 1, 13, -10),
            new THREE.Vector3( 1, 5, -5),
            new THREE.Vector3(1, 5, -10),
            new THREE.Vector3(-1, 5, -10),
            new THREE.Vector3( -1, 5, -5),
            new THREE.Vector3( -1, 13, -10)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3( 1, 5, -10),
            new THREE.Vector3( -1, 5, -10),
            new THREE.Vector3(-1, 13, -10),
            new THREE.Vector3( 1, 5, -10),
            new THREE.Vector3( -1, 13, -10),
            new THREE.Vector3( 1, 13, -10)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3( -1, 5, -5),
            new THREE.Vector3( 1, 5, -5),
            new THREE.Vector3(1, 13, -10),
            new THREE.Vector3( -1, 5, -5),
            new THREE.Vector3( 1, 13, -10),
            new THREE.Vector3( -1, 13, -10)
        );
        
        //estabilizadores horizontais
        this.geometry.vertices.push(
            new THREE.Vector3( 1, 13, -10),
            new THREE.Vector3( 1, 13, -12),
            new THREE.Vector3(-1, 13, -12),
            new THREE.Vector3( 1, 13, -10),
            new THREE.Vector3(-1, 13, -12),
            new THREE.Vector3( -1, 13, -10)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(-1, 12, -12),
            new THREE.Vector3( 1, 12, -12),
            new THREE.Vector3( 1, 12, -10),
            new THREE.Vector3( -1, 12, -10),
            new THREE.Vector3(-1, 12, -12),
            new THREE.Vector3( 1, 12, -10)
        );
        
        //triangulos estab hor
        this.geometry.vertices.push(
            new THREE.Vector3( -1, 13, -10),
            new THREE.Vector3(-1, 13, -12),
            new THREE.Vector3(-4, 13, -12),
            new THREE.Vector3(-4, 12, -12),
            new THREE.Vector3(-1, 12, -12),
            new THREE.Vector3( -1, 12, -10)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(4, 13, -12),
            new THREE.Vector3(1, 13, -12),
            new THREE.Vector3( 1, 13, -10),
            new THREE.Vector3( 1, 12, -10),
            new THREE.Vector3(1, 12, -12),
            new THREE.Vector3(4, 12, -12)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(4, 12, -12),
            new THREE.Vector3(-4, 12, -12),
            new THREE.Vector3( -4, 13, -12),
            new THREE.Vector3(4, 12, -12),
            new THREE.Vector3( -4, 13, -12),
            new THREE.Vector3(4, 13, -12)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(1, 12, -10),
            new THREE.Vector3(4, 12, -12),
            new THREE.Vector3( 4, 13, -12),
            new THREE.Vector3(1, 12, -10),
            new THREE.Vector3( 4, 13, -12),
            new THREE.Vector3(1, 13, -10)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3( -4, 13, -12),
            new THREE.Vector3(-4, 12, -12),
            new THREE.Vector3(-1, 12, -10),
            new THREE.Vector3(-1, 13, -10),
            new THREE.Vector3( -4, 13, -12),
            new THREE.Vector3(-1, 12, -10)
        );
        
        for(var i = 0; i < this.geometry.vertices.length ; i +=3){
            this.geometry.faces.push(new THREE.Face3(i, i+1, i+2));
        }
        
        this.geometry.computeFaceNormals();
        
        this.material.push(new THREE.MeshPhongMaterial({color: 0x808080, wireframe: true}));

        this.add(new THREE.Mesh(this.geometry, this.material[this.material.length-1]));
    }

    addCokpit(){
        this.geometry = new THREE.Geometry();
        
        this.geometry.vertices.push(
            new THREE.Vector3( 5, 0, 15),
            new THREE.Vector3( 5, 0, 13),
            new THREE.Vector3(5, 5, 13),
            new THREE.Vector3(-5, 5, 13),
            new THREE.Vector3( -5, 0, 13),
            new THREE.Vector3( -5, 0, 15)
        );
        
        this.geometry.vertices.push(
            new THREE.Vector3(-5, 0, 15),
            new THREE.Vector3( 5, 0, 15),
            new THREE.Vector3( 5, 5, 13),
            new THREE.Vector3(-5, 0, 15),
            new THREE.Vector3( 5, 5, 13),
            new THREE.Vector3( -5, 5, 13)
        );

        for(var i = 0; i < this.geometry.vertices.length ; i +=3){
            this.geometry.faces.push(new THREE.Face3(i, i+1, i+2));
        }
        
        this.geometry.computeFaceNormals();
        
        this.material.push(new THREE.MeshPhongMaterial({color: 0x4d4d4d, wireframe: true}));

        this.add(new THREE.Mesh(this.geometry, this.material[this.material.length-1]));
    }

    changeMaterialToPhong(){
        for(var i = 0; i < this.children.length; i++){
            this.children[i].material = new THREE.MeshPhongMaterial({color: this.material[i].color,
                                                                     wireframe: this.children[i].material.wireframe});
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }

    changeMaterialToLambert(){
        for(var i = 0; i < this.children.length; i++){
            this.children[i].material = new THREE.MeshLambertMaterial({color: this.material[i].color,
                                                                     wireframe: this.children[i].material.wireframe});
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }

    changeMaterialToBasic(){
        for(var i = 0; i < this.children.length; i++){
            this.children[i].material = new THREE.MeshBasicMaterial({color: this.material[i].color,
                                                                     wireframe: this.children[i].material.wireframe});
        }
        this.geometry.uvsNeedUpdate = true;
        this.needsUpdate = true;
    }
}