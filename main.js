function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wukqFMCQW/model.json",modelready);
}

function modelready(){
    classifier.classify(got_results);
}

function got_results(error,results){
    if (error) {
     console.log(error);
    } else {
       console.log(results);
       random_r =Math.floor(Math.random()*255)+1;
       random_g =Math.floor(Math.random()*255)+1;
       random_b =Math.floor(Math.random()*255)+1;

       document.getElementById("result").innerHTML="i can hear - "+results[0].label;
       document.getElementById("result").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       document.getElementById("accuracy").innerHTML="accuracy - "+results[0].confidence;
       document.getElementById("accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";

   img_1=document.getElementById("lion");
   img_2=document.getElementById("dog");
   img_3=document.getElementById("snake");
   

   if (results[0].label=="tapping") {
    img_1.src="snake.gif";
    img_2.src="dog.png";
    img_3.src="lion-removebg-preview.png";
    

   } else if(results[0].label=="snap"){
    img_1.src="snake.webp";
    img_2.src="shiba-dog-jump.gif";
    img_3.src="lion-removebg-preview..png";
    
   }
   else if(results[0].label=="clap"){
    img_1.src="snake.webp";
    img_2.src="dog.png";
    img_3.src="lion.gif";
    
   }

 }

}