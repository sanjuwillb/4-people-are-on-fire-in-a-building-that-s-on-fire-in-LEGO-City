var i = 255
class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visibility = 255
    this.height = height
  }
  display(){
    if (this.body.speed<5){
      super.display()
    }
    else{
     World.remove(world, this.body)
     push()
     this.Visibility = this.Visibility-5
     tint(255,this.Visibility)
     image(this.image,this.body.position.x,this.body.position.y,20,this.height)
     if (this.Visibility < 0){
      if (this.body.speed > 5.02){
        score1 = score1 + 3000
        this.body.speed = 5.01
      }
    }
     pop()
    }
  }
};