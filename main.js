let quad_tree;
let count = 0;
function setup(){
	createCanvas (400,400) ;
	let boundary = new Rectangulo(200,200,200,200);
	quad_tree = new QuadTree (boundary ,4);
	console .log (quad_tree);
	for (let i =0; i < 50; i ++){
		let p = new Punto(Math.random ()*400, Math.random()*400);
		quad_tree.insertar(p);
	}

	background(0);
	quad_tree.show();
}

function draw () {
	background(0) ;
	quad_tree.show();
	stroke(0,255,0) ;
	rectMode(CENTER);
	let range = new Rectangulo (mouseX, mouseY, 50, 50)
	rect(range.x, range.y, range.w*2 , range.h*2) ;
	let points = [];
	quad_tree.buscar(range, points);
	for (let p of points){
		strokeWeight(4);
		point(p.x, p.y);
	}
}