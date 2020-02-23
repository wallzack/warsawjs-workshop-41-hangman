console.log('game script loaded');

const gameContent = document.getElementById('gameContent');
gameContent.textContent = '';

const gameState = {
  name: '',
  activeView: 'welcome', 
};

function welcomeView () {
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Hangman';

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Enter your name';
  nameInput.addEventListener('input', (event) => {
    gameState.name = event.target.value;
    console.log(name);
  });

  const nameInputLabel = document.createElement('div');

  const playButton = document.createElement('button');
  playButton.textContent = 'Play game!';
  playButton.addEventListener('click', () => {
    gameState.activeView = 'play';
    render();
  });

  gameContent.appendChild(header);
  gameContent.appendChild(nameInputLabel);
  gameContent.appendChild(nameInput);
  gameContent.appendChild(playButton);

};

function playView() {
  const header = document.createElement('h1');
  header.textContent = 'Hi ' + gameState.name + '!';

  const endGameButton = document.createElement('button');
  endGameButton.textContent = 'End game!';
  endGameButton.addEventListener('click', () => {
    gameState.activeView = 'endGame';
    render();
  });

  gameContent.appendChild(header);
  gameContent.appendChild(endGameButton);
};

function endGameView() {
  const header = document.createElement('h1');
  header.textContent = 'Game finished!';

  const playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'Play again!';
  playAgainButton.addEventListener('click', () => {
    gameState.activeView = 'welcome';
    render();
  });

  gameContent.appendChild(header);
  gameContent.appendChild(playAgainButton);
}

function render () {
  gameContent.textContent = '';

  if (gameState.activeView === 'welcome') {
    welcomeView();
  } else if 
    (gameState.activeView === 'play') {
      playView();
  } else {
    (gameState.activeView === 'end')
      endGameView();
  };
};
render();







