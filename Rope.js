class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Matter.Constraint.create(options);
        World.add(world,this.Rope);
    }
    display(){
     var   pointA=this.Rope.bodyA.position;
     var   pointB=this.Rope.bodyB.position;
    strokeWeight(2);
    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y
    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}