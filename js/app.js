let userId = localStorage.getItem('userId'); //Importa el nombre del usuario del archivo index.js
let balance = localStorage.getItem('balance'); //Importa el saldo del usuario del archivo index.js
balance = parseInt(balance); //convierte el saldo a numero

//Saludo para el usuario
let welcomeUser = document.querySelector('h1');
    welcomeUser.textContent = "¡Hola de nuevo, " + userId + "!";

//Mostrar saldo según el usuario
const checkBalance = document.getElementById('check-balance');
    checkBalance.textContent = balance;
// console.log(parseInt(balance)+parseInt(balance));

//Función para agregar dinero
const btnDepositMoney = document.getElementById('btn-deposit-money');
const inpDepositMoney = document.getElementById('input-dm');

btnDepositMoney.addEventListener('click', (event) => {
    
    if (inpDepositMoney.value == "") {
        event.preventDefault();
    } else {
        const numDepositMoney = parseInt(inpDepositMoney.value);
        balance = parseInt(balance) + numDepositMoney;
        checkBalance.textContent = balance;
        inpDepositMoney.value = "";
    }
})

//Función para retirar dinero
const btnWithdrawMoney = document.getElementById('btn-withdraw-money');
const inpWithdrawMoney = document.getElementById('input-wm');

btnWithdrawMoney.addEventListener('click', (event) => {
    if (inpWithdrawMoney.value == "") {
        event.preventDefault();
    } else {
        const numDrawMoney = parseInt(inpWithdrawMoney.value);
        balance = parseInt(balance) - numDrawMoney;
        checkBalance.textContent = balance;
        inpWithdrawMoney.value = "";
    }
})