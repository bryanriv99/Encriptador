function encriptarTexto() {
    let texto = document.getElementById("valorUsuario").value;

    if (!validarTexto(texto)) {
        mostrarError();
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    let texto = document.getElementById("valorUsuario").value;

    if (!validarTexto(texto)) {
        mostrarError();
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function validarTexto(texto) {
    const regex = /^[a-z ]+$/;
    return regex.test(texto);
}

function mostrarError() {
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.classList.remove("hidden");
    mensajeError.textContent = "Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.";
}

function mostrarResultado(texto) {
    const contenedorTexto = document.querySelector(".con-texto");
    const textoEncriptado = document.getElementById("texto-encriptado");

    textoEncriptado.textContent = texto;

    contenedorTexto.classList.remove("hidden");

    document.querySelector(".contenedor").classList.add("hidden");
}

function copiarTexto() {
    const textoEncriptado = document.getElementById("texto-encriptado").textContent;
    navigator.clipboard.writeText(textoEncriptado)
        .catch(() => {
            alert("Hubo un error al copiar el texto");
        });
}
