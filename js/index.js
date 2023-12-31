let accounts = [
    {nombre: 'Miguel', saldo: 200, password: 'User123'},
    {nombre: 'Felipe', saldo: 300, password: 'User456'},
    {nombre: 'Ximena', saldo: 500, password: 'User789'}
];

//Encapsula la información de los input
const btnAccess = document.getElementById("btn-access");

const userId = document.getElementById("user-id");

const userPassword = document.getElementById("user-password");

let textInfo = document.getElementById("text-info");

const title = document.querySelector("title").textContent;

//Valida si se encuentra en la página login
if (title == "Login") {
//BOTÓN LOGIN - Validación de credenciales al dar clic en el botón
btnAccess.addEventListener("click", loginUser);

function loginUser(event) {
        event.preventDefault();
        const credential = {
            userId: userId.value,
            userPassword: userPassword.value
        }

        for (let i = 0; i < accounts.length; i++) {
            if (credential.userId == accounts[i].nombre) {
                if (credential.userPassword == accounts[i].password) {
                    localStorage.setItem('userId', accounts[i].nombre);
                    localStorage.setItem('balance', accounts[i].saldo);
                    location.href='./main.html';
                } else {
                    textInfo.textContent = "Usuario y/o contraseña inválidos";
                    textInfo.style.color = "#ff1979";
                }
            } 
        }
    }
}