let accounts = [
    {nombre: 'Miguel', saldo: 200, password: 'User123'},
    {nombre: 'Felipe', saldo: 200, password: 'User456'},
    {nombre: 'Ximena', saldo: 200, password: 'User789'}
];
// console.log(cuentas[].nombre);
//Encapsula la información de los input
const btnAccess = document.getElementById("btn-access");
const userId = document.getElementById("user-id");
const userPassword = document.getElementById("user-password");
let textInfo = document.getElementById("text-info");

//Validación de credenciales al dar clic en el botón
btnAccess.addEventListener("click", function(event) {
    event.preventDefault();
    const credential = {
        userId: userId.value,
        userPassword: userPassword.value
    }
    console.log(credential);
    for (let i = 0; i < accounts.length; i++) {
        console.log(accounts[i].nombre);
        if (credential.userId == accounts[i].nombre) {
            if (credential.userPassword == accounts[i].password) {
                console.log("Todo correcto");
                break;   
            } else {
                textInfo.textContent = "Usuario y/o contraseña inválidos";
                textInfo.style.color = "#ff1979";
            }
        } 
    }
});