img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(435,160);
    objectdetector=ml5.objectDetector('cocossd'),modelloaded;
    document.getElementById("status").innerHTML="Status : detecting Objects";
}

function draw(){
    image(img,0,0,400,400);
    fill("blue")
    text("dog",100,100,);
    noFill();
    stroke("blue");
    //🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈//
//🌟 Thank you for using ml5.js v0.6.0 🌟

//Please read our community statement to ensure 
//that the use of this software reflects the values 
//of the ml5.js community:
//↳ https://ml5js.org/about

//Reporting: 
//↳ https://github.com/ml5js/ml5-library/issues
//↳ Email: info@ml5js.org 
//🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈//
rect(100,50,100,400);

    fill("red")
    text("cat",200,200,);
    noFill();
    stroke("red");

    rect(200,100,300,258)
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
        console.log(result)
    }
}