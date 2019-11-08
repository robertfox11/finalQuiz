'use strict'
const container = document.getElementById('quiz');

const preguntas = [{
    question: '1. ¿Cuál es el lugar correcto en un documento HTML para hacer referencia a una hoja de estilo externa?En HTML, para incluir código de script que se encuentra en un fichero externo se emplea',
    repuestas: {
        a: '<script src="fichero.js>"',
        b: '<script file="fichero.js">',
        c: '<script code="fichero.js">'

    },
    respuestaCorrecta: 'a'
}]

var caja_preguntas = document.querySelector(".QuestionTex");
var index;
for (index in preguntas) {
    var p = document.getElementsByClassName("questionText");
    p.append(preguntas[index].question);
    caja_preguntas.append(p);

}