const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const userSelectionEle = document.getElementById('user-selection');
let userSelectionText = userSelectionEle.textContent;




rockBtn.addEventListener('click', () => {
	userSelectionText = 'rock';
  userSelectionEle.textContent = userSelectionText;
});

paperBtn.addEventListener('click', () => {
	userSelectionText = 'paper';
  userSelectionEle.textContent = userSelectionText;
});

scissorsBtn.addEventListener('click', () => {
	userSelectionText = 'scissors';
  userSelectionEle.textContent = userSelectionText;
});


