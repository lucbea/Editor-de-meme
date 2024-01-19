// ***********************
// ***********************
// Ambos paneles
// ***********************
// ***********************
let $botonImagen = document.getElementById('botonImagen');
let $botonTexto = document.getElementById('botonTexto');
let $cierrePanel = document.getElementById('cierrePanel');
let $panel = document.getElementById('panel');
let $panelImagen = document.getElementById('panelImagen');
let $panelTexto = document.getElementById('panelTexto');

// ..........................................
// .. Función para obtener el tamaño de la pantalla ..
function preguntaTamanioVentana() {
    return window.innerWidth;  // Devuelve el ancho pantalla 
}

// .............................................
// .. Maneja el evento de redimensionamiento para actualizar el tamaño de la pantalla y mostrar o no botón de cierre del panel ..
window.addEventListener('resize', function () {
    let tamanioPantalla = preguntaTamanioVentana();
    if (tamanioPantalla > 1299) {
        $cierrePanel.style.display = "none";
        if ($panelImagen.style.display !== 'none' || $panelTexto.style.display !== 'none') {
            $panel.style.display = ('block');
        }
        else {
            $panelImagen.style.display = 'block';// muestra panel de imagen
            $panel.style.display = 'block';
        }
    }
    else {
        if ($panelImagen.style.display !== 'none' || $panelTexto.style.display !== 'none') {
            $cierrePanel.style.display = "flex";
            $panel.style.display = ('block');
        }
        else { 
            $panelImagen.style.display = "none";
            $panel.style.display = 'none';
        }
    }
})



// ...............................................
// .. Muestra panel de imagen con o sin boton X ..
$botonImagen.addEventListener('click', (event) => {
    $panelImagen.style.display = "block";
    $panel.style.display = "block";
    $panelTexto.style.display = "none";
    
    // Llama a la función para obtener el tamaño de la pantalla y mostrar o no el botón X
    tamanioVentana = preguntaTamanioVentana();
    // Pregunta si el boton cierre esta display o none en función del tamaño de la ventana
    if (tamanioVentana > 1299) { $cierrePanel.style.display = "none"; }
    else { $cierrePanel.style.display = "flex"; }
});

// ..............................................
// .. Muestra panel de texto con o sin boton X ..
$botonTexto.addEventListener('click', (event) => {
    $panelTexto.style.display = "block";
    $panel.style.display = "block";
    $panelImagen.style.display = "none";
    tamanioVentana = preguntaTamanioVentana(); // Llama a la función para obtener el tamaño de la pantalla y muestra o no el botón X
    
    // Pregunta si el boton cierre esta display o none en función del tamaño de la ventana
    if (tamanioVentana > 1299) { $cierrePanel.style.display = "none" }
    else { $cierrePanel.style.display = "flex"; }
});

// ....................................
// .. Botón cierre de panel - evento ..
$cierrePanel.addEventListener('click', (event) => cierre())

// ...............................
// .. Función cierre de paneles ..
let cierre = () => {
    console.log('apretaste cierre');
    $panelTexto.style.display = "none";
    $panelImagen.style.display = "none";
    $cierrePanel.style.display = "none";
    $panel.style.display = "none";
}


// ***********************
// ***********************
// Panel Imagen
// ***********************
// ***********************

// ...................................................
// .. Inicialización de variables para Panel Imagen ..
let $ingresoURL = document.getElementById('ingresoURL'); // id de la URL que se ingresa 

let $tarjeta = document.getElementById('tarjeta');  // para recuperar el contenedor de imagen y texto
let $franja1 = document.getElementById('franja1'); // div donde esta el texto superior
let $franja2 = document.getElementById('franja2');   // franja2 es el id del contenedor de la imagen que se insertará desde java
let $franja3 = document.getElementById('franja3'); // div donde está el texto inferior
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

let $brillo = 1; // valor inicial de las variables para aplicar estilo a la imagen
let $opacidad = 1;  // valor inicial de las variables para aplicar estilo a la imagen
let $desenfoque = 0;    // valor inicial de las variables para aplicar estilo  a la imagen
let $contraste = 100;    // valor inicial de las variables para aplicar estilo a la imagen
let $escalaGris = 0;    // valor inicial de las variables para aplicar estilo a la imagen
let $sepia = 0;     // valor inicial de las variables para aplicar estilo a la imagen
let $hue = 0;    // valor inicial de las variables para aplicar estilo a la imagen
let $saturado = 100;   // valor inicial de las variables para aplicar estilo a la imagen
let $negativo = 0;    // valor inicial de las variables para aplicar estilo a la imagen

// ...............................................................................
// .. Funcion para iniciar los botones de los input range al colocar una imagen ..
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

// ...........................................
// .. Funcion para reestablecer los filtros ..
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
    iniciarFiltros();
    // ............................................
    // aplico los valores de los distintos estilos a la imagen
    if ($img) {
        $img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) contrast(${$contraste}%) blur(${$desenfoque}px) grayscale(${$escalaGris}%) sepia(${$sepia}%) hue-rotate(${$hue}deg) saturate(${$saturado}%) invert(${$negativo})`;
        console.log('filtros reestablecidos', $brillo, $opacidad, $contraste, $desenfoque, $escalaGris, 'etc');
    }
}

// ...........................................
// .. Captura de URL, ingreso de imagen al HTML e inserción de imagen en variable general $img 
$ingresoURL.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        $franja2.innerHTML = `<img id="img" src=" " alt="imagen ingresada por URL">`;// borro por si hay una imagen ya insertada
        $franja2.innerHTML = `<img id="img" src="${$ingresoURL.value}" alt="imagen ingresada por URL">`;
        iniciarFiltros();  // al ingresar nueva imagen inicia los botones de los input range
        $img = document.getElementById('img'); // guardo la información de la imagen en variable general $img
    }
})


// ...................................................
// .. Captura de los input range -filtros de imagen ..

// Captura brillo
$brilloF.addEventListener('input', function () {
    $brillo = $brilloF.value;
    modificarImagen();
})

// Captura opacidad
$opacidadF.addEventListener('input', function () {
    $opacidad = $opacidadF.value;
    modificarImagen();
});

// Captura contraste
$contrasteF.addEventListener('input', function () {
    $contraste = $contrasteF.value;
    modificarImagen();
});

// Captura desenfoque
$desenfoqueF.addEventListener('input', function () {
    $desenfoque = $desenfoqueF.value;
    modificarImagen();
});

// Captura escalaGris
$escalaGrisF.addEventListener('input', function () {
    $escalaGris = $escalaGrisF.value;
    modificarImagen()
});

// Captura sepia
$sepiaF.addEventListener('input', function () {
    $sepia = $sepiaF.value;
    modificarImagen()
});

// Captura hue
$hueF.addEventListener('input', function () {
    $hue = $hueF.value;
    modificarImagen()
});

// Captura saturado
$saturadoF.addEventListener('input', function () {
    $saturado = $saturadoF.value;
    modificarImagen()
});

// Captura negativo
$negativoF.addEventListener('input', function () {
    $negativo = $negativoF.value;
    modificarImagen()
});

// ......................................
// .. Función que recibe el valor de los input range para modificar la imagen 
let modificarImagen = () => {
    if ($img) {
        $img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) contrast(${$contraste}%) blur(${$desenfoque}px) grayscale(${$escalaGris}%) sepia(${$sepia}%) hue-rotate(${$hue}deg) saturate(${$saturado}%) invert(${$negativo})`;
    }
}


// ................................
// .. Botón reestablecer filtros ..
$botonReestablecer.addEventListener('click', (event) => {
    event.preventDefault();
    reestablecer();
})



// ***********************
// ***********************
// Panel Texto
// ***********************
// ***********************

//................................
//.. Ingreso del texto superior ..
let $textoArriba = document.getElementById('textoArriba');
let $ingresoTextoSuperior = document.getElementById('ingresoTextoSuperior');

$ingresoTextoSuperior.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let textoIngresado = $ingresoTextoSuperior.value;
        completarTexto($ingresoTextoSuperior, textoIngresado);
        $ingresoTextoSuperior.value = "";
    }
});


// ................................
// .. Ingreso del texto inferior ..
let $textoAbajo = document.getElementById('textoAbajo');
let $ingresoTextoInferior = document.getElementById('ingresoTextoInferior');

$ingresoTextoInferior.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();         
        let textoIngresado = $ingresoTextoInferior.value;
        completarTexto($ingresoTextoInferior, textoIngresado);
    }
});


//.................................................
//.. Funcion para completar texto arriba o abajo ..
let completarTexto = (lugar, texto) => {
    if (lugar === $ingresoTextoSuperior) {
        $textoArriba.textContent = texto;
    }
    else {
        $textoAbajo.textContent = texto;
    }
}

// ....................................................
// .. Activación check de textos superior e inferior ..
let $sinTextoInferior = document.getElementById('sinTextoInferior');
let $sinTextoSuperior = document.getElementById('sinTextoSuperior');

//...................................
//..  Check en  Sin texto superior ..
$sinTextoSuperior.addEventListener('input', () => {
    revisarSiMuestroTextos ();
})

// .................................
// .. Check en Sin texto inferior ..
$sinTextoInferior.addEventListener('input', () => {
    revisarSiMuestroTextos ();
})

// ......................................................
// .. Función que adapta los div segun los input check ..
let revisarSiMuestroTextos = () => {
    console.log('estoy en funcion revisarSiMuestroTextos', $sinTextoInferior.checked, $sinTextoSuperior.checked);
    switch (true) {
        case ($sinTextoInferior.checked && $sinTextoSuperior.checked):  modificarEspacioFranjas('none', 'none', '71vh');          
            break;
        case ($sinTextoInferior.checked && !$sinTextoSuperior.checked):
            modificarEspacioFranjas('flex', 'none', '59vh');
            break;
        case (!$sinTextoInferior.checked && $sinTextoSuperior.checked): modificarEspacioFranjas('none', 'flex', '59vh');
            break;
        case (!$sinTextoInferior.checked && !$sinTextoSuperior.checked): modificarEspacioFranjas('flex', 'flex', '47vh');
            break;
    }
};

// .....................................
// .. Función que modifica height de las franjas
let modificarEspacioFranjas = (fr1, fr2, fr3) => {
    $franja1.style.display = fr1;
    $franja3.style.display = fr2;
    $franja2.style.height =  fr3;
}


//..........................................
// .. Modificación de la fuente del texto .. 
$elecFuente = document.getElementById('elecFuente');
$elecFuente.addEventListener('input', (event) => {
    console.log($elecFuente.value);
    $textoArriba.style.fontFamily = $elecFuente.value;
    $textoAbajo.style.fontFamily = $elecFuente.value;
})

//..........................................
// .. Modificación del tamaño de la fuente del texto .. 
$tamanioFuente = document.getElementById('tamanioFuente');
$tamanioFuente.addEventListener('keydown', (event) => {
    console.log($tamanioFuente.value);
    $textoArriba.style.fontSize = `${$tamanioFuente.value}px`;
    $textoAbajo.style.fontSize = `${$tamanioFuente.value}px`;
});

// ..........................................
// .. Modificación de alineación del texto ..
// Alineación hacia la izquierda
let $alineaIzq = document.getElementById('alineaIzq');
$alineaIzq.addEventListener('click', () => {
    $franja1.style.justifyContent = "flex-start";
    $franja1.style.paddingLeft = "20px";
    $franja3.style.justifyContent = "flex-start";
    $franja3.style.paddingLeft = "20px";
});

// Alineación central
let $alineaCen = document.getElementById('alineaCen');
$alineaCen.addEventListener('click', () => {
    $franja1.style.justifyContent = "center";
    $franja3.style.justifyContent = "center";
});

// Alineación hacia la derecha
let $alineaDer = document.getElementById('alineaDer');
$alineaDer.addEventListener('click', () => {
    $franja1.style.justifyContent = "flex-end";
    $franja1.style.paddingRight = "20px";
    $franja3.style.justifyContent = "flex-end";
    $franja3.style.paddingRight = "20px";
});


// .......................................
// .. Modificación del color del texto ..
let $colorTexto = document.getElementById('colorTexto');  // para recuperar el valor del input type color
let $labelColorTexto = document.querySelector('label[for="colorTexto"]')  // para interactuar con el label del input colorTexto

$colorTexto.addEventListener('input', function () {
    console.log($colorTexto.value);
    $textoArriba.style.color = $colorTexto.value;
    $textoAbajo.style.color = $colorTexto.value;
    $labelColorTexto.textContent = $colorTexto.value;
})

// ...........................................
// Modificación del color del fondo del texto
let $colorFondoTex = document.getElementById('colorFondoTex');  // para recuperar el valor del input type color  del fondo del texto
let $labelColorFondoTex = document.querySelector('label[for="colorFondoTex"]')  // para interactuar con el label del input colorTexto del fondo del texto
let $fondoTexto = document.getElementById('fondoTexto')

$colorFondoTex.addEventListener('input', function () {
    console.log($colorFondoTex.value);
    aplicarColorDeFondo ();   
})

// .........................................
// .. Aplicar el color de fondo elegido
let aplicarColorDeFondo = () => {
    $franja1.style.background = `linear-gradient(to bottom, rgb(118, 97, 97)0%, ${$colorFondoTex.value} 9%,  #FFFFFF 50%, ${$colorFondoTex.value} 93%, rgb(118, 97, 97) 100%)`;
    $franja3.style.background = `linear-gradient(to bottom, rgb(118, 97, 97)0%, ${$colorFondoTex.value} 9%,  #FFFFFF 50%, ${$colorFondoTex.value} 93%, rgb(118, 97, 97) 100%)`;
    $franja2.style.background = `radial-gradient(circle, #fcfbf2, ${$colorFondoTex.value})`;
    $labelColorFondoTex.textContent = $colorFondoTex.value;

}
// ...............................................
// .. Aplicación de check fondo transparente
let $opcionFondoTransparente = document.getElementById('opcionFondoTransparente');
$opcionFondoTransparente.addEventListener('input', () => {
    if ($opcionFondoTransparente.checked){
        console.log('estoy en transparent')
        $franja1.style.background = 'transparent';
        $franja2.style.background = 'transparent';
        $franja3.style.background = 'transparent';
        if($img) {
            console.log('hay imagen ingresada', $ingresoURL.value);
            $img.style.display = 'none';}
            $tarjeta.style.backgroundImage = `url('${$ingresoURL.value}')`;
            $tarjeta.style.backgroundSize = 'cover';
            $tarjeta.style.backgroundRepeat = 'no-repeat';
    }
    else{
        $franja1.style.background = '';
        $franja2.style.background = '';
        $franja3.style.background = '';
        aplicarColorDeFondo();
        console.log($colorFondoTex.value);
        if ($colorFondoTex.value === '#ffffff') {
            console.log('entre');
            $franja1.style.background = 'linear-gradient(to bottom, rgb(118, 97, 97)0%, #a3a37a 9%, #FFFFFF 30%, #FFFFFF 50%, #a3a37a 93%, rgb(118, 97, 97) 100%)';
            $franja2.style.background = 'radial-gradient(circle, #fcfbf2, #bebc99)';
            $franja3.style.background = 'linear-gradient(to bottom, rgb(118, 97, 97)0%, #a3a37a 7%, #FFFFFF 30%, #FFFFFF 50%, #a3a37a 91%, rgb(118, 97, 97) 100%)';
        } else {
            console.log('no entré');
        }
        if ($img) {$img.style.display = 'block'}
    }
});

// ....................................
// .. Botones para contorno de texto ..
// .. Boton Ninguno ..
let $opcionContNinguno = document.getElementById('opcionContNinguno');
$opcionContNinguno.addEventListener('click', (event) =>{
    $textoArriba.style.webkitTextStroke = 'transparent';  /* Para navegadores WebKit (Safari, Chrome) */
    $textoArriba.style.textStroke = 'transparent';  /* Estándar */
    $textoArriba.style.textShadow = 'none';
    $textoAbajo.style.webkitTextStroke = 'transparent';  /* Para navegadores WebKit (Safari, Chrome) */
    $textoAbajo.style.textStroke = 'transparent';  /* Estándar */
    $textoAbajo.style.textShadow = 'none';
})

let $opcionContClaro = document.getElementById('opcionContClaro');
$opcionContClaro.addEventListener('click', (event) =>{
        $textoArriba.style.webkitTextStroke = '1px white';  /* Para navegadores WebKit (Safari, Chrome) */
        $textoArriba.style.textStroke = '1px white';  /* Estándar */
        $textoArriba.style.textShadow = '1px 1px 1px white';
        $textoAbajo.style.webkitTextStroke = '1px white';  /* Para navegadores WebKit (Safari, Chrome) */
        $textoAbajo.style.textStroke = '1px white';  /* Estándar */
        $textoAbajo.style.textShadow = '1px 1px 1px white';
});

let $opcionContOscuro = document.getElementById('opcionContOscuro');
$opcionContOscuro.addEventListener('click', (event) =>{
    $textoArriba.style.webkitTextStroke = '1px black';  /* Para navegadores WebKit (Safari, Chrome) */
    $textoArriba.style.textStroke = '1px black';  /* Estándar */
    $textoArriba.style.textShadow = '1px 1px 0px black';
    $textoAbajo.style.webkitTextStroke = '1px black';  /* Para navegadores WebKit (Safari, Chrome) */
    $textoAbajo.style.textStroke = '1px black';  /* Estándar */
    $textoAbajo.style.textShadow = '1px 1px 0px black';
});


// ***********************
// ***********************
// Boton modo oscuro / claro
// ***********************
// ***********************
let $botonModo = document.getElementById('botonModo');
let $body = document.getElementById('body');
let $nav = document.getElementById('nav');
let $modoClaOsc = document.getElementById('modoClaOsc'); // Toma el <p> para modificarlo

let banderaModoOscuro = 0;  // Variable para cambiar entre modo claro y modo oscuro
document.body.classList.add('modoClaro');
$botonModo.addEventListener ('click', (event) => {
    banderaModoOscuro = !(banderaModoOscuro);
    if (banderaModoOscuro) {
        console.log('estoy en modo oscuro');
        document.body.classList.remove('modoClaro');
        document.body.classList.add('modoOscuro');
        $modoClaOsc.textContent = 'MODO CLARO';
    } else {
        console.log('estoy en modo claro');
        document.body.classList.remove('modoOscuro');
        document.body.classList.add('modoClaro');
        $modoClaOsc.textContent = 'MODO OSCURO';
    }
})

// .....................................
// .. Boton descarga

let $descargaBoton = document.getElementById('descargaBoton');
let $imagen = document.getElementById('tarjeta');

$descargaBoton.addEventListener("click", () => {
    console.log('voy a descargar el meme')
    domtoimage.toBlob(document.getElementById("tarjeta")).then((blob) => window.saveAs(blob, "meme.png"));
});








