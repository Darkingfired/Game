function draw() {
  var ctx = document.getElementById('myCanvas').getContext('2d')
  var img = new Image()
  img.src = '2c.jpg'
  img.src = './hangman_copy.jpg'

  ctx.drawImage(img, 0, 0)
}