var i = 255
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.fire = loadImage("fire.png")
    this.Visibility = 255
    this.width = width
    this.length = height
  }
  display(){
    if (this.body.speed<6){
      super.display()
      image(this.fire,this.body.position.x-this.width/2,this.body.position.y-60,this.width,50)
    }
    else{
     World.remove(world, this.body)
     push()
     this.Visibility = this.Visibility-10
     tint(255,this.Visibility)
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.length)
     image(this.fire,this.body.position.x,this.body.position.y-30,this.width,50)
     if (this.Visibility < 0){
      if (this.body.speed > 6.02){
        score1 = score1 + 10000
        this.body.speed = 6.01
      }
    }
     pop()
    }
  }
};