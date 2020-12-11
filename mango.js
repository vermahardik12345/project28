class mango{
    constructor(x,y,r){
       var options={
           'isStatic':true,
           'restitution':0,
            'density':1.2,
            'friction':0,
        
       }
       
       
       
        this.x=x;
        this.y=y;
        this.r=r
       this.img=loadImage("mango.png");
       this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       
         push();
        
        translate(pos.x,pos.y);
      rotate(angle);
       fill("pink");
        imageMode(CENTER);
        image(this.img,0,0,this.r,this.r); 
        pop();
    }

};