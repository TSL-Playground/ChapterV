var currentBonusPoint = 0;
var removeCount = 0;

window.onload = function()
{
   var coins;
   for(var i=1; i<=5; i++)
   {
      coins = document.getElementById("coin" + i);
      coins.style.display = "none";
   }
   var minus = document.getElementById("minus1");
   minus.style.display = "none";
}

function addPoint()
{
  if(currentBonusPoint == 5) return;
  currentBonusPoint++;
  var coins = document.getElementById("coin" + currentBonusPoint);
  coins.style.display = "inline-block";
}

function removePoint()
{
  if(currentBonusPoint == 0) return;
  removeCount++;
  if(removeCount == 2)
  {
    var coins = document.getElementById("coin" + currentBonusPoint);
    coins.style.display = "none";
    var minus = document.getElementById("minus1");
    minus.style.display = "none";
    currentBonusPoint--;
    removeCount = 0;
  }
  else
  {
    var minus = document.getElementById("minus1");
    minus.style.display = "inline-block";
  }
}
