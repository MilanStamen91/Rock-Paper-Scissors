// javascript

let userScore = 0;
let computerScore = 0;

const userScore_div = document.querySelector('.user_score');
const computerScore_div = document.querySelector('.comp_score');
const result_div = document.querySelector('.result p');
const rock = document.getElementById('r');
const scissor = document.getElementById('s');
const paper = document.getElementById('p');

// Logika racunara

function computerChoice() {
    let choices = ['r', 's', 'p'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


rock.addEventListener('click', function() {
    game('r');
});

scissor.addEventListener('click', function() {
    game('s');
});

paper.addEventListener('click', function() {
    game('p');
});

// Logika igrice

function game(userChoice) {
    let computer = computerChoice();

    // console.log(`User choice => ${userChoice}`);
    // console.log(`Computer choice => ${computer}`);
    switch(userChoice + computer) {
    case 'sp':
    case 'pr':
    case 'rs':
    win(userChoice, computer);
    break;
    case 'ps':
    case 'rp':
    case 'sr':
    lose(userChoice, computer);
    break;
    case 'ss':
    case 'pp':
    case 'rr':
    draw(userChoice, computer);  
    break;
    }
}

// Pobeda, Izjednaceno i Izgubljena

function win(userChoice, computer) {
    userScore++;
    userScore_div.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computer)}(comp). You win!`;
    const selection = document.getElementById(userChoice);
    // console.log(selection.classList); provera koja klasa ima kad kliknemo na let select;
    selection.classList.add('green-glow');
    setTimeout(() => {
        selection.classList.remove('green-glow');
    },500);
}

function lose(userChoice, computer) {
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computer)}(comp) beats ${convertToWord(userChoice)}(user) . You lose!`;
    const selection = document.getElementById(userChoice);
    // console.log(selection.classList); provera koja klasa ima kad kliknemo na let select;
    selection.classList.add('red-glow');
    setTimeout(() => {
        selection.classList.remove('red-glow');
    },500);
}

function draw(userChoice, computer) {
    result_div.innerHTML = `${convertToWord(userChoice)}(user) ties ${convertToWord(computer)}(comp). Draw!`;
    const selection = document.getElementById(userChoice);
    // console.log(selection.classList); provera koja klasa ima kad kliknemo na let select;
    selection.classList.add('gray-glow');
    setTimeout(() => {
        selection.classList.remove('gray-glow');
    },500);
}

// Prevedi r s p u Rock Scissors Paper

function convertToWord(choice) {
    if(choice == 'r') return 'Rock';
    if(choice == 's') return 'Scissors';
    return 'Paper';
}









