var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

   
    setTimeout(function()
    {take_snapshot(); save(); var imge_id = document.getElementById("result1")}, 5000);

    setTimeout1(function()
    {take_snapshot(); save(); var imge_id = document.getElementById("result2")}, 5000);

    setTimeout2(function()
    {take_snapshot(); save(); var imge_id = document.getElementById("result3")}, 5000);
}

function take_snapshot(){
    

    Webcam.snap(function(data_uri){
      if(imge_id==result1){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
      }
      (imge_id==result1){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
      }
    });
}


