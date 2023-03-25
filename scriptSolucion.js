"use strict";
/**
 * Función que valida el Nombre
 * @param {string} nombre Cadena de caracteres a comprobar
 * @returns Objeto con el atributo resultado que indica si es válido o no, y el atributo error que muestra el error cometido
 */
const validarNombre = (nombre) => {
    let result = { resultado: undefined, error: undefined };
    // Expresión regular que comprobará que únicamente puede haber letras y espacios en blanco em medio
    const regex = /^[a-zA-Záéíóú\s]+$/;
    if (!regex.test(nombre.trim())) {
        result.resultado = false;
        result.error = "El nombre posee algún caracter incorrecto";
    } else {
        result.resultado = true;
        result.error = "";
    }
    return result;
};
/**
 * Función que valida los Apellidos
 * @param {string} apellidos Apellidos a validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarApellidos = (apellidos) => {
    let result = { resultado: true, error: undefined };
    const regex = /^[a-zA-Záéíóú]+$/;
    apellidos = apellidos.trim();
    apellidos = apellidos.replace(/\s+/, " ");
    let arrayApellidos = apellidos.split(" ");
    if (arrayApellidos.length < 2) {
        result.resultado = false;
        result.error = "Únicamente ha proporcionado 1 apellido";
    } else {
        for (let i = 0; i < arrayApellidos.length; i++) {
            arrayApellidos[i] = arrayApellidos[i].trim();
        }
        arrayApellidos.forEach((apellido, indice) => {
            if (!regex.test(apellido)) {
                result.resultado = false;
                result.error = `El apellido ${indice + 1}.º no es válido`;
            }
        });
    }
    return result;
};
/**
 * Función que valida la Edad
 * @param {string} edad Edad a validad
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarEdad = (edad) => {
    let result = { resultado: true, error: undefined };
    const regex = /^\d{1,3}$/;
    if (regex.test(edad)) {
        edad = parseInt(edad);
        if (edad >= 0 && edad <= 105) {
            result.resultado = true;
            result.error = undefined;
        } else {
            result.resultado = false;
            result.error = "El valor insertado está fuera del rango";
        }
    } else {
        result.resultado = false;
        result.error = "No se ha insertado un valor numérico mayor que cero";
    }
    return result;
};
/**
 * Función que valida en NIF
 * @param {string} nif NIF para validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarNIF = (nif) => {
    let result = { resultado: true, error: undefined };
    const regex = /^\d{8}-[a-zA-Z]{1}$/; // \d{8} - 8 números, - 1 guion, [a-zA-Z]{1} - 1 letra
    if (regex.test(nif)) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "NIF introducido incorrecto";
    }
    return result;
};
/**
 * Función sencilla que valida un Email
 * @param {string} email Email para validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarEmail = (email) => {
    let result = { resultado: true, error: undefined };
    const regex = /^\S+@\S+\.\S{2,}$/;
    /*
    \S+ --> Uno o más caracteres en los que no esté un espacio en blanco
    @ --> El caracter arroba
    \. --> El caracter punto.
    \S{2,} -->Dos a omás caracteres en los que no esté un espacio en blanco
    */
    if (regex.test(email)) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "Email introducido incorrecto";
    }
    return result;
};
/**
 * Función que valida una Fecha
 * @param {string} fecha Fecha a validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarFecha = (fecha) => {
    let result = { resultado: true, error: undefined };
    const regex = /^(\d{2}\/\d{2}\/\d{4})$|^(\d{2}-\d{2}-\d{4})$/;
    /*
    ^ indica que es desde el comienzo
    $ indica que es hasta el final
    ()|() indica que se puede utilizar la expresión regular que está en ambos paréntesis
    \d{2} indica 2 dígitos obligatorios
    \d{4} indica 4 dígitos obligatorios
    \/ es el caracter / que está escapado
    - indica el caracter guión 
    */
    if (regex.test(fecha)) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "El formato de fecha es incorrecto";
    }
    return result;
};
/**
 * Función que valida un teléfono
 * @param {string} telefono Teléfono a validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarTelefono = (telefono) => {
    let result = { resultado: true, error: undefined };
    const regex = /^\d{9}$/;
    /*
    ^ indica que es desde el comienzo
    $ indica que es hasta el final
    \d{9} indica que son 9 valores numéricos
    */
    if (regex.test(telefono)) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "El formato del teléfono es incorrecto";
    }
    return result;
};
/**
 * Función que valida una hora
 * @param {string} hora Hora a validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarHora = (hora) => {
    let result = { resultado: true, error: undefined };
    const regex = /^\d{2}:\d{2}$/;
    /*
    ^ indica que es desde el comienzo
    $ indica que es hasta el final
    \d{2} indica que son 2 valores numéricos
    : indica que lleva el caracter dos puntos
    */
    if (regex.test(hora)) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "El formato de la hora es incorrecto";
    }
    return result;
};
/**
 * Función que valida la selección de una Provincia
 * @param {integer} indice Índice a validar
 * @returns Objeto con el atributo resultado que indica si son válidos o no, y el atributo error que muestra el error cometido
 */
const validarProvincia = (indice) => {
    let result = { resultado: true, error: undefined };
    if (indice != 0) {
        result.resultado = true;
        result.error = undefined;
    } else {
        result.resultado = false;
        result.error = "No ha sido selecciona la Provincia";
    }
    return result;
};
// Se crea una cookie si no existe
let datosAlmacenados = document.cookie;
if (datosAlmacenados === "") {
    document.cookie = "intentos=0";
}
/**
 * Handler invocado desde el Listener Principal
 */
const handlerPrincipal = () => {
    const errores = document.getElementById("errores");
    const intentos = document.getElementById("intentos");
    // Referencia a los objetos Input con el atributo Text
    const elementosFormulario = document.querySelectorAll("form [type=text]");
    const elementoProvincia = document.getElementById("provincia");
    const botonEnviar = document.getElementById("enviar");
    const handlerElementosFormulario = (event) => {
        let contenido;
        let error;
        switch (event.target) {
            case nombre:
                if (validarNombre(event.target.value).resultado) {
                    let nombre = event.target.value.trim();
                    contenido = nombre.replace(/\s+/, " ").toUpperCase();
                } else {
                    error = "<p>" + validarNombre(event.target.value).error + "</p>";
                }
                break;
            case apellidos:
                if (validarApellidos(event.target.value).resultado) {
                    let apellido = event.target.value.trim();
                    contenido = apellido.replace(/\s+/, " ").toUpperCase();
                } else {
                    error = "<p>" + validarApellidos(event.target.value).error + "</p>";
                }
                break;
            case edad:
                if (validarEdad(event.target.value).resultado) {
                    contenido = event.target.value.trim();
                } else {
                    error = "<p>" + validarEdad(event.target.value).error + "</p>";
                }
                break;
            case nif:
                if (validarNIF(event.target.value).resultado) {
                    contenido = event.target.value.trim().toUpperCase();
                } else {
                    error = "<p>" + validarNIF(event.target.value).error + "</p>";
                }
                break;
            case email:
                if (validarEmail(event.target.value).resultado) {
                    contenido = event.target.value.trim().toLowerCase();
                } else {
                    error = "<p>" + validarEmail(event.target.value).error + "</p>";
                }
                break;
            case fecha:
                if (validarFecha(event.target.value).resultado) {
                    contenido = event.target.value.trim();
                } else {
                    error = "<p>" + validarFecha(event.target.value).error + "</p>";
                }
                break;
            case telefono:
                if (validarTelefono(event.target.value).resultado) {
                    contenido = event.target.value.trim();
                } else {
                    error = "<p>" + validarTelefono(event.target.value).error + "</p>";
                }
                break;
            case hora:
                if (validarHora(event.target.value).resultado) {
                    contenido = event.target.value.trim();
                } else {
                    error = "<p>" + validarHora(event.target.value).error + "</p>";
                }
                break;
        }
        if (error == undefined) {
            event.target.value = contenido;
            errores.innerHTML = "";
        } else {
            errores.innerHTML = error;
            event.target.focus();
        }
    };
    // Creación de los Listeners para cada uno de los elementos del formulario que son de tipo texto
    elementosFormulario.forEach((nodo) => {
        nodo.addEventListener("blur", handlerElementosFormulario);
    });
    /**
     * Handler invocado desde el Listener elementoProvincia
     * @param {event} event Representa al objeto event proveniente del Select de Provincias
     */
    const handlerElementoProvincia = (event) => {
        if (validarProvincia(event.target.selectedIndex).resultado) {
            errores.innerHTML = "";
        } else {
            errores.innerHTML = "<p>" + validarProvincia(event.target.value).error + "</p>";
            event.target.focus();
        }
    };
    // Creación del Listener para controlar el evento Perder el Foco desde el elemento Select de Provincias
    elementoProvincia.addEventListener("blur", handlerElementoProvincia);
    /**
     * Handler invocado por el evento Click realizado por el botón se Submit
     */
    const handlerBotonEnviar = () => {
        event.preventDefault(); // Se paralizan el resto de eventos generados por defecto desde el navegador
        let completo = true; // Variable con la que se chequea que han sido rellenados todos los campos correctamente
        let valor; // Valor que posee actualmente la cookie intentos
        valor = parseInt(document.cookie.split("=")[1]);
        valor++;
        document.cookie = "intentos=" + valor; // Se incrementa el valor de la Cookie
        // Revisamos que todos los elementos del Formulario han sido rellenados con los valores esperados
        elementosFormulario.forEach((elemento) => {
            if (elemento.value == "") {
                completo = false;
            }
        });
        if (elementoProvincia.selectedIndex == 0) {
            completo = false;
        }
        if (completo) {
            intentos.innerHTML = ""; // Se borra el contenido de los intentos de la pantalla
            let enviar = confirm("¿Desea enviar los datos al servidor?"); // Preguntamos si deseamos continuar
            if (enviar) {
                document.formulario.submit(); // Se decimos que sí se realizad el submit del formulario
            } else {
                // Si decimos que No se indica el número de intentos por pantalla
                intentos.innerHTML = `Intento de envíos del formulario: ${valor}`;
            }
        } else {
            // Si el formulario está incompleto, se indica por pantalla el número de intentos
            intentos.innerHTML = `Intento de envíos del formulario: ${valor}`;
        }
    };
    botonEnviar.addEventListener("click", handlerBotonEnviar);
};
// Listener que controla el evento finalización de carga del DOM
document.addEventListener("DOMContentLoaded", handlerPrincipal);
