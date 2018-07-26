/* TODO: #activeDrawingArea: fix bottom margin so that
   when window is smaller in height it doesn't coincide with
   action card boxes
*/

var canvas = document.getElementById("activeDrawingArea");
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context.fillStyle = "#91deff";
//context.fillRect(0, 0, canvas.width, canvas.height);

var lineRadius = 5;
var isDragging = false;
var offsetY = 32;

context.lineWidth = lineRadius * 2;

function drawLine(pos)
{
  if(isDragging)
  {
    context.lineTo(pos.touches[0].clientX, pos.touches[0].clientY-offsetY);
    context.stroke();
    context.beginPath();
    context.arc(pos.touches[0].clientX, pos.touches[0].clientY-offsetY, lineRadius, 0, 2*Math.PI);
    context.fill();
    context.beginPath();
    context.moveTo(pos.touches[0].clientX, pos.touches[0].clientY-offsetY);
  }
}

function startDraw(pos)
{
  isDragging = true;
  drawLine(pos);
}

function stopDraw()
{
  isDragging = false;
  context.beginPath();
}

function clearCanvas()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
}

canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', drawLine);
canvas.addEventListener('touchend', stopDraw);

/*canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', stopDraw);*/
