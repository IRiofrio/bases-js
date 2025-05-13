let a =5;
// if (a >= 10) {
//     console.log("a es mayor o igual que 10");
// }else if (a >= 5) {
//     console.log("a es mayor o igual que 5");
// }

//funcion ternaria
let resultado = (a >= 10) ? "a es mayor o igual que 10" : "a es menor que 10";
console.log(resultado);

//switch
let dias = 1;
switch(dias){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");
}
