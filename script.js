let secret = Math.floor(Math.random() * 30) + 1;
let count = 0;
const maxAttempts = 10;

const messageEl = document.getElementById('message');
const countEl = document.getElementById('count');
const inputEl = document.getElementById('guessInput');

function makeGuess() {
  const guess = parseInt(inputEl.value);

  // Input validation
  if (isNaN(guess) || guess < 1 || guess > 30) {
    messageEl.innerHTML = `<span style="color: #ff6666;">Please enter a number between 1 and 30 😊</span>`;
    return;
  }

  count++;
  countEl.textContent = count;    

  if (guess === secret) {
    messageEl.innerHTML = `Correct! 🎉<br>You won in <strong>${count}</strong> attempt${count > 1 ? 's' : ''}!`;
    messageEl.style.color = '#00ff88';
    disableInput();
  } 
  else if (guess > secret) {
    messageEl.innerHTML = `TOO HIGH 📈`;
    messageEl.style.color = '#ffcc00';
  } 
  else {
    messageEl.innerHTML = `TOO LOW 📉`;
    messageEl.style.color = '#ffcc00';
  }

  // Game over condition
  if (count >= maxAttempts && guess !== secret) {
    messageEl.innerHTML = `Game Over 😂😂😂<br>The number was <strong>${secret}</strong>`;
    messageEl.style.color = '#ff6666';
    disableInput();
  }

  // Clear input and focus
  inputEl.value = '';
  inputEl.focus();
}

function disableInput() {
  inputEl.disabled = true;
}

function resetGame() {
  secret = Math.floor(Math.random() * 30) + 1;
  count = 0;
  countEl.textContent = '0';
  messageEl.textContent = '';
  messageEl.style.color = 'white';
  inputEl.disabled = false;
  inputEl.value = '';
  inputEl.focus();
}

// Allow pressing Enter key to guess
inputEl.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    makeGuess();
  }
});
