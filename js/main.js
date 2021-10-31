const loginInput = document.querySelector("#login-input");
const loginForm = document.querySelector("#login-form");
const userLogin = document.querySelector("#userLogin");

const CLICKED_CLASS = "hidden";
const USERNAME_KEY = "username";


function login(e){
    e.preventDefault();
    const userID = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY,userID);
    loginForm.classList.toggle(CLICKED_CLASS);
    paintGreetings(userID);
    }

function paintGreetings(username){
    userLogin.innerText = `안녕하세요 ${username}님 `
    userLogin.classList.toggle(CLICKED_CLASS);
}

const saveUserID = localStorage.getItem(USERNAME_KEY);

if(saveUserID===null){
    loginForm.classList.toggle(CLICKED_CLASS);
    loginForm.addEventListener("submit",login);
} else{
    paintGreetings(saveUserID);
}

