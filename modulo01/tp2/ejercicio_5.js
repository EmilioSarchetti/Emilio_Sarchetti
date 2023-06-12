let texto = prompt("Ingrese su texto en mayuscula o minuscula o ambas");
function pepepepe(texto){
    if (texto===texto.toLowerCase()) {
        return ("El texto esta en minusculas");
        } else if (texto===texto.toUpperCase()) {
         return ("El texto esta en mayusculas");
         }else {;
        return ("El texto tiene minusculas y mayusculas");
    }
}

console.log(pepepepe(texto));