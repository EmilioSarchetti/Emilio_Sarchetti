function numero_aleatorios(){
    const numeros_generador=[]
    for (let i=1; numeros_generador.length<100;i++){
        let num = Math.floor(Math.random()*100);
        if(!numeros_generador.includes(num)){
            numeros_generador.push(num)
        }
    }  
    numeros_generador.forEach(function(numero){
        document.write(`El numero es ${numero}<br>`);
    })
    }
numero_aleatorios();
