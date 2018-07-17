var prompts = [
  'hello',
  'lol',
  'yay',
  'hi',
  'haha',
  'owo',
  'lololol',
  'wkwkwk',
  'hey',
  'ok',
  'no'
]

function newPrompt()
{
  var randomNo = Math.floor(Math.random() * prompts.length);
  document.getElementById('promptDrawing').textContent = prompts[randomNo];
}
