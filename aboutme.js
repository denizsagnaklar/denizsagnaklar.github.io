var imageSources = [ "denizphoto2.png", "denizphoto3.png", "denizphoto.png"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 4000);
