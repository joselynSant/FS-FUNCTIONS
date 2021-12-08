//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  var suma = 0;
  for (var i = 0; i < param.length; i++) {
   // suma += parseInt(param[i])
    suma = suma + param[i]
  }
  var promed = suma/param.length;
  return promed;
}
let resultPromed = average(numbers)
console.log(resultPromed);

