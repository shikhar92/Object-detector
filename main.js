img=""
status=""
objects=[]


function setup(){

canvas=createCanvas(640,440)
canvas.center()
coco=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Detection Started ";

}
function modelLoaded(){

console.log("Modal has Loaded")
status=true
coco.detect(img,gotResult);

}

function gotResult(error,results){

    if(error){

console.log(error)

    }
    else{

console.log(results)
objects=results;
    }


}

function preload(){

img=loadImage("dog_cat.jpg")

}



function draw(){

image(img,0,0,640,440)
if(status != "")
{

for(i=0;i< objects.length; i++)
{

document.getElementById("status").innerHTML="Objects Found";
p=floor(objects[i].confidence*100);
stroke("red")
text(objects[i].label + " " + p + " %" , objects[i].x+15,objects[i].y+15);
noFill()
stroke("yellow")
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);





}

}


}