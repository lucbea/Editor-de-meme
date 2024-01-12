// document.addEventListener("DOMContentLoaded", function() {
//     var textInfElement = document.getElementById("textInf");

//     if (textInfElement) {
//         var inputElement = textInfElement.querySelector('input[name="inferior"]');
//         console.log("estoy");
//         inputElement.addEventListener("input", function() {
//             // Actualiza el contenido del elemento con el valor del campo de texto
//             textInfElement.querySelector('label').textContent = 'INFERIOR';
//             textInfElement.querySelector('input[name="inferior"]').value = inputElement.value;
//         });
//     }
// });



// let $franja1 = document.getElementById('franja1')
let $botonImagen = document.getElementById('botonImagen')
let $botonTexto = document.getElementById('botonTexto')
let $cierrePanel = document.getElementById('cierrePanel');
let $panelDerechoImagen = document.getElementById('panelDerechoImagen');
let $panelDerechoTexto = document.getElementById('panelDerechoTexto');
let $textoArriba = document.getElementById('textoArriba');
let $textoAbajo = document.getElementById('textoAbajo');
let $ingresoTextoSuperior = document.getElementById('ingresoTextoSuperior');
let $ingresoTextoInferior = document.getElementById('ingresoTextoInferior');
let $ingresoURL = document.getElementById('ingresoURL');
let $franja2 = document.getElementById('franja2');





// Funciones
completarTexto = (lugar, texto) => {
    if (lugar === $ingresoTextoSuperior) { $textoArriba.innerHTML = `<h2 id="textoArriba">${texto}</h2>`; console.log('arriba') }
    else {
        $textoAbajo.innerHTML = `<h2 id="textoAbajo">${texto}</h2>`; console.log('abajo');
    }
}


// Función para obtener el tamaño de la pantalla
function preguntaTamanioVentana() {
    return window.innerWidth;  // Devuelve el ancho pantalla 
}

// Maneja el evento de redimensionamiento para actualizar el tamaño de la pantalla y mostrar o no panel
window.addEventListener('resize', function() {
    let tamanioPantalla = preguntaTamanioVentana();
    if (tamanioPantalla > 1299) { 
        $panelDerechoImagen.style.display = "block"; 
        $cierrePanel.style.display = "none";}
    console.log('Nuevo tamaño de la pantalla:', tamanioPantalla);
})


// Asigna el evento click al botón de imagen con o sin boton X
$botonImagen.addEventListener('click', (event) => {
    $panelDerechoImagen.style.display = "block";
    $panelDerechoTexto.style.display = "none";
    // Llama a la función para obtener el tamaño de la pantalla y muestra o no el botón X
    let tamanioVentana = preguntaTamanioVentana();
    console.log('Tamaño de la pantalla al hacer clic en el botón de imagen:', tamanioVentana);
    if (tamanioVentana > 1299) { $cierrePanel.style.display = "none"; }
    else { $cierrePanel.style.display = "block"; }
});

// Asigna el evento click al botón de texto con o sin boton X
$botonTexto.addEventListener('click', (event) => {
    $panelDerechoTexto.style.display = "block";
    $panelDerechoImagen.style.display = "none";
    // Llama a la función para obtener el tamaño de la pantalla y muestra o no el botón X
    let tamanioVentana = preguntaTamanioVentana();
    console.log('Tamaño de la pantalla al hacer clic en el botón de texto:', tamanioVentana);
    // Para ver si el boton cierre esta display o none
    // let cierre = document.getElementById('cierre');
    let estiloCierre = window.getComputedStyle($cierrePanel);

    if (tamanioVentana > 1299 && estiloCierre !== 'none') { $cierrePanel.style.display = 'none'; console.log('estoy en cierre de boton del panel de texto')}
    // else { $cierrePanel.style.display = "block"; }
});











// Boton Texto
$botonTexto.addEventListener('click', (event) => {
    $panelDerechoTexto.style.display = "block";
    $cierrePanel.style.display = "block";
    $panelDerechoImagen.style.display = "none";
})

// Botón cierre de panel derecho
$cierrePanel.addEventListener('click', (event) => {
    console.log('apretaste cierre');
    $panelDerechoTexto.style.display = "none";
    $panelDerechoImagen.style.display = "none";
    $cierrePanel.style.display = "none";
})

console.log('pase2', $textoArriba);
// Ingresar texto superior
$ingresoTextoSuperior.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  // Averiguar para qué se usa
        let textoIngresado = $ingresoTextoSuperior.value;
        completarTexto($ingresoTextoSuperior, textoIngresado);
        $ingresoTextoSuperior.value = "";
    }
});
// Ingresar texto inferior
$ingresoTextoInferior.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();          // Averiguar para qué se usa
        let textoIngresado = $ingresoTextoInferior.value;
        completarTexto($ingresoTextoInferior, textoIngresado);
        // $ingresoTextoInferior.value="";
    }
});


$ingresoURL.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        console.log($ingresoURL.value); 
        $franja2.innerHTML = `<img src='${$ingresoURL.value}' alt="imagen ingresada por URL">`
        // Averiguar para qué se usa
        // let textoIngresado = $ingresoTextoInferior.value;
        // completarTexto($ingresoTextoInferior, textoIngresado);
        // $ingresoTextoInferior.value="";
    }
} )
// <div id="franja2" class="franja franja-2"></div> 




// $pageInput.addEventListener('keydown', (event) => {
//     // Obtiene el número ingresado
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         const irAPage = parseFloat($pageInput.value);
//         const irAPageTrunc = Math.trunc(irAPage);
//         //Verifica si es un número de página válido
//         if (irAPage>0 && irAPage<43 && irAPage === irAPageTrunc) {
//             numeroPagina = irAPage;
//             usarFetch(numeroPagina);
//             $resultSpan.textContent = '';
//             $pageInput.value = "";
//         } else { if (irAPage) {
//                                 $pageInput.value = "";
//                               };
//                 $pageInput.value = "";
//         };
//     }
// });
