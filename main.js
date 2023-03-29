 function start(){
setTimeout(function(){
    img_id = "selfie1";
    take_snapshot();
    speak_data = "TAking Your Selfie IN 5 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
 Webcam.attach(camera);
},5000); 

setTimeout(function(){
    img_id = "selfie2";
    take_snapshot();
    speak_data = "TAking Your Selfie IN 5 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
 Webcam.attach(camera);
},5000); 

setTimeout(function(){
    img_id = "selfi3";
    take_snapshot();
    speak_data = "TAking Your Selfie IN 5 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
 Webcam.attach(camera);
},5000); 

function take_snapshot(){
    console.log(img_id);
 
    Webcam.snap(function (data_uri){
        if (img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id= 'selfie1' src ="+ data_uri + ">"
        }

        if (img_id == "selfie2"){
            document.getElementById("result2").innerHTML = "<img id= 'selfie2' src ="+ data_uri + ">"
        }

        if (img_id == "selfie3"){
            document.getElementById("result3").innerHTML = "<img id= 'selfie1' src ="+ data_uri + ">"
        }
    })
}
 }
 Webcam.set({
    width:300,
    height:400,
    image_format: "png",
    png_quality : 90
 });
 
 camera = document.getElementById(camera)