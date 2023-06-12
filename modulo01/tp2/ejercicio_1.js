var valores =[true, false, 2, "hola", "mundo", 3, "char"];
    var palabra_mas_larga = "";
    for (let palabra of valores){
        if (palabra.length>palabra_mas_larga.length){
            palabra_mas_larga=palabra

        }
    }
    console.log("La palabra mas larga es " + palabra_mas_larga)
valores.sort();
for (var string of valores){
    if (string.length>""){
        console.log(string)
    }
}
var solonum = valores.filter(function(elemento){
    return typeof elemento === "number";
});
console.log(solonum);
var suma= solonum[0] + solonum [1];
var resta= solonum[0] - solonum [1];
var mult= solonum[0] * solonum [1];
var divi= solonum[0] / solonum [1];
console.log(suma);
console.log(resta);
console.log(mult);
console.log(divi);