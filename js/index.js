/**Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.

Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados. */
let estudiantes=[
    {nombre: "luis",semestre:5 , nota:14  },
    {nombre:"ana", semestre:2, nota:18},
    {nombre:"felipe", semestre: 7, nota:9}
];

let nombresDeAprobados = (estudiantes)=> {
    let nombres= [];
    for (let i=0; i<estudiantes.length;i++){
        if (estudiantes[i].nota>=10){
            nombres.push(estudiantes[i].nombre);
        }
    }
    return nombres;

}

let salida= document.getElementById("salida");
let aprobados= nombresDeAprobados(estudiantes);
salida.innerHTML=`estudiantes aprobados: ${nombresDeAprobados(estudiantes)}`
