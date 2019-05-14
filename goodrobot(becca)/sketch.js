function setup() {
  createCanvas(1000, 1000);
  background(0);
  frameRate(6);
  i = 0;
  
}

function draw() {
  
   background(255);
  //background squares
  stroke(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  fill(204, 255, 255);
  //rect(250, 250, 250, 250);
  quad(0-i, 0, 500-i, 0, 500-i, 500, 0-i, 500);
  
  stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(random(1))
  fill(255, 102, 102)
  quad(500- i, 0, 1000-i, 0, 1000-i, 500, 500-i, 500)

  stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(random(1))
  fill(255, 244, 124)
  quad(0 - i, 500, 500 - i, 500, 500 - i, 1000, 0 - i, 1000)

  
  stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(2)
  fill(66, 244, 200)
  quad(500-i, 500, 1000-i, 500, 1000-i, 1000, 500-i, 1000)
  
  
  //second round of squares
  stroke(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  fill(204, 255, 255);
  //rect(250, 250, 250, 250);
  quad(1000-i, 0, 1500-i, 0, 1500-i, 500, 1000-i, 500);
  
  stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(random(1))
  fill(255, 102, 102)
  quad(1500- i, 0, 2000-i, 0, 2000-i, 500, 1500-i, 500)

  stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(random(1))
  fill(255, 244, 124)
  quad(1000 - i, 500, 1500 - i, 1500, 500 - i, 2000, 1000 - i, 1000)

  
  /*stroke(random(0,255), random(0,255), random(0,255))
  strokeWeight(2, 4)*/
  fill(66, 244, 200)
  quad(1000-i, 500, 1500-i, 500, 1500-i, 1000, 1500-i, 1000)

  i = i + 5

  
  //robot body
  


  noFill();
  strokeWeight(20.0);
  strokeJoin(MITER);
  beginShape();
  vertex(400, 400);
  vertex(600, 500);
  vertex(400, 600);
  endShape();
  
  noFill();
  strokeWeight(20.0);
  strokeJoin(MITER);
  beginShape();
  vertex(500, random(200, 600));
  vertex(700, 500);
  vertex(500, 600);
  endShape();
  
  
  
  stroke(255, 102, 0);
  stroke(0, 0, 0);
  bezier(400, 100, 50, 50, 450, 450, 75, 400);
  
  
}
