const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


var image = new Image();
image.src = './hangman copy.jpg';


window.onload = function(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d")
  const image = document. getElementById("myImage");
  ctx.drawImage(image, 100, 100);
}