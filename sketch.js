
const seedX1 = Math.random()
const seedY1 = Math.random()
const seedX2 = Math.random()
const seedY2 = Math.random()
const radX = 1
const radY =1
let ampX
let ampY
let i = 0
let randomStop = getRndInteger(2000,5000)
let paused = false

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setup() {
    // createCanvas(windowWidth, windowHeight)
    createCanvas(3000, 2400)
    frameRate(100)
    background(255)
    stroke(255)
    fill(0)
    createLoop(100)
    strokeWeight(3)
    ampX = width/1.5
    ampY = height/1.5
    background(0)
    //Following handles the dialogue box for the direction when the program starts
    instructions = ["This is a random art generator:",
    "\nAuthor: Vannaroth Ngoc",
    "\nPress 'R' on the keyboard to restart and create new drawing",
    "\nPress 'P' on the keyboard to stop drawing. Press P again to resume",
    "\nPress 'S' on keyboard to save the the image.",
    "\nPress 'H' on the keyboard to show this window again"]
    window.alert(instructions[0] + instructions[1] + instructions[2] + instructions[3] + instructions[4] + instructions[5])
}

function draw() {
  if(!paused){
    fill(animLoop.progress, 0.5, 1)
    translate(width/2,height/2)
    const x1 = animLoop.noise({ radius: radX, seed: seedX1 }) * ampX
    const y1 = animLoop.noise({ radius: radY, seed: seedY1 }) * ampY
    const x2 = animLoop.noise({ radius: radX, seed: seedX2 }) * ampX
    const y2 = animLoop.noise({ radius: radY, seed: seedY2 }) * ampY
    stroke(255)
    i++
    //Will draw a line every 10
    if(i % 10 == 0){ 
      stroke(200)
      line(x1,y1,x2,y2)
    }
  }
}

//Acts as an action handler
function keyTyped() {
  if (key == 'h'){
    window.alert(instructions[0] + instructions[1] + instructions[2] + instructions[3] + instructions[4] + instructions[5])
  } else if (key == 'p'){
    if(paused == false){
      paused = true
    }else{
      paused = false
    }
  }else if (key == 's'){
    save('myCanvas.jpg');
  }else if (key == 'r'){
    createCanvas(3000, 2400)
    background(0)
    seedX1 = Math.random()
    seedY1 = Math.random()
    seedX2 = Math.random()
    seedY2 = Math.random()
  }
  // uncomment to prevent any default behavior
  // return false;
}

function reverse(){

}