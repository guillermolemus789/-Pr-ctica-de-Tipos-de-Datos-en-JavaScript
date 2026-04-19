console.log("--- Valores Solicitados ---");
    
    console.log(typeof 42);             // Imprime: 'number'
    console.log(typeof 'Veinticinco');  // Imprime: 'string'
    console.log(typeof -666);           // Imprime: 'number'
    console.log(typeof true);           // Imprime: 'boolean'
    console.log(typeof 0);              // Imprime: 'number'
    console.log(typeof '');             // Imprime: 'string'
    
    // Peculiaridades de JS:
    console.log(typeof null);           // Imprime: 'object' (Es un error histórico en JS)
    console.log(typeof undefined);      // Imprime: 'undefined'
    
    // JS distingue entre mayúsculas y minúsculas. 
    // 'false' es booleano, pero 'FALSE' es evaluado como una variable no declarada.
    console.log(typeof FALSE);          // Imprime: 'undefined'

    console.log("\n--- Mis Propios Ejemplos ---");
    
    // Experimentando con arreglos y objetos
    console.log(typeof [1, 2, 3]);      // Imprime: 'object' (Los arreglos son objetos)
    console.log(typeof {nombre: "A"});  // Imprime: 'object'
    
    // Experimentando con funciones y valores especiales
    console.log(typeof function(){});   // Imprime: 'function'
    console.log(typeof NaN);            // Imprime: 'number' (Not-a-Number sigue siendo número)
    console.log(typeof Symbol('id'));   // Imprime: 'symbol