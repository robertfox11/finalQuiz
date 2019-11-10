//Variables que vamos a utilizar
var currentQuestion = 0;
var score = 0;
var totQuestion = questions.length;
//declaracion de var de id del formulario y de preguntas
var quizContainer = document.getElementById('quizContainer');
var question = document.getElementById('question');

//variables de opciones
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');


//boton next
var _nextBtn = document.getElementById('nextBtn');
var resultCont = document.getElementById('result');
// Cargando las preguntas de Json
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    question.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
//Funciona de pasar a la siguiente pregunta
function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    //checked si elegi la opciones de la respuestas
    if (!selectedOption) {
        alert('Please select your answer');
    }
    //SI seleccionando el valor de la respuestas y sumando puntos
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        console.log(selectedOption)
        score += 10;
        localStorage.setItem(score, score);
    }
    // Si la seleccion checked es falso avanzando al siguiente pregunta sin sumar puntos
    selectedOption.checked = false;
    currentQuestion++;
    // Si llegamos a la ultima pregunta igualando con el contador finalizamos  preguntas
    if (currentQuestion == totQuestion - 1) {
        _nextBtn.textContent = 'Finish';
    }
    if (currentQuestion == totQuestion) {
        quizContainer.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your Score:' + localStorage.getItem(score);
        return;
    }
    loadQuestion(currentQuestion);

};
loadQuestion(currentQuestion);