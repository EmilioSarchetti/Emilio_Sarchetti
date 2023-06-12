function mensaje(texto){
    const invertido = Array.from(texto).reverse().join("");
    return invertido;
}
let texto = prompt("Ingresa texto","...");
var invertido = mensaje(texto);
console.log(invertido);
   