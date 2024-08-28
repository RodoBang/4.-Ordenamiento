// Creamos un arreglo de números desordenados
let numeros = [5, 3, 8, 1, 2, 7, 4, 6]; 

// Imprimimos el arreglo original
console.log(numeros);

// Creamos una función para ordenar el arreglo
numeros.sort(function(a,b){
    return a-b;
});

// Imprimimos el arreglo ordenado
console.log("Arreglo ordenado: "+numeros);

// La salida en consola es: Arreglo ordenado: 1,2,3,4,5,6,7,8