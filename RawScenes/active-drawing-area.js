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
    context.lineTo(pos.clientX, pos.clientY-offsetY);
    context.stroke();
    context.beginPath();
    context.arc(pos.clientX, pos.clientY-offsetY, lineRadius, 0, 2*Math.PI);
    context.fill();
    context.beginPath();
    context.moveTo(pos.clientX, pos.clientY-offsetY);
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

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', stopDraw);
