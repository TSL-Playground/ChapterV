var prompts = [
  'hello',
  'lol',
  'yay',
  'hi',
  'haha',
  'owo',
  'lololol',
  'haaaa',
  'hey',
  'ok',
  'no',
  'Learning Science'
]

var promptLength = prompts.length;
var playerPromptMap = new Array(10);

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

function printPrompt(noPlayer)
{
  var promptOrder = getPrompt(noPlayer);
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
