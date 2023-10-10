alert("Bienvenido a la casa rapi prestamo");

function informacionObligatoria (nombre, apellido, edad, documento, cantidad, cuotas, cuotaMensual) { 
  
  this.nombre= nombre; 
  this.apellido= apellido; 
  this.edad= edad; 
  this.documento= documento;
  this.cantidad = cantidad;  
  this.cuotas = cuotas;
  this.cuotaMensual = cuotaMensual;
  }

  
  const prestamos = []


function dividir(dato1, dato2) {
  let resultado = dato1 / dato2;
  return resultado;
}

function calcularCuota(cantidad, tasa, cuotas) {
  let tasaMensual = tasa / 100 / 12;
  let cuota = cantidad * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / ((Math.pow(1 + tasaMensual, cuotas)) - 1);
  return cuota;
}

let ejecutarPrograma = true;

while (ejecutarPrograma) {
  
  const nombre = prompt ('por favor ingrese su nombre')
  const apellido = prompt ('por favor ingrese su apellido')
  const edad = parseInt (prompt('ingrese su edad'))
  const documento = parseInt (prompt('ingrese su numero de documento'))
   

  let cantidad = parseInt(prompt("Ingresar cantidad a prestar, mayor a 10000"));
  let cuotas = parseInt(prompt("¿En cuantas cuotas quiere pagar? Por favor elija de 1 a 60"));
  let tasaDeInteres = 75;

  if (cantidad > 10000) {
    let cuotaPrestamo = calcularCuota(cantidad, tasaDeInteres, cuotas);
    alert("Usted debe pagar " + cuotas + " cuotas de " + cuotaPrestamo.toFixed(2));

    const prestamo = new informacionObligatoria (nombre, apellido, edad, documento, cantidad, cuotas, cuotaPrestamo)
    prestamos.push (prestamo);


  } else {
    alert("El monto solicitado es menor al mínimo, por favor ingrese un importe mayor a 10000");
  }




  // Preguntar al usuario si quiere ejecutar nuevamente
  ejecutarPrograma = confirm("¿Desea ejecutar el programa nuevamente?");
}

  // Mostrar los datos de todos los préstamos al final del programa
  alert("Datos de los préstamos realizados:");

 for (const prestamo of prestamos){
    alert(`Nombre: ${prestamo.nombre}, Apellido: ${prestamo.apellido}, Cantidad: ${prestamo.cantidad}, Cuotas: ${prestamo.cuotas}, Cuota Mensual: ${prestamo.cuotaMensual.toFixed(2)}`);
 }
       
 const buscarPrestamoPorNombre = () => {
  const nombreBuscado = prompt("Ingrese el nombre completo para buscar el préstamo:");
  const prestamoEncontrado = prestamos.find(prestamo => {
      return prestamo.nombre + ' ' + prestamo.apellido === nombreBuscado;
  });

  if (prestamoEncontrado) {
      alert(`Préstamo encontrado: Cantidad: ${prestamoEncontrado.cantidad}, Cuotas: ${prestamoEncontrado.cuotas}, Cuota Mensual: ${prestamoEncontrado.cuotaMensual.toFixed(2)}`);
  } else {
      alert("No se encontró ningún préstamo para el nombre proporcionado.");
  }
}

buscarPrestamoPorNombre ();