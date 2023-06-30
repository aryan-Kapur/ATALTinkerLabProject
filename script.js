Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality: 90,
  });

  camera = document.querySelector('.camera');
  Webcam.attach(camera);

  function snapshot() {
    Webcam.snap(function(data_uri) {
        document.querySelector('.result').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }

  console.log("ml5 Version is :" + ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SVwkyMYLc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, result) {
    if(error) {
        console.error(error);
    }

    else {
        console.log(result)
        document.querySelector('#prediction').innerHTML = result[0].label;
    }
}