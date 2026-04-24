const libro = {

    titulo: "1984",
    autor: "George Orwell",
    anio: 1949,
    estado: "disponible",
    

    capitulos: [],

    describirLibro: function() {
        console.log(`Libro titulado '${this.titulo}', escrito por '${this.autor}' en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(`Se agregó el capítulo: "${nombreCapitulo}"`);
    },

    eliminarCapitulo: function(nombreCapitulo) {
        let indice = this.capitulos.indexOf(nombreCapitulo);
                if (indice >= 0) {
            this.capitulos.splice(indice, 1); 
            console.log(`Se eliminó el capítulo: "${nombreCapitulo}"`);
        } else {
            console.log(`Error: No se encontró el capítulo "${nombreCapitulo}"`);
        }
    }
};



libro.describirLibro();

console.log("-----------------------");

libro.agregarCapitulo("Capítulo 1: La ignorancia es la fuerza");
libro.agregarCapitulo("Capítulo 2: Libertad es esclavitud");
libro.agregarCapitulo("Capítulo 3: La guerra es paz");


console.log("Lista de capítulos actuales:", libro.capitulos);

console.log("-----------------------");


libro.eliminarCapitulo("Capítulo 2: Libertad es esclavitud");

console.log("Lista final de capítulos:", libro.capitulos);