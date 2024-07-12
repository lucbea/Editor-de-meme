
// ***********************
// ***********************
// Ambos paneles
// ***********************
// ***********************
let $botonImagen = document.getElementById("botonImagen");
let $botonTexto = document.getElementById("botonTexto");
let $cierrePanel = document.getElementById("cierrePanel");
let $panel = document.getElementById("panel");
let $panelImagen = document.getElementById("panelImagen");
let $panelTexto = document.getElementById("panelTexto");
let $nav = document.getElementById("nav");
let $tarjeta = document.getElementById("tarjeta");
let $contenedorImgText = document.getElementById("contenedorImgText");
let $contenedor = document.getElementById("contenedor");
let $btnDescarga = document.getElementById("botonDescarga");
let $foot = document.getElementById("foot");
let tamanioPantalla = 1;

// ..........................................
// .. Función para obtener el tamaño de la pantalla ..
function preguntaTamanioVentana() {
	return window.innerWidth;
}

// .............................................
// .. Maneja el evento de redimensionamiento para actualizar el tamaño de la pantalla y mostrar o no botón de cierre del panel ..
window.addEventListener("resize", function () {
	tamanioPantalla = preguntaTamanioVentana();
	if (tamanioPantalla > 1299) {
		cerrarObjTrans([$cierrePanel]);
		$contenedor.style.width = '60%';
		$nav.style.paddingRight = '0px';
		$contenedorImgText.style.marginRight = `0px`;
		$contenedor.style.marginInline = `auto !important`;
		$btnDescarga.style.marginRight = '0px';
		$foot.style.paddingRight = '0px';
		if ($panelImagen.style.display !== "none" || $panelTexto.style.display !== "none") {
			mostrarObjTrans([$panel])
		} else {
			cerrarObjTrans([$panel, $cierrePanel]);
		}
		$contenedorImgText.style.marginInline = `auto`;
	} else {
		if ($panelImagen.style.display !== "none" || $panelTexto.style.display !== "none") {
			mostrarObjTrans([$panel, $cierrePanel]);
			if (tamanioPantalla > 699 && tamanioPantalla < 1299) {
				$nav.style.paddingRight = '240px';
				$contenedorImgText.style.marginRight = '240px';
				$btnDescarga.style.marginRight = '240px';
				$foot.style.paddingRight = '240px';
				$contenedor.style.width = '90%'; 
				$contenedor.style.marginInline = 'auto';

				$nav.classList.add('transition_element');
				$contenedorImgText.classList.add('transition_element');
				$btnDescarga.classList.add('transition_element');
				$foot.classList.add('transition_element');
				$contenedor.classList.add('transition_element');

				setTimeout(function () {
					$nav.style.transition = 'padding-right 0.5s ease';
					$contenedorImgText.style.transition = 'margin-right 0.5s ease';
					$btnDescarga.style.transition = 'margin-right 0.5s ease';
					$foot.style.transition = 'padding-right 0.5s ease';
					$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
				}, 100);
			}
		} else {
			cerrarObjTrans([$cierrePanel, $panel]);
			$nav.style.paddingRight = '0px';
			$contenedorImgText.style.marginRight = `0px`;
			$contenedor.style.marginInline = `auto !important`;
			$btnDescarga.style.marginRight = '0px';
			$foot.style.paddingRight = '0px';

			$nav.classList.remove('transition_element');
			$contenedorImgText.classList.remove('transition_element');
			$btnDescarga.classList.remove('transition_element');
			$foot.classList.remove('transition_element');
			$contenedor.classList.remove('transition_element');

			setTimeout(function () {
				$nav.style.transition = 'padding-right 0.5s ease';
				$contenedorImgText.style.transition = 'margin-right 0.5s ease';
				$btnDescarga.style.transition = 'margin-right 0.5s ease';
				$foot.style.transition = 'padding-right 0.5s ease';
				$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
			}, 100);
		}
	}
});

// ...............................................
// .. Muestra panel de imagen con o sin boton X ..
$botonImagen.addEventListener("click", (event) => {
	cerrarObjTrans([$panelTexto])
	mostrarObjTrans([$panel, $panelImagen, $cierrePanel]);
	tamanioVentana = preguntaTamanioVentana();
	if (tamanioVentana > 1299) {
		cerrarObjTrans([$cierrePanel]);
	} else {
		if (tamanioVentana > 699 && tamanioVentana < 1300) {
			$nav.style.paddingRight = '240px';
			$contenedorImgText.style.marginRight = '240px';
			$contenedor.style.width = '90%';
			$contenedor.style.marginInline = 'auto';
			$btnDescarga.style.marginRight = '240px';
			$foot.style.paddingRight = '240px';
			$nav.classList.add('transition_element');
			$contenedorImgText.classList.add('transition_element');
			$btnDescarga.classList.add('transition_element');
			$foot.classList.add('transition_element');
			$contenedor.classList.add('transition_element');

			setTimeout(function () {
				$nav.style.transition = 'padding-right 0.5s ease';
				$contenedorImgText.style.transition = 'margin-right 0.5s ease';
				$btnDescarga.style.transition = 'margin-right 0.5s ease';
				$foot.style.transition = 'padding-right 0.5s ease';
				$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
			}, 100);

		}
	}
});

// ..............................................
// .. Muestra panel de texto con o sin boton X ..
$botonTexto.addEventListener("click", (event) => {
	cerrarObjTrans([$panelImagen]);
	mostrarObjTrans([$panel, $panelTexto, $cierrePanel]);
	tamanioVentana = preguntaTamanioVentana();
	if (tamanioVentana > 1299) {
		cerrarObjTrans([$cierrePanel]);
	} else {
		if (tamanioVentana > 699 && tamanioVentana < 1300) {
			$nav.style.paddingRight = '240px';
			$contenedorImgText.style.marginRight = '240px';
			$contenedor.style.width = '90%';
			$contenedor.style.marginInline = 'auto';
			$btnDescarga.style.marginRight = '240px';
			$foot.style.paddingRight = '240px';
			$nav.classList.add('transition_element');
			$contenedorImgText.classList.add('transition_element');
			$btnDescarga.classList.add('transition_element');
			$foot.classList.add('transition_element');
			$contenedor.classList.add('transition_element');

			setTimeout(function () {
				$nav.style.transition = 'padding-right 0.5s ease';
				$contenedorImgText.style.transition = 'margin-right 0.5s ease';
				$btnDescarga.style.transition = 'margin-right 0.5s ease';
				$foot.style.transition = 'padding-right 0.5s ease';
				$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
			}, 100);

		}
	}
});

// ....................................
// .. Botón cierre de panel - evento ..
$cierrePanel.addEventListener("click", (event) => cierre());

// ...............................
// .. Función cierre de paneles ..
let cierre = () => {
	cerrarObjTrans([$cierrePanel, $panelTexto, $panelImagen, $panel]);
	$contenedorImgText.style.marginRight = `0px`;
	$contenedor.style.marginRight = "0px";
	$contenedor.style.marginInline = "auto";
	$nav.style.paddingRight = '0px';
	$btnDescarga.style.marginRight = '0px';
	$foot.style.paddingRight = '0px';

	$nav.classList.remove('transition_element');
	$contenedorImgText.classList.remove('transition_element');
	$btnDescarga.classList.remove('transition_element');
	$foot.classList.remove('transition_element');
	$contenedor.classList.remove('transition_element');

	setTimeout(function () {
		$nav.style.transition = 'padding-right 0.5s ease';
		$contenedorImgText.style.transition = 'margin-right 0.5s ease';
		$btnDescarga.style.transition = 'margin-right 0.5s ease';
		$foot.style.transition = 'padding-right 0.5s ease';
		$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
	}, 100);

};


function mostrarObjTrans(paneles) {
	paneles.forEach($pan => {
		if ($pan === $cierrePanel) {
			$cierrePanel.style.display = "flex";
		} else { 
			$pan.style.display = "block"; 
		} 
		$pan.style.transition = "opacity 0.5s ease";
		setTimeout(() => {
			$pan.style.opacity = "1";
		}, 5);
	});
}


function cerrarObjTrans(paneles) {
	paneles.forEach($pan => {
		$pan.style.opacity = "0";
		$pan.style.transition = "opacity 0.5s ease";
		setTimeout(() => {
			$pan.style.display = "none";
		}, 5); 
	});
}


// ***********************
// ***********************
// Panel Imagen
// ***********************
// ***********************

// ...................................................
// .. Inicialización de variables para Panel Imagen ..
let $ingresoURL = document.getElementById("ingresoURL");
let $franja1 = document.getElementById("franja1");
let $franja2 = document.getElementById("franja2");
let $franja3 = document.getElementById("franja3");
let $botonReestablecer = document.getElementById("botonReestablecer");
let $img;
let $imgError = document.getElementById("imgError");
let $subirImagenIcono = document.getElementById('subirImagenIcono');
let $subirImagenInput = document.getElementById('subirImagenInput');
let $btnBorrarURL = document.getElementById("btnBorrarURL");
let $colorFondo = document.getElementById("colorFondo");
let $labelColorFondo = document.querySelector('label[for="colorFondo"]');
let $fondoTextoImg = document.getElementById("fondoTextoImg");
let $otrasOpcionesImagen = document.getElementById("otrasOpcionesImagen");
let $noAplicaBlend = document.getElementById("noAplicaBlend");
let $brilloF = document.getElementById("brillo");
let $opacidadF = document.getElementById("opacidad");
let $desenfoqueF = document.getElementById("desenfoque");
let $contrasteF = document.getElementById("contraste");
let $escalaGrisF = document.getElementById("escalaGris");
let $sepiaF = document.getElementById("sepia");
let $hueF = document.getElementById("hue");
let $saturadoF = document.getElementById("saturado");
let $negativoF = document.getElementById("negativo");
let $brillo = 1;
let $opacidad = 1;
let $desenfoque = 0;
let $contraste = 100;
let $escalaGris = 0;
let $sepia = 0;
let $hue = 0;
let $saturado = 100;
let $negativo = 0;


// ...........................................
// .. Funcion para reestablecer los filtros ..
let reestablecer = () => {
	$brillo = $brilloF.max;
	$opacidad = $opacidadF.max;
	$contraste = $contrasteF.min;
	$desenfoque = $desenfoqueF.min;
	$escalaGris = $escalaGrisF.min;
	$sepia = $sepiaF.min;
	$hue = $hueF.min;
	$saturado = $saturadoF.min;
	$negativo = $negativoF.min;
	iniciarFiltros();
};

// ...............................................................................
// .. Funcion para iniciar los botones de los input range al colocar una imagen ..
let iniciarFiltros = () => {
	$brilloF.value = 1;
	$opacidadF.value = 1;
	$desenfoqueF.value = 0;
	$contrasteF.value = 100;
	$escalaGrisF.value = 0;
	$sepiaF.value = 0;
	$hueF.value = 0;
	$saturadoF.value = 100;
	$negativoF.value = 0;
	modificarImagen();
};

// .......................................
// Iniciar Blend-Mode
let iniciarBlendMode = () => {
	$otrasOpcionesImagen.value = "unset";
	$otrasOpcionesImagen.style.mixBlendMode = "unset";
};

// .................
//  Ingreso URL 
$ingresoURL.addEventListener("input", (event) => {
	event.preventDefault();
	cargarImagen();
	reestablecer();
	iniciarBlendMode();
});

// ...........................................
// Captura de URL, ingreso de imagen al HTML e inserción de imagen en variable general $img
let cargarImagen = () => {
	if ($ingresoURL.value) {
		$franja2.style.width = "100%";
		$franja2.innerHTML = "";
		$franja2.innerHTML = `<img id="img" src="${$ingresoURL.value}" alt="imagen ingresada por URL">`;
		$img = document.getElementById("img");
		$img.onerror = function () {
			$franja2.style.width = "0";
			$imgError.classList.remove("ocultoSinModificar");
			$img = "";
		};
		$img.onload = function () {
			$noAplicaBlend.classList.add("ocultoSinModificar");
			$imgError.classList.add("ocultoSinModificar");
			revisarTextosYFranjas();
		};
	}
};

// .......................................
// Borrar URL
$btnBorrarURL.addEventListener("click", () => {
	$ingresoURL.value = '';
	$imgError.classList.add("ocultoSinModificar");
	$noAplicaBlend.classList.add("ocultosinModificar");
})

// .......................................
// Subir img desde archivo
document.addEventListener("DOMContentLoaded", function () {
	$subirImagenIcono.addEventListener('click', function () {
		$imgError.classList.add("ocultoSinModificar");
		$ingresoURL.value = "";
		$subirImagenInput.click();
	});

	$subirImagenInput.addEventListener('change', function () {
		if ($subirImagenInput.files && $subirImagenInput.files[0]) {
			$noAplicaBlend.classList.add("ocultoSinModificar");
			let reader = new FileReader();
			reader.onload = function (e) {
				$franja2.style.width = "100%";
				$franja2.innerHTML = "";
				$franja2.innerHTML = `<img id="img" src="${e.target.result}" alt="imagen ingresada desde archivo">`;
				$img = document.getElementById("img");
			};
			reader.readAsDataURL($subirImagenInput.files[0]);
		};
		reestablecer();
		iniciarBlendMode();
		revisarTextosYFranjas();
	});
});

// ...........................................
// Modificación del color del fondo del panel Imagen
$colorFondo.addEventListener("input", function () {
	$labelColorFondo.textContent = $colorFondo.value.toUpperCase();
	if ($img) { aplicarBlendMode() }
});

//..................................................
// .. Ingreso opciones de Blend Mode ..
$otrasOpcionesImagen.addEventListener("input", () => {
	if ($img) {
		aplicarBlendMode();
	} else {
		if ($otrasOpcionesImagen.value = "unset") {
			$noAplicaBlend.classList.remove("ocultoSinModificar");
		} else {
			$noAplicaBlend.classList.add("ocultoSinModificar");
			$colorFondo.value = "#FFFFFF";
			$labelColorFondo.textContent = $colorFondo.value.toUpperCase();
			$otrasOpcionesImagen.value = "unset";
		}
	}
});

// .......................................
// Aplicar Blend-Mode
let aplicarBlendMode = () => {
	$noAplicaBlend.classList.add("ocultoSinModificar");
	$franja2.style.background = $colorFondo.value;
	$img.style.mixBlendMode = $otrasOpcionesImagen.value;
	if ($otrasOpcionesImagen.value === "unset") {
		$colorFondo.value = "#FFFFFF";
		$labelColorFondo.textContent = "#FFFFFF";
	}
};

// ...............................................
// Captura de los input range -filtros de imagen 
$brilloF.addEventListener("input", function () {
	$brillo = $brilloF.value;
	modificarImagen();
});

$opacidadF.addEventListener("input", function () {
	$opacidad = $opacidadF.value;
	modificarImagen();
});

$contrasteF.addEventListener("input", function () {
	$contraste = $contrasteF.value;
	modificarImagen();
});

$desenfoqueF.addEventListener("input", function () {
	$desenfoque = $desenfoqueF.value;
	modificarImagen();
});

$escalaGrisF.addEventListener("input", function () {
	$escalaGris = $escalaGrisF.value;
	modificarImagen();
});

$sepiaF.addEventListener("input", function () {
	$sepia = $sepiaF.value;
	modificarImagen();
});

$hueF.addEventListener("input", function () {
	$hue = $hueF.value;
	modificarImagen();
});

$saturadoF.addEventListener("input", function () {
	$saturado = $saturadoF.value;
	modificarImagen();
});

$negativoF.addEventListener("input", function () {
	$negativo = $negativoF.value;
	modificarImagen();
});


// ......................................
// Función que recibe el valor de los input range para modificar la imagen
let modificarImagen = () => {
	if ($img) {
		$img = document.getElementById("img");
		$img.style.filter = `brightness(${$brillo}) opacity(${$opacidad}) contrast(${$contraste}%) blur(${$desenfoque}px) grayscale(${$escalaGris}%) sepia(${$sepia}%) hue-rotate(${$hue}deg) saturate(${$saturado}%) invert(${$negativo})`;
	}
};

// ................................
// Botón reestablecer filtros 
$botonReestablecer.addEventListener("click", (event) => {
	event.preventDefault();
	reestablecer();
});



// ***********************
// ***********************
// Panel Texto
// ***********************
// ***********************

//................................
//.. Ingreso del texto superior ..
let $textoArriba = document.getElementById("textoArriba");
let $ingresoTextoSuperior = document.getElementById("ingresoTextoSuperior");
$ingresoTextoSuperior.addEventListener("change", (event) => {
	event.preventDefault();
	let textoIngresado = $ingresoTextoSuperior.value;
	completarTexto($ingresoTextoSuperior, textoIngresado);
	revisarTextosYFranjas();
});

// ................................
// .. Ingreso del texto inferior ..
let $textoAbajo = document.getElementById("textoAbajo");
let $ingresoTextoInferior = document.getElementById("ingresoTextoInferior");
$ingresoTextoInferior.addEventListener("change", (event) => {
	event.preventDefault();
	let textoIngresado = $ingresoTextoInferior.value;
	completarTexto($ingresoTextoInferior, textoIngresado);
	revisarTextosYFranjas();
});

//.................................................
//.. Funcion para completar texto arriba o abajo ..
let completarTexto = (lugar, texto) => {
	if (lugar === $ingresoTextoSuperior) {
		$textoArriba.textContent = texto;
	} else {
		$textoAbajo.textContent = texto;
	}
};

// ....................................................
// .. Activación check de textos superior e inferior ..
let $sinTextoInferior = document.getElementById("sinTextoInferior");
let $sinTextoSuperior = document.getElementById("sinTextoSuperior");

//...................................
//..  Check en  Sin texto superior ..
$sinTextoSuperior.addEventListener("input", () => {
	revisarTextosYFranjas();
});

// .................................
// .. Check en Sin texto inferior ..
$sinTextoInferior.addEventListener("input", () => {
	revisarTextosYFranjas();
});

// ......................................................
// .. Función que adapta los div segun los input check
let revisarTextosYFranjas = () => {
	if (!$opcionFondoTransparente.checked) {
		switch (true) {
			case $sinTextoInferior.checked && $sinTextoSuperior.checked:
				modificarEspacioFranjas("none", "sinTexto", "none");
				break;
			case $sinTextoInferior.checked && !$sinTextoSuperior.checked:
				modificarEspacioFranjas("flex", "textoSup", "none");
				break;
			case !$sinTextoInferior.checked && $sinTextoSuperior.checked:
				modificarEspacioFranjas("none", "textoInf", "flex");
				break;
			case !$sinTextoInferior.checked && !$sinTextoSuperior.checked:
				modificarEspacioFranjas("flex", "ambosTextos", "flex");
				break;
		}
	} else {
		switch (true) {
			case $sinTextoInferior.checked && $sinTextoSuperior.checked:
				modificarEspacioFranjas("none", "sinTexto", "none");
				break;
			case $sinTextoInferior.checked && !$sinTextoSuperior.checked:
				modificarEspacioFranjas("transparent", "textoSup", "none");
				break;
			case !$sinTextoInferior.checked && $sinTextoSuperior.checked:
				modificarEspacioFranjas("none", "textoInf", "transparent");
				break;
			case !$sinTextoInferior.checked && !$sinTextoSuperior.checked:
				modificarEspacioFranjas("transparent", "ambosTextos", "transparent");
				break;
		}
	}
};

// ..............................
// .. Calcular espacio franjas ..

// .....................................
// .. Función que modifica height de las franjas segun inputs check, tamaño del texto, interlineado y espaciado ..
let $body = document.getElementById("body");
let modificarEspacioFranjas = (fr1, fr2, fr3) => {
	let altoBody = $body.offsetHeight + 10;
	const altoFooter = 42;
	const altoNav = 104;
	const espacioYaOcupado = altoFooter + altoNav + 42;
	let espacioTarjeta = altoBody - espacioYaOcupado;
	let altoFranja =
		parseFloat($opcionesInterlineado.value) * parseInt($tamanioFuente.value) +
		parseInt($elecEspaciado.value) * 2;
	let altoContenedorImag = 0;
	if ($opcionFondoTransparente.checked) {
		$franja2.style.height = "100%";
		switch (true) {
			case fr2 == "ambosTextos":
				altoContenedorImag = espacioTarjeta - altoFranja * 2;
				$franja1.style.display = "flex";
				$franja1.style.background = fr1;
				$franja1.style.height = altoFranja + "px";
				$franja2.style.position = "";
				$franja2.style.top = "";
				$franja2.style.bottom = "";
				$franja3.style.display = "flex";
				$franja3.style.background = fr3;
				$franja3.style.height = altoFranja + "px";
				break;
			case fr2 == "textoSup":
				altoContenedorImag = espacioTarjeta - altoFranja;
				$franja1.style.display = "flex";
				$franja1.style.background = fr1;
				$franja1.style.height = altoFranja + "px";
				$franja2.style.position = "absolute";
				$franja2.style.bottom = "0";
				$franja3.style.display = fr3;
				break;
			case fr2 == "textoInf":
				altoContenedorImag = espacioTarjeta - altoFranja;
				$franja1.style.display = fr1;
				$franja2.style.position = "absolute";
				$franja2.style.top = "0";
				$franja3.style.display = "flex";
				$franja3.style.background = fr3;
				$franja3.style.height = altoFranja + "px";
				break;
			case fr2 == "sinTexto":
				$franja1.style.display = fr1;
				$franja3.style.display = fr3;
				break;
			default:
				break;
		}
	} else {
		switch (true) {
			case fr2 == "ambosTextos":
				altoContenedorImag = espacioTarjeta - altoFranja * 2;
				$franja1.style.display = fr1;
				$franja1.style.height = altoFranja + "px";
				$franja2.style.position = "";
				$franja2.style.top = "";
				$franja2.style.bottom = "";
				$franja3.style.display = fr3;
				$franja3.style.height = altoFranja + "px";
				break;
			case fr2 == "textoSup":
				altoContenedorImag = espacioTarjeta - altoFranja;
				$franja1.style.display = fr1;
				$franja1.style.height = altoFranja + "px";
				$franja2.style.position = "absolute";
				$franja2.style.top = "";
				$franja2.style.bottom = "0";
				$franja3.style.display = fr3;
				break;
			case fr2 == "textoInf":
				altoContenedorImag = espacioTarjeta - altoFranja;
				$franja1.style.display = fr1;
				$franja2.style.position = "absolute";
				$franja2.style.bottom = "";
				$franja2.style.top = "0";
				$franja3.style.display = fr3;
				$franja3.style.height = altoFranja + "px";
				break;
			case fr2 == "sinTexto":
				$franja1.style.display = fr1;
				$franja3.style.display = fr3;
				break;
			default:
				break;
		}
	}
	aplicarColorDeFondo();
};

// ......................
// Opcion de espaciado ..
let $elecEspaciado = document.getElementById("elecEspaciado");
$elecEspaciado.addEventListener("input", () => {
	$franja1.style.marginBlock = $elecEspaciado.value;
	$franja3.style.marginBlock = $elecEspaciado.value;
	revisarTextosYFranjas();
});

// ............................
// .. Opcion de interlineado ..
let $opcionesInterlineado = document.getElementById("opcionesInterlineado");
let restarAlAlto = 0;
$opcionesInterlineado.addEventListener("input", () => {
	$textoArriba.style.lineHeight = $opcionesInterlineado.value;
	revisarTextosYFranjas();
});

//..........................................
// .. Modificación de la fuente del texto ..
$elecFuente = document.getElementById("elecFuente");
$elecFuente.addEventListener("input", () => {
	$textoArriba.style.fontFamily = $elecFuente.value;
	$textoAbajo.style.fontFamily = $elecFuente.value;
});

//..........................................
// .. Modificación del tamaño de la fuente del texto ..
$tamanioFuente = document.getElementById("tamanioFuente");
$tamanioFuente.addEventListener("input", () => {
	$textoArriba.style.fontSize = `${$tamanioFuente.value}px`;
	$textoAbajo.style.fontSize = `${$tamanioFuente.value}px`;
	revisarTextosYFranjas();
});

// ..........................................
// .. Modificación de alineación del texto ..
// Alineación hacia la izquierda
let $alineaIzq = document.getElementById("alineaIzq");
$alineaIzq.addEventListener("click", () => {
	$franja1.style.justifyContent = "flex-start";
	$franja1.style.paddingLeft = "20px";
	$franja3.style.justifyContent = "flex-start";
	$franja3.style.paddingLeft = "20px";
});

// Alineación central
let $alineaCen = document.getElementById("alineaCen");
$alineaCen.addEventListener("click", () => {
	$franja1.style.justifyContent = "center";
	$franja3.style.justifyContent = "center";
});

// Alineación hacia la derecha
let $alineaDer = document.getElementById("alineaDer");
$alineaDer.addEventListener("click", () => {
	$franja1.style.justifyContent = "flex-end";
	$franja1.style.paddingRight = "20px";
	$franja3.style.justifyContent = "flex-end";
	$franja3.style.paddingRight = "20px";
});

// .......................................
// .. Modificación del color del texto ..
let $colorTexto = document.getElementById("colorTexto");
let $labelColorTexto = document.querySelector('label[for="colorTexto"]');
$colorTexto.addEventListener("input", function () {
	$textoArriba.style.color = $colorTexto.value;
	$textoAbajo.style.color = $colorTexto.value;
	$labelColorTexto.textContent = $colorTexto.value.toUpperCase();
});

// ...........................................
// Modificación del color del fondo del texto
let $colorFondoTex = document.getElementById("colorFondoTex");
let $labelColorFondoTex = document.querySelector('label[for="colorFondoTex"]');
let $fondoTexto = document.getElementById("fondoTexto");
$colorFondoTex.addEventListener("input", function () {
	aplicarColorDeFondo();
});

// .........................................
// .. Aplicar el color de fondo elegido
let $franja2Aux = document.getElementById("franja2Aux");
let aplicarColorDeFondo = () => {
	$franja2Aux.style.background = `radial-gradient(circle, #fcfbf2, ${$colorFondoTex.value})`;
	let fondoAuxFranja1;
	let fondoAuxFranja3;
	if ($colorFondoTex.value === "#ffffff") {
		fondoAuxFranja1 =
			"linear-gradient(to bottom, rgb(118, 97, 97)0%, #a3a37a 9%, #FFFFFF 30%, #FFFFFF 50%, #a3a37a 93%, rgb(118, 97, 97) 100%)";
		fondoAuxFranja3 =
			"linear-gradient(to bottom, rgb(118, 97, 97)0%, #a3a37a 7%, #FFFFFF 30%, #FFFFFF 50%, #a3a37a 91%, rgb(118, 97, 97) 100%)";
		$franja2Aux.style.background = "radial-gradient(circle, #fcfbf2, #bebc99)";
	} else {
		fondoAuxFranja1 = `linear-gradient(to bottom, rgb(118, 97, 97)0%, ${$colorFondoTex.value} 9%,  #FFFFFF 50%, ${$colorFondoTex.value} 93%, rgb(118, 97, 97) 100%)`;
		fondoAuxFranja3 = `linear-gradient(to bottom, rgb(118, 97, 97)0%, ${$colorFondoTex.value} 9%,  #FFFFFF 50%, ${$colorFondoTex.value} 93%, rgb(118, 97, 97) 100%)`;
	}
	$labelColorFondoTex.textContent = $colorFondoTex.value.toUpperCase();
	if (!$img) {
		$franja2.style.background = "transparent";
	}
	if (!$opcionFondoTransparente.checked) {
		$franja1.style.background = fondoAuxFranja1;
		$franja3.style.background = fondoAuxFranja3;
	} else {
		$franja1.style.background.color = "transparent";
		$franja1.style.zIndex = "4";
		$franja3.style.background = "transparent";
		$franja3.style.zIndex = "4";
	}
};

// ...............................................1
// .. Aplicación de check fondo transparente
let $opcionFondoTransparente = document.getElementById(
	"opcionFondoTransparente"
);
$opcionFondoTransparente.addEventListener("input", () => {
	revisarTextosYFranjas();
});

// ....................................
// .. Botones para contorno de texto ..

// .......................................
// .. Funcion que aplica contornos
let obtenerElementoTexto = (lugar) => {
	return document.getElementById(`texto${lugar}`);
};

let aplicaContornos = (lugar, grosor, color) => {
	let ubicacion = obtenerElementoTexto(lugar);
	if (grosor !== 0) {
		ubicacion.style.webkitTextStroke = `${grosor}px ${color}`; /* Para navegadores WebKit (Safari, Chrome) */
		ubicacion.style.textStroke = `${grosor}px ${color}`; /* Estándar */
		ubicacion.style.textShadow = `${grosor}px  ${grosor}px ${grosor}px ${color}`;
	} else {
		ubicacion.style.webkitTextStroke = `${color}`;
		ubicacion.style.textStroke = `${color}`;
		ubicacion.style.textShadow = "none";
	}
};

let $opcionContNinguno = document.getElementById("opcionContNinguno");
$opcionContNinguno.addEventListener("click", () => {
	aplicaContornos("Arriba", 0, "transparent");
	aplicaContornos("Abajo", 0, "transparent");
});

let $opcionContClaro = document.getElementById("opcionContClaro");
$opcionContClaro.addEventListener("click", () => {
	aplicaContornos("Arriba", 1, "white");
	aplicaContornos("Abajo", 1, "white");
});

let $opcionContOscuro = document.getElementById("opcionContOscuro");
$opcionContOscuro.addEventListener("click", () => {
	aplicaContornos("Arriba", 1, "black");
	aplicaContornos("Abajo", 1, "black");
});



// ***********************
// ***********************
// Boton modo oscuro / claro
// ***********************
// ***********************
let $botonModo = document.getElementById("botonModo");

let $modoClaOsc = document.getElementById("modoClaOsc");
let banderaModoOscuro = 0;
document.body.classList.add("modoClaro");
$botonModo.addEventListener("click", () => {
	banderaModoOscuro = !banderaModoOscuro;
	if (banderaModoOscuro) {
		document.body.classList.remove("modoClaro");
		document.body.classList.add("modoOscuro");
		$modoClaOsc.textContent = "MODO CLARO";
	} else {
		document.body.classList.remove("modoOscuro");
		document.body.classList.add("modoClaro");
		$modoClaOsc.textContent = "MODO OSCURO";
	}
});



// ***********************
// ***********************
// Boton descarga
// ***********************
// ***********************
let $descargaBoton = document.getElementById("descargaBoton");
let $imagen = document.getElementById("tarjeta");
$descargaBoton.addEventListener("click", () =>
	domtoimage
		.toBlob(document.getElementById("tarjeta"))
		.then((blob) => window.saveAs(blob, "meme.png"))
);

// *************************
// *************************
// Inicialización de diseño
// *************************
// *************************
tamanioPantalla = preguntaTamanioVentana();
if (tamanioPantalla > 699 && tamanioPantalla < 1300) {
	mostrarObjTrans([$panel, $panelTexto, $cierrePanel])
	$nav.style.paddingRight = '240px';
	$contenedorImgText.style.marginRight = `240px`;
	$contenedor.style.width = '90%';
	$contenedor.style.marginInline = `auto`;
	$btnDescarga.style.marginRight = '240px';
	$foot.style.paddingRight = '240px';

	$nav.classList.add('transition_element');
	$contenedorImgText.classList.add('transition_element');
	$btnDescarga.classList.add('transition_element');
	$foot.classList.add('transition_element');
	$contenedor.classList.add('transition_element');

	setTimeout(function () {
		$nav.style.transition = 'padding-right 0.5s ease';
		$contenedorImgText.style.transition = 'margin-right 0.5s ease';
		$btnDescarga.style.transition = 'margin-right 0.5s ease';
		$foot.style.transition = 'padding-right 0.5s ease';
		$contenedor.style.transition = 'width 0.5s ease, margin-inline 0.5s ease';
	}, 100);
} else 
{  if (tamanioPantalla > 1299) {
	cerrarObjTrans([$cierrePanel, $panelImagen]);
	mostrarObjTrans([$panel, $panelTexto])	
	}  else {
		cerrarObjTrans([$cierrePanel, $panelImagen, $panelTexto, $panel]) 
	} 
}

