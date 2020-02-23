console.log('game script loaded');

const gameContent = document.getElementById('gameContent');
gameContent.textContent = '';

const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];


const gameState = {
  name: '',
  activeView: 'welcome', 
  selectedLetters: [],
};

function stateUpdate(newGameState) {
  Object.assign(gameState, newGameState);
  render();
}

function welcomeView () {
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Hangman';

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Enter your name';
  
  nameInput.addEventListener('input', (event) => {
    stateUpdate({name: event.target.value});
  });

  const nameInputLabel = document.createElement('div');

  const playButton = document.createElement('button');
  playButton.textContent = 'Play game!';
  playButton.addEventListener('click', () => {
    stateUpdate({ activeView: 'play', selectedLetters: [] });
  });

  setTimeout( () => {
    nameInput.value = gameState.name;
    nameInput.focus();
  }, 0);

  gameContent.appendChild(header);
  gameContent.appendChild(nameInputLabel);
  gameContent.appendChild(nameInput);
  gameContent.appendChild(playButton);

};

function playView() {
  const header = document.createElement('h1');
  header.textContent = 'Hi ' + gameState.name + '!';

  const buttonsContainer = document.createElement('div');
  for (let i =0; i < allLetters.length; i++) {
    const letterButton = document.createElement('button');
    const letter = allLetters[i];
    letterButton.textContent = letter;
    letterButton.disabled = gameState.selectedLetters.includes(letter);

    letterButton.addEventListener('click', () => {
      console.log(allLetters[i]);
      stateUpdate({selectedLetters: gameState.selectedLetters.concat([letter])});
    });

    buttonsContainer.appendChild(letterButton);
  };

  const endGameButton = document.createElement('button');
  endGameButton.textContent = 'End game!';
  endGameButton.addEventListener('click', () => {
    stateUpdate({ activeView: 'endGame' });
  });

  gameContent.appendChild(header);
  gameContent.appendChild(buttonsContainer);
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







