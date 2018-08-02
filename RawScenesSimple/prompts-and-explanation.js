var promptLength = prompts.length;
var playerPromptMap = new Array(10);
var fakePrompt;

function newPrompt(noPlayer)
{
  var chosenNo = new Array(promptLength).fill(false);
  for(var i=0; i<noPlayer+1; i++)
  {
    var no = Math.floor(Math.random() * promptLength);
    while(1)
    {
      if(!chosenNo[no])
      {
        chosenNo[no] = true;
        playerPromptMap[i] = no;
        if(i < noPlayer)
        {
          // TODO: display the prompt in topic-display.html
        }
        else fakePrompt = no;
        break;
      }
      no = Math.floor(Math.random() * promptLength);
    }
  }
}

// Fisher-Yates Shuffle
function shuffle(array)
{
  var left = array.length, tmp, i;

  while(left)
  {
    i = Math.floor(Math.random() * left--);
    tmp = array[left];
    array[left] = array[i];
    array[i] = tmp;
  }

  return array;
}

function getPrompt(noPlayer)
{
  var order = [];
  for(var i=0; i<noPlayer+1; i++) order.push(i);
  order = shuffle(order);
  var promptOrder = new Array(10);
  for(var i=0; i<noPlayer+1; i++) promptOrder[i] = playerPromptMap[order[i]];
  return promptOrder;
}

var promptOrder;

function setPromptOrder(noPlayer)
{
  promptOrder = getPrompt(noPlayer);
}

function printPrompt(noPlayer)
{
  setPromptOrder(noPlayer);
  for(var i=0; i<noPlayer+1; i++)
  {
    document.getElementById('prompt' + (i+1)).textContent += prompts[promptOrder[i]];
  }
}



/*function newPrompt()
{
  var randomNo = Math.floor(Math.random() * prompts.length);
  document.getElementById('promptDrawing').textContent = prompts[randomNo];
}*/
