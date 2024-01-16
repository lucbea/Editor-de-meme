
// ***********************
// ***********************
// Ambos paneles
// ***********************
// ***********************
let $botonImagen = document.getElementById('botonImagen');
let $botonTexto = document.getElementById('botonTexto');
let $cierrePanel = document.getElementById('cierrePanel');
let $panelImagen = document.getElementById('panelImagen');
let $panelTexto = document.getElementById('panelTexto');

// ..........................................
// Función para obtener el tamaño de la pantalla
// ...........................................
function preguntaTamanioVentana() {
    return window.innerWidth;  // Devuelve el ancho pantalla 
}

// .............................................
// Maneja el evento de redimensionamiento para actualizar el tamaño de la pantalla y mostrar o no botón de cierre del panel
// .............................................
window.addEventListener('resize', function() {
    let tamanioPantalla = preguntaTamanioVentana();
    if (tamanioPantalla > 1299) { 
        $cierrePanel.style.display = "none";
        if($panelImagen.style.display!== 'none'|| $panelTexto.style.display!== 'none'){ 
            // console.log('hay un panel activo, ventana >1299 y NO mostrar boton X');
        }
        else {
            $panelImagen.style.display = 'block';// muestra panel de imagen
        }
    }
    else {
        if($panelImagen.style.display!== 'none'|| $panelTexto.style.display!== 'none'){ 
            // console.log('hay un panel activo, ventana <1299 y se muestra el boton X');
            $cierrePanel.style.display = "flex";}
        else {$panelImagen.style.display = "none"}
    }
})



// .....................................
// Muestra panel de imagen con o sin boton X
// .....................................
$botonImagen.addEventListener('click', (event) => {
    $panelImagen.style.display = "block";
    $panelTexto.style.display = "none";
    // Llama a la función para obtener el tamaño de la pantalla y mostrar o no el botón X
    tamanioVentana = preguntaTamanioVentana();
    // Pregunta si el boton cierre esta display o none en función del tamaño de la ventana
    if (tamanioVentana > 1299) { $cierrePanel.style.display = "none"; }
    else { $cierrePanel.style.display = "flex"; }
});

// ......................................
// Muestra panel de texto con o sin boton X
// ......................................
$botonTexto.addEventListener('click', (event) => {
    $panelTexto.style.display = "block";
    $panelImagen.style.display = "none";
    // Llama a la función para obtener el tamaño de la pantalla y muestra o no el botón X
    tamanioVentana = preguntaTamanioVentana();
    // Pregunta si el boton cierre esta display o none en función del tamaño de la ventana
    if (tamanioVentana > 1299) { $cierrePanel.style.display = "none"}
    else { $cierrePanel.style.display = "flex"; }
});

// ........................................
// Botón cierre de panel - evento
// ........................................
$cierrePanel.addEventListener('click', (event) => cierre())

// ....................................
// Función cierre de paneles
// ....................................
let cierre = () => {
    console.log('apretaste cierre');
    $panelTexto.style.display = "none";
    $panelImagen.style.display = "none";
    $cierrePanel.style.display = "none";
}






// ***********************
// ***********************
// Panel Imagen
// ***********************
// ***********************

// let $franja1 = document.getElementById('franja1')

let $ingresoURL = document.getElementById('ingresoURL'); // id de la URL que se ingresa 
let $franja2 = document.getElementById('franja2');   // franja2 es el id del contenedor de la imagen que se insertará desde java


let $botonReestablecer = document.getElementById('botonReestablecer');// boton para resetear filtros
let $img; // variable para esperar el ingreso de la imagen en html desde java
let $brilloF = document.getElementById('brillo'); // valor del input range
let $opacidadF = document.getElementById('opacidad'); // valor del input range
let $desenfoqueF = document.getElementById('desenfoque'); // valor del input range
let $contrasteF = document.getElementById('contraste'); // valor del input range
let $escalaGrisF = document.getElementById('escalaGris');  // valor del input range
let $sepiaF = document.getElementById('sepia');  // valor del input range
let $hueF = document.getElementById('hue');  // valor del input range
let $saturadoF = document.getElementById('saturado');  // valor del input range
let $negativoF = document.getElementById('negativo');  // valor del input range

let $brillo= 1; // valor inicial de las variables para aplicar estilo a la imagen
let $opacidad = 1;  // valor inicial de las variables para aplicar estilo a la imagen
let $desenfoque= 0;    // valor inicial de las variables para aplicar estilo  a la imagen
let $contraste = 100;    // valor inicial de las variables para aplicar estilo a la imagen
let $escalaGris = 0;    // valor inicial de las variables para aplicar estilo a la imagen
let $sepia = 0;     // valor inicial de las variables para aplicar estilo a la imagen
let $hue = 0;    // valor inicial de las variables para aplicar estilo a la imagen
let $saturado = 100;   // valor inicial de las variables para aplicar estilo a la imagen
let $negativo = 0;    // valor inicial de las variables para aplicar estilo a la imagen

// Funcion para iniciar los botones de los input range al colocar una imagen
let iniciarFiltros = () => {
    console.log('iniciando los botones de losinput range');
    $brilloF.value = 1;     // reinicio del boton del input range
    $opacidadF.value = 1;    // reinicio del boton del input range
    $desenfoqueF.value = 0;      // reinicio del boton del input range
    $contrasteF.value = 100;      // reinicio del boton del input range
    $escalaGrisF.value = 0;     // reinicio del boton del input range
    $sepiaF.value = 0;    // reinicio del boton del input range
    $hueF.value = 0;    // reinicio del boton del input range
    $saturadoF.value = 100;    // reinicio del boton del input range
    $negativoF.value = 0;   // reinicio del boton del input range
}

// ........................................
// Funcion para reestablecer los filtros
// .......................................
let reestablecer = () => {
    console.log('estoy reestableciendo filtros');
    $brillo = $brilloF.max;      // valor por defecto para la imagen
    $opacidad = $opacidadF.max;    // valor por defecto para la imagen
    $contraste = $contrasteF.min;    // valor por defecto para la imagen
    $desenfoque = $desenfoqueF.min;     // valor por defecto para la imagen
    $escalaGris = $escalaGrisF.min;    // valor por defecto para la imagen
    $sepia = $sepiaF.min;    // valor por defecto para la imagen
    $hue = $hueF.min;    // valor por defecto para la imagen
    $saturado = $saturadoF.min;    // valor por defecto para la imagen
    $negativo = $negativoF.min;    // valor por defecto para la imagen
    iniciarFiltros ();
    // ............................................
    // aplico los valores de los distintos estilos a la imagen
    $img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) contrast(${$contraste}%) blur(${$desenfoque}px) grayscale(${$escalaGris}%) sepia(${$sepia}%) hue-rotate(${$hue}deg) saturate(${$saturado}%) invert(${$negativo})`;
    console.log('filtros reestablecidos', $brillo, $opacidad, $contraste,   $desenfoque, $escalaGris, 'etc');
}

// ...........................................................
// captura de URL, ingreso de imagen al HTML e inserción de imagen en variable general $img
// ...........................................................
$ingresoURL.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        $franja2.innerHTML = `<img id="img" src=" " alt="imagen ingresada por URL">`;// borro por si hay una imagen ya insertada
        $franja2.innerHTML = `<img id="img" src="${$ingresoURL.value}" alt="imagen ingresada por URL">`;
        iniciarFiltros();  // al ingresar nueva imagen inicia los botones de los input range
        $img = document.getElementById('img'); // guardo la información de la imagen en variable general $img
    }
})

// ...........................................
// Captura de los input range
// ...........................................
// Captura brillo
$brilloF.addEventListener('input', function(){
    $brillo = $brilloF.value; 
    modificarImagen();}) 

// Captura opacidad
$opacidadF.addEventListener('input', function(){
    $opacidad = $opacidadF.value; 
    modificarImagen();});

// Captura contraste
$contrasteF.addEventListener('input', function(){
    $contraste = $contrasteF.value; 
    modificarImagen();});

// Captura desenfoque
$desenfoqueF.addEventListener('input', function(){
    $desenfoque = $desenfoqueF.value; 
    modificarImagen();});

// Captura escalaGris
$escalaGrisF.addEventListener('input', function(){
    $escalaGris = $escalaGrisF.value; 
    modificarImagen()});

// Captura sepia
$sepiaF.addEventListener('input', function(){
    $sepia = $sepiaF.value; 
    modificarImagen()});

// Captura hue
$hueF.addEventListener('input', function(){
    $hue = $hueF.value; 
    modificarImagen()});

// Captura saturado
$saturadoF.addEventListener('input', function(){
    $saturado = $saturadoF.value; 
    modificarImagen()});

// Captura negativo
$negativoF.addEventListener('input', function(){
    $negativo = $negativoF.value; 
    modificarImagen()});

// ...........................................
// Función que recibe el valor de los input range para modificar la imagen
// ...........................................
let modificarImagen = () => {
    console.log('estoy modificando');
    // $img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) blur(${$desenfoque}px)`;
    $img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) contrast(${$contraste}%) blur(${$desenfoque}px) grayscale(${$escalaGris}%) sepia(${$sepia}%) hue-rotate(${$hue}deg) saturate(${$saturado}%) invert(${$negativo})`;
}

// ....................................
// Botón reestablecer filtros
// ....................................
$botonReestablecer.addEventListener('click', (event) => {
    event.preventDefault();
    reestablecer();
})
   


// ***********************
// ***********************
// Panel Texto
// ***********************
// ***********************

let $textoArriba = document.getElementById('textoArriba');
let $textoAbajo = document.getElementById('textoAbajo');
let $ingresoTextoSuperior = document.getElementById('ingresoTextoSuperior');
let $ingresoTextoInferior = document.getElementById('ingresoTextoInferior');


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





// Funciones
// Funcion para completar texto arriba o abajo
let completarTexto = (lugar, texto) => {
    if (lugar === $ingresoTextoSuperior) { $textoArriba.innerHTML = `<h2 id="textoArriba">${texto}</h2>`; 
    // console.log('arriba') 
}
    else {
        $textoAbajo.innerHTML = `<h2 id="textoAbajo">${texto}</h2>`; 
        // console.log('abajo');
    }
}









