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
    const regex = /^\S+@\S+\.\S+$/;
    /*
    \S+ --> Uno o más caracteres en los que no esté un espacio en blanco
    @ --> El caracter arroba
    \. --> El caracter punto.
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

// Handler invocado desde el Listener Principal
const handlerPrincipal = () => {
    const errores = document.getElementById("errores");
    const intentos = document.getElementById("intentos");
    // Referencia a los objetos Input con el atributo Text
    const elementosFormulario = document.querySelectorAll("form [type=text]");
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
        }
        if (error == undefined) {
            event.target.value = contenido;
            errores.innerHTML = "";
        } else {
            errores.innerHTML = error;
            event.target.focus();
        }
    };
    elementosFormulario.forEach((nodo) => {
        nodo.addEventListener("blur", handlerElementosFormulario);
    });
};
document.addEventListener("DOMContentLoaded", handlerPrincipal); // Listener que controla el evento finalización de carga del DOM
