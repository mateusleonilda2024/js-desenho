function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    circle(30, 20, 20);
    fill("violet");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 20);
    }
  }
  