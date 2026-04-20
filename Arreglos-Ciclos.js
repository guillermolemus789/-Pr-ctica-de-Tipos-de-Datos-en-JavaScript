let frutas = ['Platano', 'Uva', 'Pera', 'Manzana', 'Manzana', 'Fresa', 'Uva', 'Kiwi', 'Platano', 'Manzana'];

let conteoFrutasFor = {};

console.log("Clasificación con ciclo For");
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];
    
    if (conteoFrutasFor[frutaActual]) {
        conteoFrutasFor[frutaActual]++;
    } else {
        conteoFrutasFor[frutaActual] = 1;
    }
}


for (let tipoFruta in conteoFrutasFor) {
    console.log(tipoFruta + ": " + conteoFrutasFor[tipoFruta]);
}


console.log("\nClasificación con ciclo While ");
let conteoFrutasWhile = {};
let j = 0;

while (j < frutas.length) {
    let frutaActual = frutas[j];
    
    if (conteoFrutasWhile[frutaActual]) {
        conteoFrutasWhile[frutaActual]++;
    } else {
        conteoFrutasWhile[frutaActual] = 1;
    }
    j++;
}

for (let tipoFruta in conteoFrutasWhile) {
    console.log(tipoFruta + ": " + conteoFrutasWhile[tipoFruta]);
}