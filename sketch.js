
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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setup() {
    createCanvas(1000, 1000)
    frameRate(100)
    background(255)
    stroke(255)
    fill(0)
    createLoop(100)
    ampX = width/1.5
    ampY = height/1.5
    background(0)
    console.log(randomStop)
}

function draw() {

    fill(animLoop.progress, 0.5, 1)
    translate(width/2,height/2)
    
    const x1 = animLoop.noise({ radius: radX, seed: seedX1 }) * ampX
    const y1 = animLoop.noise({ radius: radY, seed: seedY1 }) * ampY
    const x2 = animLoop.noise({ radius: radX, seed: seedX2 }) * ampX
    const y2 = animLoop.noise({ radius: radY, seed: seedY2 }) * ampY
    stroke(255)
    //rect(x1,y1,100,100);
    i++
    if(i % 10 == 0){ 
    stroke(200)
    line(x1,y1,x2,y2)
    }
}