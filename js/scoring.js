'use strict'
// REmove Nick
var _remove = document.querySelector('#RemoveSave');
if (_remove) {
    _remove.addEventListener('submit', function() {
        //seleccionamo el id de añadir nick name 
        var _removeItem = document.querySelector('#RemoveNickName').value;
        // if (_addNickName.lenght >= 0) {
        localStorage.removeItem(_removeItem, _removeItem);
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