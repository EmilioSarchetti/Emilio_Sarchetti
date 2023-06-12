const texto = promt("Ingrese el texto");
function Vocales(texto);{   
    const vocales=["a","e","i","o","u","A","E","I","O","U"];
     for(let i=0;i=texto.length;i++){  
        if(vocales.includes(caracter)){ 
         let posicion=i+1;
         return`La primera vocal es "${texto[i]}" y esta en la posicion ${posicion}`;
        }
    }
    return "No se encontraron vocales en el texto";
}
let posicion_vocales=vocales(texto);
document.write(posicion_vocales);