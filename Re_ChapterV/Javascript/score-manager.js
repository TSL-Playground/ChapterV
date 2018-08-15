var playerScore;
var maxScore = 45;

function initScore()
{
  playerScore = new Array(20);
  for(var i=0;i<20;i++) playerScore[i] = 0;
}

function addScore(player, value)
{
  playerScore[player] += value;
}

function addBonusPoint(value)
{
  playerScore[currentPlayerProcessed] += value;
}

// print their current score
function printCurrentScore()
{
  for (var i=0; i<noActivePlayer; i++)
  {
    airconsole.message(airconsole.convertPlayerNumberToDeviceId(i), {deviceCurrentScore: playerScore[i]});
  }
}

// print all current SCORE
function printAllScore()
{
  document.getElementById('listCurrentScore').textContent = "";
  for (var i=0; i<noActivePlayer; i++)
  {
    document.getElementById('listCurrentScore').textContent += "Player " + (i+1) + ": " + playerScore[i] + "\r\n";
  }
}

// check whether any of the player have a score >= maxScore
function checkEndGame()
{
  for (var i=0; i<noActivePlayer; i++)
  {
    if(playerScore[i] >= maxScore) return true;
  }
  return false;
}
