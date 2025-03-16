document.addEventListener('DOMContentLoaded', function() {
    fetch('database.json') // Replace with your JSON file path
        .then(response => response.json())
        .then(questions => {
            const quizContainer = document.getElementById('quiz-container');
            const submitButton = document.getElementById('submit-button');
            const resultsDiv = document.getElementById('results');

            let userAnswers = {}; // Store user answers

            // Function to display questions
            function displayQuestions() {
                questions.forEach((question, questionIndex) => {
                    const questionDiv = document.createElement('div');
                    questionDiv.classList.add('question');
                    questionDiv.innerHTML = `<p>${question.question}</p>`;

                    question.choices.forEach((choice, choiceIndex) => {
                        const choiceInput = document.createElement('input');
                        choiceInput.type = 'radio';
                        choiceInput.name = `question-${questionIndex}`;
                        choiceInput.value = choice;
                        choiceInput.id = `question-${questionIndex}-choice-${choiceIndex}`;

                        const choiceLabel = document.createElement('label');
                        choiceLabel.textContent = choice;
                        choiceLabel.setAttribute('for', `question-${questionIndex}-choice-${choiceIndex}`);
                        choiceLabel.classList.add(`choice-color-${choiceIndex}`);

                        questionDiv.appendChild(choiceInput);
                        questionDiv.appendChild(choiceLabel);
                        questionDiv.appendChild(document.createElement('br'));
                    });

                    quizContainer.appendChild(questionDiv);
                });
            }

            // Function to check answers and display results
            function checkAnswers() {
                questions.forEach((question, questionIndex) => {
                    const selectedChoice = document.querySelector(`input[name="question-${questionIndex}"]:checked`);
                    if (selectedChoice) {
                        userAnswers[questionIndex] = selectedChoice.value;
                    } else {
                        userAnswers[questionIndex] = null; // No answer selected
                    }
                });

                let score = 0;
                let resultsHTML = '<h2>Results:</h2><ul>';

                questions.forEach((question, questionIndex) => {
                    const userAnswer = userAnswers[questionIndex];
                    const isCorrect = userAnswer === question.answer;

                    if (isCorrect) {
                        score++;
                    }

                    resultsHTML += `<li><strong>Question ${questionIndex + 1}:</strong> ${isCorrect ? 'Correct' : 'Incorrect'}`;
                    if (!isCorrect) {
                        resultsHTML += `<p>Correct Answer: ${question.answer}</p><p>Explanation: ${question.explanation}</p>`;
                    }
                    resultsHTML += '</li>';
                });

                resultsHTML += `</ul><p>Your Score: ${score} / ${questions.length}</p>`;
                resultsDiv.innerHTML = resultsHTML;
            }

            displayQuestions();

            submitButton.addEventListener('click', checkAnswers);
        })
        .catch(error => console.error('Error fetching questions:', error));
});