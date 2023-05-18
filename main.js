function preload() {
    classifier = ml5.imageClassifier("DoodleNet")
}
function setup() {
    canvas = createCanvas(350, 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classiCanva)
}
function draw() {
    strokeWeight(13)

    stroke("purple")

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function clean() {
    background("white")
}
function classiCanva() {
    classifier.classify(canvas, gotResult)
}
function gotResult(error, results) {
    if (error) { 
        console.log("oh noes! ")
    }else {
        console.log(results[0].label)
    }
}