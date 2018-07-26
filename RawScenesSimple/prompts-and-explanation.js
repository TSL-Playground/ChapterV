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
var playerPromptMap[10];

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

function getPrompt(noPlayer)
{
  var mapCopy = playerPromptMap.slice();
}

/*function newPrompt()
{
  var randomNo = Math.floor(Math.random() * prompts.length);
  document.getElementById('promptDrawing').textContent = prompts[randomNo];
}*/
