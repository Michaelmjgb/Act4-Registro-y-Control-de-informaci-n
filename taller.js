//1. Función que determina si un año es bisiesto:
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esBisiesto(1998)); //false
console.log(esBisiesto(2026)); //false
console.log(esBisiesto(2000)); //true

//2. Función que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusAFahrenheit(0));  //32
console.log(celsiusAFahrenheit(25));   //77
console.log(celsiusAFahrenheit(100));  //212

//3. Función que devuelve el mayor de dos números
function mayorDeDos(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(mayorDeDos(5, 7)); //7
console.log(mayorDeDos(-3, 1)); //1
console.log(mayorDeDos(9, 9)); //9

//4. Función que convierte minutos a una cadena que indique cuántas horas y minutos representan
function convertirMinutos(minutos) {
    return `${Math.floor(minutos / 60)}horas ${minutos % 60}minutos`;
}
console.log(convertirMinutos(185)); //3 horas, 5 minutos
console.log(convertirMinutos(48)); //0horas, 48 minutos
console.log(convertirMinutos(1)); //0horas, 1 minuto

//5. Función que determina si un número está dentro de un rango dado (incluyendo los límites)
function estaEnRango(numero, inicio, fin) {
    const minimo = Math.min(inicio, fin);
    const maximo = Math.max(inicio, fin);
    return numero >= minimo && numero <= maximo;
  }
  console.log(estaEnRango(57, 1, 100)); //true
  console.log(estaEnRango(9, 10, 20)); //false
  console.log(estaEnRango(10, 1, 10)); //true

//6. Función que calcula el precio final después de aplicar un porcentaje de descuento
function calcularPrecioFinal(precioInicial, descuento) {
    return precioInicial * (1 - descuento / 100);
}
console.log(calcularPrecioFinal(100, 20)); //=80 con un 20% de descuento 
console.log(calcularPrecioFinal(255.50, 30)); //=178,85 con un 30% de descuento
console.log(calcularPrecioFinal(150, 15)); //=127,5 seria un 15% de descuento

//7. Función que determina si una persona puede votar según su edad
function puedeVotar(edad, edadMinima = 18) {
    return edad >= edadMinima;
}
console.log(puedeVotar(18)); //true
console.log(puedeVotar(15)); //false
console.log(puedeVotar(57)); //true

//8. Función que calcula el área de un triángulo dados su base y altura
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(calcularAreaTriangulo(6, 5)); //15  
console.log(calcularAreaTriangulo(4, 7)); //14  
console.log(calcularAreaTriangulo(7, 4)); //14