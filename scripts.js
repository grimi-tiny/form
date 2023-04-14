//имя
inp = document.querySelector("#first-name");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}
//фамилия
inp = document.querySelector("#last-name");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}
//почта
inp = document.querySelector("#email");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}
// пароль 
inp = document.querySelector("#password");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}
//проверка пароля
inp = document.querySelector("#password-confirm");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}
//дата рождения
inp = document.querySelector("#birth-day");
btn = document.querySelector("#form-button");
btn.setAttribute("disabled", true)
inp.oninput = function(){
    if(inp.value === ""){
        btn.setAttribute("disabled", true)
    }else{
        btn.removeAttribute("disabled");
    }
}

//проверка равенства пароля


password = document.querySelector("#password").value;
passwordConfirm = document.querySelector("#password-confirm").value;
//check = document.querySelector("#birth-day").setAttribute("disabled", true);
btn.setAttribute("disabled", true)
function checkPassword(password, passwordConfirm){
        if(password !== passwordConfirm){
                alert("Пароль не совпадает")
        }else{
                btn.setAttribute("disabled", true)
        }
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('#email');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(input.value)) {
		input.style.borderColor = 'green';
	} else {
		input.style.borderColor = 'red';
	}
}

input.addEventListener('input', onInput);
