class Rectangulo {
    constructor (x, y, w, h){
	    this.x = x;
	    this.y = y;
	    this.w = w; 
	    this.h = h; 
    }

    contiene(punto){
        if((punto.x<=this.x+this.w && punto.x>=this.x-this.w) 
        	&& 
        	(punto.y<=this.y+this.h && punto.y>=this.y-this.h))
            return true;
        
        else
            return false;
        
    }

    intersecta(rango){
        if(rango.x-rango.w > this.x+this.w || 
        	rango.x+this.w < this.x-this.w || 
        	rango.y-rango.h > this.y+this.h || 
        	rango.y+this.h < this.y-this.h)
            return false;
        
        else
            return true;
        
    }
}