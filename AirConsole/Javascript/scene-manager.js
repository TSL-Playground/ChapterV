// ------------ Hide and Show Menu ---------------
// SCREEN
function showMenu()
{
  var x = document.getElementById("menu");
  x.style.display = "block";
  jQuery('#menu-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideMenu()
{
  var x = document.getElementById("menu");
  x.style.display = "none";
  jQuery('#menu-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// CONTROLLER
function showMenuController()
{
  var x = document.getElementById("menu-controller");
  x.style.display = "block";
  jQuery('#menu-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideMenuController()
{
  var x = document.getElementById("menu-controller");
  x.style.display = "none";
  jQuery('#menu-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// ------------ Hide and Show Drawing Topic/Timer ------------
// SCREEN
function showTimerDrawing()
{
  var x = document.getElementById("timer-drawing");
  x.style.display = "block";
  jQuery('#timer-drawing-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideTimerDrawing()
{
  var x = document.getElementById("timer-drawing");
  x.style.display = "none";
  jQuery('#timer-drawing-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// CONTROLLER
function showTopicDisplay()
{
  var x = document.getElementById("topic-display");
  x.style.display = "block";
  jQuery('#topic-display-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideTopicDisplay()
{
  var x = document.getElementById("topic-display");
  x.style.display = "none";
  jQuery('#topic-display-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

function showTimeEnds()
{
  var x = document.getElementById("time-ends");
  x.style.display = "block";
  jQuery('#time-ends-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideTimeEnds()
{
  var x = document.getElementById("time-ends");
  x.style.display = "none";
  jQuery('#time-ends-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}
