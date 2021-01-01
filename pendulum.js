class Pendulum{

    constructor(x,y,r){
    
    
    var options={
    
    isStatic:false,
   
    density:0.4
    }
    
    this.x=x
    this.y=y
    this.r=r
    
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
    }
    
    display(){
   var pos=this.body.position
    push();
    
    ellipseMode(RADIUS)
    stroke(240)
    strokeWeight(2)
    fill(0,0,0)
    

    ellipse(pos.x,pos.y,this.r,this.r)
    pop();
    }
    
    }
    
    