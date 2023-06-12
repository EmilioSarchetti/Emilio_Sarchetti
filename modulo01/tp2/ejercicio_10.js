var mes = parseInt(prompt("Ingrese el numero del mes que quiere saber que dias tiene","..."))
var fecha = new Date();
fecha.setMonth(mes - 1);

var numero_mes = fecha.getMonth() +1;
var cant_dias = new Date(fecha.getFullYear(),numero_mes, 0).getDate();

var resultado = `El mes ${mes} tiene ${cant_dias} dias`;
console.log(resultado)