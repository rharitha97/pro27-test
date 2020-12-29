class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetY, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointOfBodyA = this.rope.bodyA.position;
        var pointOfBodyB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointOfBodyA.x, pointOfBodyA.y, pointOfBodyB.x+this.offsetX, pointOfBodyB.y+this.offsetY);
    }
}
