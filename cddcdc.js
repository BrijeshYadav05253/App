const questions = [
    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Makeup Language", correct: false },
            { text: "Hey Text Markup Language", correct: false },
            { text: "Hello To My Land", correct: false },
        ]

    },
    {
        question: "What is the full form of RAM?",
        answers: [
            { text: "Random Accept Memory", correct: false },
            { text: "Read Access Memory", correct: false },
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Mouse", correct: false },
        ]

    },
    {
        question: "What is the full form of CSS?",
        answers: [
            { text: " Cascading Super Sheets ", correct: false },
            { text: " Cascading Style Sheep", correct: false },
            { text: "Cartoon Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
        ]

    },
    {
        question: "What is the full form of HTTP?",
        answers: [
            { text: " Hypertext Transfer Product ", correct: false },
            { text: " Hypertext Transfer Protocol ", correct: true },
            { text: " Hey Transfer Protocol", correct: false },
            { text: " Hypertext Test Protocol", correct: false },
        ]

    },
    {
        question: "What is the full form of JS?",
        answers: [
            { text: "JustScript", correct: false },
            { text: "JavaSet", correct: false },
            { text: " JavaScript", correct: true },
            { text: "JavaSuper", correct: false },
        ]

    },
    {
        question: "What is the primary characteristic of open source software?",
        answers: [
            { text: "Proprietary license", correct: false },
            { text: "Closed source code", correct: false },
            { text: " Free and open access to the source code", correct: true },
            { text: "Expensive distribution", correct: false },
        ]

    },
    {
        question: "Which organization is responsible for maintaining the GNU General Public License (GPL)?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Free Software Foundation (FSF)", correct: true },
            { text: "Apple", correct: false },
            { text: "Apache Software Foundation", correct: false },
        ]

    },
    {
        question: "Which of the following is a popular open source operating system?",
        answers: [
            { text: "Windows", correct: false },
            { text: "macOS", correct: false },
            { text: "Linux", correct: true },
            { text: "iOS", correct: false },
        ]

    },
    {
        question: "What does the term 'forking' refer to in the context of open source software?",
        answers: [
            { text: "Copying code to create a new project", correct: true },
            { text: "Merging two projects into one", correct: false },
            { text: "Creating a closed source version of an open source project", correct: false },
            { text: "Collaborative development", correct: false },
        ]

    },
    {
        question: "Which open source version control system is widely used for managing source code changes?",
        answers: [
            { text: "SVN (Subversion)", correct: false },
            { text: "Git", correct: true },
            { text: "Mercurial", correct: false },
            { text: "CVS (Concurrent Versions System)", correct: false },
        ]

    },
    {
        question: "What is the purpose of the Open Source Initiative (OSI)?",
        answers: [
            { text: "To promote closed source software", correct: false },
            { text: "To regulate software patents", correct: false },
            { text: " To define and maintain open source standards", correct: true },
            { text: "To provide funding for open source projects", correct: false },
        ]

    },
    {
        question: "Which programming language is commonly associated with the development of the Linux kernel?",
        answers: [
            { text: "ava", correct: false },
            { text: "C++", correct: false },
            { text: " Python", correct: false },
            { text: "C", correct: true },
        ]

    },
    {
        question: "What does the term 'copyleft' mean in the context of open source licenses?",
        answers: [
            { text: "Allowing proprietary modifications", correct: false },
            { text: "Restricting the use of source code", correct: false },
            { text: " Ensuring that derivative works are also open source", correct: true },
            { text: "Granting exclusive rights to the original author", correct: false },
        ]

    },
    {
        question: "Which of the following is a popular open source web server software?",
        answers: [
            { text: "Microsoft IIS", correct: false },
            { text: "Apache HTTP Server", correct: true },
            { text: " Nginx", correct: false },
            { text: "Tomcat", correct: false },
        ]

    },
    {
        question: "What is the significance of the 'bazaar' and 'cathedral' models in open source development?",
        answers: [
            { text: "Different programming paradigms", correct: false },
            { text: "Project management methodologies", correct: true },
            { text: " Licensing approaches", correct: false },
            { text: "Collaboration styles", correct: false },
        ]

    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    console.log(currentQuestionIndex);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(a) {
    const selectedBtn = a.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.disabled = true;
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    if (score < 10) {
        questionElement.innerHTML = `🥲You scored ${score} out of ${questions.length}! Practice more`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    } else {
        questionElement.innerHTML = `✌️You scored ${score} out of ${questions.length}!🎉`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});


startQuiz();