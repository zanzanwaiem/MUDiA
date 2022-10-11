
function setup() {
  createCanvas(400, 400);
  zombie = new WalkingDead();
  zombie1 = new WalkingDead();
  zombie2 = new WalkingDead();
  zombie3 = new WalkingDead();
  zombie4= new WalkingDead();
  zombie5 = new WalkingDead();
  zombie6= new WalkingDead();
  zombie7 = new WalkingDead();
  
}


function draw() {
  background(0, 70);
  zombie.walker();
  zombie.display();
  zombie1.walker();
  zombie1.display();
  zombie2.walker();
  zombie2.display();
  zombie3.walker();
  zombie3.display();
  zombie4.walker();
  zombie4.display();
  zombie5.walker();
  zombie5.display();
  zombie6.walker();
  zombie6.display();
  zombie7.walker();
  zombie7.display();
  
}

class WalkingDead{
  
  constructor() {
    this.j = 20;
    this.w = 20;
    this.w1 = 20;
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    noStroke();
    
  }
  
  display() {
    // ellipse(this.pos.x, this.pos.y, this.w+random(10), this.w+random(10));
    this.w = this.w + random(3, -3);
    this.w1 = this.w1 + random(3, -3);
    if(this.w > 25){
      this.w = 20;
    }
    if(this.w1 > 25){
      this.w1 = 20;
    }
    if(this.w <15){
      this.w = 20;
    }
    if(this.w1 <15){
      this.w1 = 20;
    }
    butt(this.pos.x, this.pos.y, this.w, this.w1, this.j);
  }
  
  walker() {
    this.acc = createVector(random(0.1, -0.1), random(0.1, -0.1));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}

function butt(a, b, c, c1, w){
  fill(242, 204, 128);
  ellipse(a - 5, b, c);
  ellipse(a + 5, b, c1);
  fill(255, 0, 0);
  rect(a - 15, b+3, w- 5, w - 4);
  rect(a, b+3, w- 5, w - 4);
}
