let librosLeidos=[];

function agregarLibros(titulo){
    librosLeidos.push(titulo);
    console.log("Se ha agregado el libro: " + titulo + " A la lista de libros leidos");
}

function mostrarLibrosLeidos(){
    if(librosLeidos.length===0){
        console.log("No hay libros leidos");
    }else{
        console.log("Libros Leidos: ");
        for(let i=0; i<librosLeidos.length; i++){
            console.log(librosLeidos[i]);
        }
    
    }
}


    agregarLibros("Cien años de soledad");
    agregarLibros("La Metamorfosis");
    agregarLibros("1984");
    
    mostrarLibrosLeidos();