class tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=370;
        this.height=380;
        var  options={
            isStatic:true,

        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image=loadImage("tree.png");
        World.add(world,this.body);

    }
    display(){
        var angle=this.body.angle;
        
  
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    }
}