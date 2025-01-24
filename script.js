const quizData = [
    {
        question: "What does AWS stand for?",
        options: ["Amazon Web Services", "Advanced Web Solutions", "Amazon Web Solutions", "Advanced Web Services"],
        answer: 0
    },
    {
        question: "Which of the following is a cloud computing model?",
        options: ["IaaS", "PaaS", "SaaS", "All of the above"],
        answer: 3
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function showQuestion(index) {
    const question = quizData[index];
    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${question.options.map((option, i) => `<label><input type="radio" name="question${index}" value="${i}"> ${option}</label>`).join('')}
        </div>
    `;
}

function showResults() {
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(currentQuestion);
    } else {
        showResults();
        submitButton.style.display = 'none';
    }
});

// Initialize the quiz
showQuestion(currentQuestion);
