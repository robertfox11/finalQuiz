'use strict'
var _starButton = document.querySelector('#start');

if (_starButton) {
    _starButton.addEventListener('mouseover', function() {
        this.style.background = "red";
    });
}
if (_starButton) {
    _starButton.addEventListener('mouseout', function() {
        this.style.background = "rgb(221, 202, 32)";
    });
}
//form register
var _formSave = document.querySelector('#formSave');

//cogemos el eventos submit
if (_formSave) {
    _formSave.addEventListener('submit', function() {
        //seleccionamo el id de añadir nick name 
        var _addNickName = document.querySelector('#addNickName').value;
        // if (_addNickName.lenght >= 0) {
        localStorage.setItem(_addNickName, _addNickName);
        // }
    });
}


//vamos a recorrer los datos que se guarda en el formulario  en localStorage
var ul = document.querySelector('#Nick_List');
for (var i in localStorage) {
    console.log(localStorage);
    if (typeof localStorage[i] == "string") {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}
//