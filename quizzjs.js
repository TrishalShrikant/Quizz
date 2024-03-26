const quizData = [
    {
        question: "What is 10 + 10?",
        options: ["20", "22", "18", "24"],
        answer: "20"
    },
    {
        question: "Which is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Red", "Green", "Yellow"],
        answer: "Blue"
    },
    {
        question: "Who is CEO of google ?",
        options: ["Satya Nadela", "Sundar Pichai", "Parag Agarwal","Tim Cook"],
        answer: "Sundar Pichai"
    }
]; // More questions can be added here.

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
    }
}

function checkAnswer() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
}
showQuestion();

