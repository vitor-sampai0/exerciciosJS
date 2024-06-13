let numerosDuplicados = [1, 2, 2, 3, 4, 4, 5, 5, 5];

let numeros = [];

let duplicadas = [];

for(i = 0; i < numerosDuplicados.length; i++){
    let analise = numerosDuplicados[i]
 if(!numeros.includes(numerosDuplicados[i]))
    numeros.push(numerosDuplicados[i])
else{duplicadas.push(numerosDuplicados[i])
    } 
}



console.log('todos os numeros encontrados: ' + numeros);
console.log('duplicatas encontradas: ' + duplicadas);
