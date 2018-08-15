// Time Ends Scene Countdown
function coolDown()
{
  var timeLimit = 3; // in seconds
  var x = setInterval(function() {
    timeLimit--;
    if(timeLimit <= 0)
    {
      clearInterval(x);
      for(var i=0;i<noActivePlayer;i++)
      {
        var y = airconsole.convertPlayerNumberToDeviceId(i);
        if(y == masterControllerId) airconsole.message(y, {coolDownEnds: true, isMasterController: true});
        else airconsole.message(y, {coolDownEnds: true});
      }
      hideTimerDrawing();
      showChosenPromptDisplay();
      printPrompt(noActivePlayer);
    }
  }, 1000);
}

// Time Drawing Countdown
function countDown()
{
  var timeLimit = 10; //in seconds
  document.getElementById("timeEnd").innerHTML = "";
  document.getElementById("seconds").innerHTML = timeLimit;
  var x = setInterval(function() {
    timeLimit--;
    if(timeLimit <= 0)
    {
      clearInterval(x);
      document.getElementById("timeEnd").innerHTML = "Time Ends!";
      document.getElementById("seconds").innerHTML = "0";
      airconsole.broadcast({drawingTimeEnds: true});
      coolDown();
    }
    document.getElementById("seconds").innerHTML = timeLimit;
  }, 1000);
}
