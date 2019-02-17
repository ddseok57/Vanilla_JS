const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

console.log(input);
console.log(greeting);


const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
console.log(USER_LS);

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // she is not.
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init(); 