img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(435,160);
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status : detecting Objects";
}

function draw(){
    image(img,0,0,400,400);
    if(status != ""){
        for (var i = 0; i < objects.length; i++) { document.getElementById("status").innerHTML = "Status : Object Detected";
         fill(255, 0, 0); percent = floor(objects[1].confidence * 100);
          text(objects[1].label + " " + percent + "%", objects[1].x + 15, objects[1].y + 15);
           noFill();
            stroke(255, 0, 0);
             rect(objects[1].x, objects[1].y, objects[1].width, objects[1].height);

             fill(255, 0, 0); percent = floor(objects[0].confidence * 100);
          text(objects[0].label + " " + percent + "%", objects[0].x -100, objects[0].y + 15);
           noFill();
            stroke(255, 0, 0);
             rect(objects[0].x-200, objects[0].y, objects[0].width, objects[0].height); }
    } 
}

function modelloaded(){
    console.log("ooooo yaaaa!!!!");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects=result;
    }
}