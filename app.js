// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//añadido para limpiar el box al reiniciar pagina para nuevo juego
document.addEventListener('DOMContentLoaded', function () {
    // Limpiar el campo de entrada al cargar la página
    document.getElementById('amigo').value = '';
});



let amigos = [];

//funcion para verficar si el nombre es valido, solo letras y no numeros
function validarNombre(nombre) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre); 
    
}

function agregarAmigo() {
    // Capturar el valor del campo de entrada, del box con su id amigo en el html
    let amigo = document.getElementById('amigo').value;
    // Validar la entrada, trim borra los espacios en blanco
    if (amigo.trim() === '') {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    // Validar que solo se ingresen letras
    if (!validarNombre(amigo)) {
        alert("Por favor, ingrese solo letras.");
        //return; // Detener la ejecución si el nombre no es válido
        reiniciar();
        return;
    }

    // Añade el valor al array de amigos
    amigos.push(amigo);
    // Limpia el box
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    // Actualizar la visualización de los amigos, sale en pantalla
    document.getElementById('listaAmigos').innerHTML = amigos.join(', ');
    actualizarListaAmigos(); // Actualizar la lista de amigos, llama a la funcion

}


function actualizarListaAmigos() {
    //Obtenemos el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');
    //Limpiamos la lista existente
    listaAmigos.innerHTML = '';

    //iteramos sobre el arreglo y agrega elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        //crea un nuevo elemento <li>
        let li = document.createElement('li');
        li.textContent = amigo; // Asigna el nombre del amigo al <li>

        //Agregamos el <li> a la lista
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    //validamos la cantidad de amigos
    if (amigos.length === 0){
        alert('Por favor, agregue al menos un amigo.');
        return;
    }

    //generar indice aleatorio
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[amigoAleatorio];

    document.getElementById('resultado').innerHTML = `
    <p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>
`;
    reiniciar();
}


//funcion para reiniciar el juego limpiando el box
function reiniciar(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = ''; // Limpiar la lista en el DOM
    document.getElementById('amigo').value = '';
  
}