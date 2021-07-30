class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.1,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push()
            strokeWeight(4);
            stroke("steelblue")
            if (this.sling.bodyA === cheese.body){
              line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        pop()
        }
    }
    
}