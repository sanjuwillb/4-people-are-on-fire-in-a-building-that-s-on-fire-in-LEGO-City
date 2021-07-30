class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
        push()
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        stroke("red")
        strokeWeight(20)
        line(pointA.x-20, pointA.y-20, pointB.x, pointB.y-45)
        pop()
    }
}