console.log("--- EVALUADOR DE NOTAS ---");


let nota = Math.floor(Math.random() * 101); 


if (nota > 0) {
    

    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75) {
        console.log("Resultado: Bien");
    } else if (nota >= 60) {
        console.log("Resultado: Suficiente");
    } else {
    
        console.log("Resultado: No aprueba");
    }
    
    console.log("La nota del alumno fue: " + nota);

} else {
    console.log("La nota es 0. El alumno no tiene calificación válida.");
}