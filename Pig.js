var i = 255
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,70);
    this.image = loadImage("sprites/enemy.png");
    this.fire = loadImage("fire.png")
    this.Visibility=255
  }
  display(){
    if (this.body.speed<4){
      super.display()
      image(this.fire,this.body.position.x-10,this.body.position.y-70,20,40)
    }
    else{
     World.remove(world, this.body)
     push()
     this.Visibility = this.Visibility-10
     tint(255,this.Visibility)
     image(this.image,this.body.position.x,this.body.position.y,50,70)
     image(this.fire,this.body.position.x+15,this.body.position.y-30,20,40)
     if (this.Visibility < 0){
      if (this.body.speed > 4.02){
        score1 = score1 + 20000
        this.body.speed = 4.01
      }
    }
     pop()
    }
  }
};