var formulario = document.getElementById('form-login')
var nombre = document.getElementById('nombre-login')
var correo = document.getElementById('email-login')
var pass = document.getElementById('pass-login')
var fecha = document.getElementById('fecha-login')
var alertaError = document.getElementById('campo-alerta')

var error = ""
var hoy = new Date

var expMay = RegExp('[A-Z]')
var expMin = RegExp('[a-z]')
var expNum = RegExp('[0-9]')

var expCorreo = RegExp('([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){3}')
var contRequist = 0

validarFecha()

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    validarCorreo()
    validarContraseña()
    validarNombre()
    registroCompletado()

    alertaError.innerHTML = error;
})

function validarCorreo(){
    if (correo.value.match(expCorreo)) {
        contRequist+=1 //se suma un requisito cumplido
    }if(!correo.value.match(expCorreo)){
        error += 'Ingrese un correo valido. Ej. correo@email.com <br>'
    }
}

function validarContraseña(){
    if (!pass.value.match(expMay)) {
        error += 'La contraseña debe tener al menos una mayúscula <br>'
    }if (!pass.value.match(expMin)) {
        error += 'La contraseña debe tener al menos una minuscula <br>'
    }if (!pass.value.match(expNum)) {
        error += 'La contraseña debe tener al menos un número <br>'
    }if (pass.value.match(expNum) && pass.value.match(expMay) && pass.value.match(expMin)) {
        contRequist+=1        
    }
}

function validarNombre(){
    if (nombre.value.match(expNum)) {
        error+= 'El nombre solo debe incluir letras <br>'
    }if (!nombre.value.match(expNum)) {
        contRequist+=1
    }if (nombre.value == "") {
        error+= 'Escriba un nombre <br>'
    }
}

function validarFecha() {
    var diaHoy = hoy.getDate()
    var mesHoy = hoy.getMonth()
    var anioHoy = hoy.getFullYear()
    var fechaMaxima = anioHoy + '-' + ('0' + mesHoy).slice(-2) + '-' + ('0' + diaHoy).slice(-2)
    fecha.max = fechaMaxima

    if (fecha == ""){
        error+= 'Ingrese una fecha valida <br>'
    }else{
        contRequist+=1
    }
}

function registroCompletado() {
    if (contRequist == 4) {
        alert('Registro completado exitosamente. \nBienvenido ' + nombre.innerHTML )
    }else{
        alertaError.innerHTML = error;
    }
}