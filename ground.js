class ground{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var  options={
            isStatic:true,

        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        //this.image=loadImage("tree.png");
        World.add(world,this.body);

    }
    display(){
        var angle=this.body.angle;
        
  
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}