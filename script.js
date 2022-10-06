// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');
// Countdown Page
const countdown = document.querySelector('.countdown');
// Game Page
const itemContainer = document.querySelector('.item-container');
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// Equations
let questionAmount = 0;
let equationsArray = [];
let playerGuessArray = [];
let bestScoreArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Time
let timer;
let timePlayed = 0;
let baseTime = 0;
let penaltyTime = 0;
let finalTime = 0;
let finalTimeDisplay = '0.0';

// Scroll
let valueY = 0;

// Refresh Splash Page Best Scores
function bestScoresToDOM() {
    bestScores.forEach((bestScore, index) => {
      const bestScoreEl = bestScore;
      bestScoreEl.textContent = `${bestScoreArray[index].bestScore}s`;
    });
  }

// Check Local Storage for Best Scores, Set bestScoreArray
function getSavedBestScores() {
    if (localStorage.getItem('bestScores')) {
      bestScoreArray = JSON.parse(localStorage.bestScores);
    } else {
      bestScoreArray = [
        { questions: 10, bestScore: finalTimeDisplay },
        { questions: 25, bestScore: finalTimeDisplay },
        { questions: 50, bestScore: finalTimeDisplay },
        { questions: 99, bestScore: finalTimeDisplay },
      ];
      localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
    }
    bestScoresToDOM();
  }

// Update Best Score Array
function updateBestScore() {
    bestScoreArray.forEach((score, index) => {
      // Select correct Best Score to update
      if (questionAmount == score.questions) {
        // Return Best Score as number with one decimal
        const savedBestScore = Number(bestScoreArray[index].bestScore);
        // Update if the new final score is less or replacing zero
        if (savedBestScore === 0 || savedBestScore < finalTime) {
          bestScoreArray[index].bestScore = finalTimeDisplay;
        }
      }
    });
    // Update Splash Page
    bestScoresToDOM();
    // Save to Local Storage
    localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
  }


// Reset Game
function playAgain() {
  gamePage.addEventListener('click', startTimer);
  scorePage.hidden = true;
  splashPage.hidden = false;
  equationsArray = [];
  playerGuessArray = [];
  valueY = 0;
  playAgainBtn.hidden = true;
}

// Show Score Page
function showScorePage() {
  // Show Play Again button after 1 second delay
  setTimeout(() => {
    playAgainBtn.hidden = false;
  }, 1000);
  gamePage.hidden = true;
  scorePage.hidden = false;
}
























