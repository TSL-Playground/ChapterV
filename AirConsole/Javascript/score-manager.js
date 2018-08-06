var playerScore;
var maxScore = 45;

function initScore()
{
  playerScore = new Array(10);
  for(var i=0;i<9;i++) playerScore[i] = 0;
}

function addScore(player, value)
{
  playerScore[player] += value;
  // TODO: if(playerScore[player] >= maxScore)
}

// print their current score
function printCurrentScore()
{
  for (var i=0; i<noActivePlayer; i++)
  {
    airconsole.message(airconsole.convertPlayerNumberToDeviceId(i), {deviceCurrentScore: playerScore[i]});
  }
}
