'use strict';


let login = document.getElementById('logar').onclick = () => {

    let email = document.getElementById('inputEmail').value + '';

    if (email === 'fff')
        window.location.href = '/app/pages/perfil/perfil.html';
    else
        console.log(email);

};

/*
function isNameValid() {
   let name = document.getElementById('inputName').value;

    if (!name.match('[A-Z][a-z].* [A-Z][a-z].*'))
        window.alert('Nome Inválido');
}
*/