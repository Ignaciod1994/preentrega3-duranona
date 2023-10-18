alert("Bienvenido a la casa rapi prestamo");

function informacionObligatoria (nombre, apellido, edad, documento, email , cantidad, cuotas, cuotaMensual) { 
  
  this.nombre= nombre; 
  this.apellido= apellido; 
  this.edad= edad; 
  this.documento= documento;
  this.email = email;
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

 const formulario = document.getElementById ('formulario');
 formulario.addEventListener('submit', enviarForm);


  function enviarForm (e) {
   e.preventDefault()
  const nombre = document.getElementById('inputnombre').value;
  const apellido = document.getElementById('inputapellido').value;
  const edad =  parseInt (document.getElementById('inputedad').value);
  const documento = parseInt (document.getElementById('inputdni').value);
  const email = document.getElementById('inputemail').value;
  const cantidad = parseInt (document.getElementById('inputcantidad').value);
  const cuotas = parseInt (document.getElementById('inputcuotas').value);
  const tasaDeInteres = 75;
    

  const prestamoUsuario = {
     
    nombre : nombre,
    apellido : apellido, 
    edad : edad,
    documento : documento, 
    email : email, 

  }

  localStorage.setItem ("usuario", JSON.stringify(prestamoUsuario))
  

  const resultadoDiv = document.getElementById ('resultado');

  if (cantidad > 10000) {
    const cuotaPrestamo = calcularCuota(cantidad, tasaDeInteres, cuotas);
    resultadoDiv.innerHTML= `Usted debe pagar ${cuotas} cuotas de ${cuotaPrestamo.toFixed(2)}`;

    const prestamo = new informacionObligatoria (nombre, apellido, edad, documento, email, cantidad, cuotas, cuotaPrestamo)
    prestamos.push (prestamo);


  } else {
    resultadoDiv.innerHTML ="El monto solicitado es menor al mínimo, por favor ingrese un importe mayor a 10000";
  }
  }

  // Mostrar los datos de todos los préstamos al final del programa
  alert("Datos de los préstamos realizados:");

 for (const prestamo of prestamos){
    alert(`Nombre: ${prestamo.nombre}, Apellido: ${prestamo.apellido}, Edad: ${prestamo.edad}, Documento: ${prestamo.documento}, Email: ${prestamo.email} Cantidad: ${prestamo.cantidad}, Cuotas: ${prestamo.cuotas}, Cuota Mensual: ${prestamo.cuotaMensual.toFixed(2)}`);
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

  //Funcion para guardar los datos de los usuarios que ya utilizaron el simulador
