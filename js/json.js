'use strict'
var questions = [{
        "question": '¿Cuál es el lugar correcto en un documento HTML para incluir código de script que se encuentra en un fichero externo se emplea',
        "option1": '<script src="fichero.js">',
        "option2": '<script file="fichero.js">',
        "option3": '<script code="fichero.js">',
        "option4": '<script href="fichero.js">',
        "answer": "1"
    }, {
        "question": '¿Cuál es el código XHTML correcto para hacer referencia a una hoja de estilo externa?',
        "option1": '<link rel="stylesheet" type="text/css" href="style.css" />',
        "option2": '<link rel="stylesheet" type="text/css" href="style.css">',
        "option3": '<link rel=stylesheet type=text/css href=style.css />',
        "option4": '<link rel=stylesheet type=text/css href=style.css>',
        "answer": "1"
    },
    {
        "question": 'En HTML, para definir las partes activas o sensibles de un mapa de imagen se emplea',
        "option1": '<part>',
        "option2": '<area>',
        "option3": '<field>',
        "option4": ' Las anteriores respuestas no son correctas',
        "answer": "2"
    }
    //, {
    //     "question": '4. En HTML, para definir una línea horizontal de separación se emplea',
    //     "option1": '<pre>',
    //     "option2": '<xmp>',
    //     "option3": '<hr>',
    //     "option4": '<dd>',
    //     "answer": "3"
    // },
    // {
    //     "question": '5. La etiqueta <blockquote> se emplea para definir',
    //     "option1": 'Un párrafo',
    //     "option2": 'Un formulario de búsqueda',
    //     "option3": 'Un bloque de código',
    //     "option4": 'Una cita',
    //     "answer": "4"
    // },
    // {
    //     "question": '6. ¿Qué elementos de HTML tienen poca utilidad a no ser que se usen con CSS?',
    //     "option1": '<div> y <span>',
    //     "option2": '<a> y <p>',
    //     "option3": '<b> y <i>',
    //     "option4": '<sub> y <sup>',
    //     "answer": "1"
    // },
    // {
    //     "question": '7. En CSS, ¿qué propiedad se emplea para insertar contenido generado?',
    //     "option1": 'content',
    //     "option2": 'created',
    //     "option3": 'generated',
    //     "option4": 'insert',
    //     "answer": "4"
    // }, {
    //     "question": '8. ¿Cómo se hace en CSS para que el símbolo de los elementos de una lista sea un cuadrado?',
    //     "option1": 'type: square',
    //     "option2": 'list-style-type: square',
    //     "option3": 'list-type: square',
    //     "option4": 'style-list: square',
    //     "answer": "2"
    // }, {
    //     "question": '9. En CSS, para definir el espacio entre el borde de un elemento y los elementos que lo rodean se emplea la propiedad',
    //     "option1": 'border',
    //     "option2": 'margin',
    //     "option3": 'padding',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "2"
    // }, {
    //     "question": '10. En CSS, ¿cómo se posiciona un elemento en la capa superior de visualización?',
    //     "option1": 'position: 1000;',
    //     "option2": 'top: 1000;',
    //     "option3": 'z-index: 1000',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "3"
    // }, {
    //     "question": '11. ¿Qué propiedad de CSS se emplea para definir el espacio entre caracteres en el texto?',
    //     "option1": 'word-spacing',
    //     "option2": 'white-space',
    //     "option3": 'letter-spacing',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "3"
    // }, {
    //     "question": '12. En CSS, para cancelar los efectos de los elementos "flotantes" se emplea la propiedad',
    //     "option1": 'clear',
    //     "option2": 'display',
    //     "option3": 'unfloat',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // }, {
    //     "question": '13. En CSS, ¿qué propiedad se emplea para definir el orden de visualización cuando varios elementos se superponen?',
    //     "option1": 'alpha-index',
    //     "option2": 'tab-index',
    //     "option3": 'vertical-index',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
    // {
    //     "question": '14. En el DOM, para obtener el contenido textual de una parte de la página se emplea la propiedad',
    //     "option1": 'content',
    //     "option2": 'textContent',
    //     "option3": 'value',
    //     "option4": 'text',
    //     "answer": "1"
    // },
    // {
    //     "question": '15. En JavaScript, para acceder a una cookie se emplea',
    //     "option1": 'document.arrayCookie',
    //     "option2": 'document.cookie',
    //     "option3": 'document.getCookie()',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
    // {
    //     "question": '16. Respecto a los navegadores web, el BOM es el',
    //     "option1": 'Byte Object Model',
    //     "option2": 'Browser Object Model',
    //     "option3": 'Binary Object Model',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
    // {
    //     "question": '17. En el DOM, el tipo de un nodo se obtiene con la propiedad',
    //     "option1": 'elementType',
    //     "option2": 'nodeType',
    //     "option3": 'type',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
    // {
    //     "question": '18. En JavaScript, ¿cómo se escribe un bucle "for" para contar desde 1 hasta 5?',
    //     "option1": 'for(i = 1; i <= 5; i++)',
    //     "option2": 'for(i <= 5; i++)',
    //     "option3": 'for i = 1 to 5',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
    // {
    //     "question": '19. En JavaScript, ¿cómo se puede navegar a la página anterior en el historial de navegación?',
    //     "option1": 'navigator.go(-1)',
    //     "option2": 'document.url.prev()',
    //     "option3": 'url.return()',
    //     "option4": 'history.back()',
    //     "answer": "1"
    // },
    // {
    //     "question": '20. Según el DOM, todo en una página web es',
    //     "option1": 'Un atributo',
    //     "option2": 'Un nodo',
    //     "option3": 'Una tabla',
    //     "option4": 'Las anteriores respuestas no son correctas',
    //     "answer": "1"
    // },
];