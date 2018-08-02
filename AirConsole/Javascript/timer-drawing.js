function countDown()
{
  // Drawing Countdown
  var timeLimit = 10; //in seconds
  document.getElementById("seconds").innerHTML = timeLimit;
  var x = setInterval(function() {
    timeLimit--;
    if(timeLimit <= 0)
    {
      clearInterval(x);
      document.getElementById("timeEnd").innerHTML = "Time Ends!";
      document.getElementById("seconds").innerHTML = "0";
      airconsole.broadcast({drawingTimeEnds: true})
    }
    document.getElementById("seconds").innerHTML = timeLimit;
  }, 1000);
}
