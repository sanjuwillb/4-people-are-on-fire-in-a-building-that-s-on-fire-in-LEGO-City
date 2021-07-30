var e, i
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y, 70, 70);
    this.image = loadImage("sprites/bird.png");
    this.foot = loadImage("sprites/smokefoot.png")
    this.feet = []
  }
  cheese(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
  }
  on(){
    e = 1
  }
  off(){
    e = 0
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (e === 1){
      var position = [this.body.position.x,this.body.position.y]
      this.feet.push(position)
      for (i = 0; i < this.feet.length; i++){
        image(this.foot,this.feet[i][0],this.feet[i][1])
      }
    }
    super.display();
  }
}
