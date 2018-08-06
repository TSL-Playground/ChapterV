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

// ------------- Hide and Show Chosen Prompt Display -------------
// SCREEN
function showChosenPromptDisplay()
{
  var x = document.getElementById("chosen-prompt-display");
  x.style.display = "block";
  jQuery('#chosen-prompt-display-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideChosenPromptDisplay()
{
  var x = document.getElementById("chosen-prompt-display");
  x.style.display = "none";
  jQuery('#chosen-prompt-display-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// CONTROLLER
function showChosenPromptController()
{
  var x = document.getElementById("chosen-prompt-controller");
  x.style.display = "block";
  jQuery('#chosen-prompt-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideChosenPromptController()
{
  var x = document.getElementById("chosen-prompt-controller");
  x.style.display = "none";
  jQuery('#chosen-prompt-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

function showWaitForOthers()
{
  var x = document.getElementById("wait-for-others");
  x.style.display = "block";
  jQuery('#time-ends-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideWaitForOthers()
{
  var x = document.getElementById("wait-for-others");
  x.style.display = "none";
  jQuery('#time-ends-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// ------------- Show/Hide Topic with Description --------------
// SCREEN
function showTopicWithDesc()
{
  var x = document.getElementById("topic-with-desc");
  x.style.display = "block";
  jQuery('#topic-with-desc-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideTopicWithDesc()
{
  var x = document.getElementById("topic-with-desc");
  x.style.display = "none";
  jQuery('#topic-with-desc-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// CONTROLLER
function showVotingOtherPlayer()
{
  var x = document.getElementById("voting-other-player-controller");
  x.style.display = "block";
  jQuery('#voting-other-player-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideVotingOtherPlayer()
{
  var x = document.getElementById("voting-other-player-controller");
  x.style.display = "none";
  jQuery('#voting-other-player-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

function showVotingPlayerA()
{
  var x = document.getElementById("voting-player-a-controller");
  x.style.display = "block";
  jQuery('#voting-player-a-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideVotingPlayerA()
{
  var x = document.getElementById("voting-player-a-controller");
  x.style.display = "none";
  jQuery('#voting-player-a-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// ------------ Add Point Bonus Round -------------
// CONTROLLER
function showAddPointController()
{
  var x = document.getElementById("add-point-controller");
  x.style.display = "block";
  jQuery('#add-point-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideAddPointController()
{
  var x = document.getElementById("add-point-controller");
  x.style.display = "none";
  jQuery('#add-point-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// ----------- Show/Hide All Player Score -------------
// SCREEN
function showAllPlayerScore()
{
  var x = document.getElementById("all-player-score");
  x.style.display = "block";
  jQuery('#all-player-score-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideAllPlayerScore()
{
  var x = document.getElementById("all-player-score");
  x.style.display = "none";
  jQuery('#all-player-score-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}

// CONTROLLER
function showAllPlayerScoreController()
{
  var x = document.getElementById("all-player-score-controller");
  x.style.display = "block";
  jQuery('#all-player-score-controller-style').removeAttr('disabled').attr('rel', 'stylesheet');
}

function hideAllPlayerScoreController()
{
  var x = document.getElementById("all-player-score-controller");
  x.style.display = "none";
  jQuery('#all-player-score-controller-style').attr('disabled', true).attr('rel', 'alternate stylesheet');
}
