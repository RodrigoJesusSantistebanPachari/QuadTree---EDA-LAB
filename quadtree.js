class QuadTree {
    constructor (perimetro, max){
        this.perimetro = perimetro ; 
        this.max = max; 
        this.puntos = []; 
        this.dividido = false ;
    }
    dividir () {
        // Algoritmo
        // 1: Crear 4 hijos : qt_northeast , qt_northwest , qt_southeast , qt_southwest
        let x = this.perimetro.x;
        let y = this.perimetro.y;
        let w = this.perimetro.w;
        let h = this.perimetro.h;
        let ne = new Rectangulo(x+w/2 , y-h/2 , w/2 , h/2);
        let nw = new Rectangulo(x-w/2 , y-h/2 , w/2 , h/2);
        let se = new Rectangulo(x+w/2 , y+h/2 , w/2 , h/2);
        let sw = new Rectangulo(x-w/2 , y+h/2 , w/2 , h/2);
        let qt_northeast = new QuadTree(ne,this.max);
        let qt_northwest = new QuadTree(nw,this.max);
        let qt_southeast = new QuadTree(se,this.max);
        let qt_southwest = new QuadTree(sw,this.max);
        this.northeast = qt_northeast;
        this.northwest = qt_northwest;
        this.southeast = qt_southeast;
        this.southwest = qt_southwest;
        this.dividido=true;
    }

    insertar (punto){
        if(!this.perimetro.contiene(punto))
            return

        if(this.puntos.length<this.max)
            this.puntos.push(punto);

        else{
            if(!this.dividido)
                this.dividir();
            
            this.northeast.insertar(punto);
            this.northwest.insertar(punto);
            this.southeast.insertar(punto);
            this.southwest.insertar(punto);
        }
    }

    buscar(rango,encontrado){
        if(!this.perimetro.intersecta(rango))
            return;
        
        for(var i=0;i<this.puntos.length;i++){
            count++;
            if(rango.contiene(this.puntos[i]))
                encontrado.push(this.puntos[i]);
        }
        if(this.dividido){
            this.northeast.buscar(rango,encontrado);
            this.northwest.buscar(rango,encontrado);
            this.southeast.buscar(rango,encontrado);
            this.southwest.buscar(rango,encontrado);
        }
    }
    
    show(){
        stroke(200);
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        rect (this.perimetro.x, this.perimetro.y, this.perimetro.w*2 , this.perimetro.h*2);
        if(this.dividido){
            this.northeast.show();
            this.northwest.show();
            this.southeast.show();
            this.southwest.show();
        }

        for(let i of this.puntos){
            strokeWeight (4) ;
            point (i.x, i.y);
        }
    }
}  