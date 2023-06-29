let accounts = [
    {nombre: 'Miguel', saldo: 200, password: 'User123'},
    {nombre: 'Felipe', saldo: 200, password: 'User234'},
    {nombre: 'Ximena', saldo: 200, password: 'User567'}
];
// console.log(cuentas[0].nombre);
// let userId = 'Miguel';
// let userPassword = 'User123';
//Encapsula la información de los input
const btnAccess = document.getElementById("btn-access");
const userId = document.getElementById("user-id");
const userPassword = document.getElementById("user-password");

btnAccess.addEventListener("click", function(event) {
    event.preventDefault();
    const credential = {
        userId: userId.value,
        userPassword: userPassword.value
    }
    console.log(credential);
    for (let i = 0; i < accounts.length; i++) {
        if (credential == accounts[i]) {
            console.log("Todo correcto");
            break;         
        } else{
            console.log("Usuario y/o contraseña inválidos");
        }
    }
});
// let userId = 'Miguel';
// let userPassword = 'User123';
// // let userId = 'Felip';
// // let userPassword = 'User123';



// //Comparamos si los datos ingresados son correctos
// for (let i = 0; i < accounts.length; i++) {
//     if (userId == accounts[i].nombre) {
//         console.log("Todo correcto");
//         break;         
//     } else{
//         console.log("Usuario y/o contraseña inválidos");
//     }
// }

// while (condition) {
    