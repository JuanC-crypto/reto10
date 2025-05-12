function agregarNumeroControlado(arregloInicial, nuevoNumero) {
  if (arregloInicial.length >= 5) {
    return "El arreglo ya tiene 5 o más elementos. No se pueden agregar más.";
  }

  else if (nuevoNumero < 15) {
    arregloInicial.push(nuevoNumero);
    return "Agregado exitosamente";
  } else {
    return "El número debe ser menor a 15.";
  }
}


let miArreglo = [1, 2, 3];
console.log(agregarNumeroControlado(miArreglo, 10)); 
console.log(miArreglo); 

console.log(agregarNumeroControlado(miArreglo, 20)); 
console.log(miArreglo); 

console.log(agregarNumeroControlado(miArreglo, 5)); 
console.log(miArreglo); 

console.log(agregarNumeroControlado(miArreglo, 6)); 
console.log(miArreglo); 