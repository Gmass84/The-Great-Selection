const ordenes = {
    FORMA: 0,
    INTERIOR: 0,
    EXTERIOR: 0,
    SENAL: 0,
    MENTE: 0,

    JUICIO: 0,
    GAMUSINO: 0,
    ATRACCION: 0,
    REPULSION: 0
};const preguntas = [

    {
        pregunta: "Ante una injusticia, ¿cómo reaccionarías?",
        respuestas: [
            {
                texto: "No hago nada, no es mi problema",
                ordenes: ["REPULSION", "JUICIO"]
            },
            {
                texto: "Intento ayudar en la medida de lo posible de manera calmada",
                ordenes: ["ATRACCION", "MENTE"]
            },
            {
                texto: "Me lanzo sin pensar, dan igual las consecuencias",
                ordenes: ["INTERIOR", "FORMA"]
            },
            {
                texto: "Analizo la situación y actúo según el contexto",
                ordenes: ["EXTERIOR", "SENAL"]
            }
        ]
    },

    {
        pregunta: "Encuentras un pájaro moribundo en la calle",
        respuestas: [
            {
                texto: "Lo llevas a casa",
                ordenes: ["ATRACCION", "GAMUSINO"]
            },
            {
                texto: "Lo llevas al veterinario y pagas mucho dinero",
                ordenes: ["FORMA", "MENTE"]
            },
            {
                texto: "Lo ignoras",
                ordenes: ["SENAL", "REPULSION"]
            },
            {
                texto: "Lo mueves a un lugar seguro",
                ordenes: ["EXTERIOR", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "Tengo un sueño, una meta",
        respuestas: [
            {
                texto: "Lo peleo hasta el final",
                ordenes: ["INTERIOR", "ATRACCION"]
            },
            {
                texto: "Miro y analizo si es realista, y la adapto en consecuencia",
                ordenes: ["MENTE", "EXTERIOR"]
            },
            {
                texto: "Cambio de meta constantemente",
                ordenes: ["SENAL", "REPULSION"]
            },
            {
                texto: "No tengo una meta clara",
                ordenes: ["EXTERIOR"]
            }
        ]
    },

    {
        pregunta: "Tengo una hoja en blanco…",
        respuestas: [
            {
                texto: "La doblo",
                ordenes: ["SENAL", "FORMA"]
            },
            {
                texto: "Pinto",
                ordenes: ["MENTE", "ATRACCION"]
            },
            {
                texto: "La rompo",
                ordenes: ["EXTERIOR", "REPULSION"]
            },
            {
                texto: "La miro",
                ordenes: ["GAMUSINO", "SENAL"]
            }
        ]
    },

    {
        pregunta: "Ves que tus amigos se alejan",
        respuestas: [
            {
                texto: "Son ellos el problema, mejor solo",
                ordenes: ["REPULSION", "EXTERIOR"]
            },
            {
                texto: "Todos crecemos, es normal",
                ordenes: ["FORMA", "MENTE"]
            },
            {
                texto: "Nunca fueron mis amigos realmente",
                ordenes: ["SENAL"]
            },
            {
                texto: "Cambiaré para que no vuelva a pasar",
                ordenes: ["JUICIO"]
            }
        ]
    },

    {
        pregunta: "Las normas están para…",
        respuestas: [
            {
                texto: "Romperse",
                ordenes: ["REPULSION", "FORMA"]
            },
            {
                texto: "Seguirlas",
                ordenes: ["SENAL", "ATRACCION"]
            },
            {
                texto: "Cambiarlas",
                ordenes: ["MENTE", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "Mi cuerpo es…",
        respuestas: [
            {
                texto: "Mío",
                ordenes: ["INTERIOR", "FORMA"]
            },
            {
                texto: "Sagrado",
                ordenes: ["ATRACCION", "MENTE"]
            },
            {
                texto: "Carne",
                ordenes: ["FORMA", "SENAL"]
            },
            {
                texto: "Una herramienta",
                ordenes: ["MENTE", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "Mi mente…",
        respuestas: [
            {
                texto: "Es explosiva",
                ordenes: ["INTERIOR", "EXTERIOR"]
            },
            {
                texto: "Es analítica",
                ordenes: ["MENTE", "FORMA"]
            },
            {
                texto: "Es sensible",
                ordenes: ["SENAL", "GAMUSINO"]
            },
            {
                texto: "Es malpensada",
                ordenes: ["REPULSION", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "¿Con quién te gustaría cambiar de cuerpo durante un día?",
        respuestas: [
            {
                texto: "Tu mejor amigo/a",
                ordenes: ["INTERIOR", "GAMUSINO"]
            },
            {
                texto: "Un famoso rico",
                ordenes: ["REPULSION", "JUICIO"]
            },
            {
                texto: "Un vagabundo",
                ordenes: ["ATRACCION", "SENAL"]
            },
            {
                texto: "Un animal",
                ordenes: ["EXTERIOR", "FORMA"]
            }
        ]
    },

    {
        pregunta: "Lo pierdes absolutamente todo",
        respuestas: [
            {
                texto: "Sigo hacia delante",
                ordenes: ["INTERIOR", "ATRACCION"]
            },
            {
                texto: "Me rindo",
                ordenes: ["REPULSION", "SENAL"]
            },
            {
                texto: "Busco ayuda",
                ordenes: ["MENTE", "EXTERIOR"]
            },
            {
                texto: "Cambio de rumbo de manera radical",
                ordenes: ["FORMA", "GAMUSINO"]
            }
        ]
    },
        {
        pregunta: "Los vicios",
        respuestas: [
            {
                texto: "Son naturales",
                ordenes: ["FORMA", "INTERIOR"]
            },
            {
                texto: "Son asquerosos",
                ordenes: ["REPULSION", "JUICIO", "SENAL"]
            },
            {
                texto: "Son necesarios",
                ordenes: ["ATRACCION", "GAMUSINO", "MENTE"]
            }
        ]
    },

    {
        pregunta: "Un monstruo, es un…",
        respuestas: [
            {
                texto: "Enemigo",
                ordenes: ["REPULSION", "EXTERIOR"]
            },
            {
                texto: "Aliado",
                ordenes: ["GAMUSINO", "ATRACCION"]
            },
            {
                texto: "Víctima",
                ordenes: ["MENTE", "SENAL"]
            },
            {
                texto: "Neutral",
                ordenes: ["JUICIO", "FORMA"]
            }
        ]
    },

    {
        pregunta: "67",
        respuestas: [
            {
                texto: "XD",
                ordenes: ["INTERIOR"]
            },
            {
                texto: "WTF",
                ordenes: ["FORMA", "EXTERIOR"]
            },
            {
                texto: "LOL",
                ordenes: ["SENAL", "MENTE"]
            },
            {
                texto: "???",
                ordenes: ["MENTE", "REPULSION", "ATRACCION"]
            }
        ]
    },

    {
        pregunta: "La verdad es…",
        respuestas: [
            {
                texto: "Subjetiva",
                ordenes: ["JUICIO", "GAMUSINO", "ATRACCION", "REPULSION"]
            },
            {
                texto: "Objetiva",
                ordenes: ["INTERIOR", "FORMA", "EXTERIOR", "SENAL", "MENTE"]
            }
        ]
    },

    {
        pregunta: "Todos somos…",
        respuestas: [
            {
                texto: "Iguales",
                ordenes: ["FORMA", "INTERIOR"]
            },
            {
                texto: "Diferentes",
                ordenes: ["EXTERIOR", "MENTE"]
            }
        ]
    },

    {
        pregunta: "El futuro…",
        respuestas: [
            {
                texto: "Ya está escrito",
                ordenes: ["JUICIO", "ATRACCION"]
            },
            {
                texto: "Es aleatorio",
                ordenes: ["FORMA", "GAMUSINO"]
            },
            {
                texto: "Depende de otros",
                ordenes: ["EXTERIOR", "SENAL"]
            },
            {
                texto: "Depende de mí",
                ordenes: ["INTERIOR", "MENTE"]
            }
        ]
    },

    {
        pregunta: "Si una película me parece mala…",
        respuestas: [
            {
                texto: "Es objetivamente mala",
                ordenes: ["REPULSION"]
            },
            {
                texto: "Solo es mi opinión",
                ordenes: ["MENTE", "FORMA"]
            },
            {
                texto: "No la he entendido bien",
                ordenes: ["SENAL", "INTERIOR"]
            },
            {
                texto: "Intento buscarle sentido para que me guste, aunque no siempre lo consigo",
                ordenes: ["ATRACCION", "EXTERIOR"]
            }
        ]
    },

    {
        pregunta: "De repente, veo un defecto de menor importancia en mi amigo…",
        respuestas: [
            {
                texto: "Le aviso discretamente",
                ordenes: ["ATRACCION", "MENTE"]
            },
            {
                texto: "Lo señalo con un tono burlesco pero amigable",
                ordenes: ["INTERIOR", "FORMA"]
            },
            {
                texto: "No le digo nada, no quiero que se sienta incómodo",
                ordenes: ["EXTERIOR", "SENAL"]
            },
            {
                texto: "Sinceramente, ¿tenía algo? No me di cuenta…",
                ordenes: ["INTERIOR"]
            }
        ]
    },

    {
        pregunta: "Si no necesitáramos dormir, dedicarías tu tiempo a…",
        respuestas: [
            {
                texto: "Terminar de disfrutar de mis pasatiempos",
                ordenes: ["INTERIOR", "EXTERIOR"]
            },
            {
                texto: "Intentaría aprender una nueva habilidad",
                ordenes: ["FORMA", "MENTE"]
            },
            {
                texto: "Buscaría trabajar en algo para ganar más dinero aún",
                ordenes: ["ATRACCION", "GAMUSINO"]
            },
            {
                texto: "Inventar el acto de “dormir” porque vivo cansado",
                ordenes: ["GAMUSINO", "SENAL"]
            }
        ]
    },

    {
        pregunta: "Si tuvieras un libro donde está escrito tu futuro al detalle…",
        respuestas: [
            {
                texto: "Lo leería",
                ordenes: ["JUICIO", "SENAL"]
            },
            {
                texto: "Lo ignoraría, pero no lo tiraría",
                ordenes: ["MENTE", "EXTERIOR"]
            },
            {
                texto: "Se lo daría a otra persona",
                ordenes: ["GAMUSINO"]
            },
            {
                texto: "Lo destruiría sin leerlo",
                ordenes: ["INTERIOR", "FORMA"]
            }
        ]
    },

    {
        pregunta: "¿Qué objeto material que no fuera comida comerías?",
        respuestas: [
            {
                texto: "Cristal",
                ordenes: ["REPULSION", "SENAL"]
            },
            {
                texto: "Rocas",
                ordenes: ["GAMUSINO", "JUICIO"]
            },
            {
                texto: "Madera",
                ordenes: ["FORMA", "EXTERIOR"]
            },
            {
                texto: "Carbón",
                ordenes: ["INTERIOR", "ATRACCION"]
            }
        ]
    },

    {
        pregunta: "¿En qué objeto inanimado te convertirías para darle vida?",
        respuestas: [
            {
                texto: "Una figura de acción",
                ordenes: ["FORMA", "INTERIOR"]
            },
            {
                texto: "Un ladrillo",
                ordenes: ["EXTERIOR", "SENAL"]
            },
            {
                texto: "Una nube",
                ordenes: ["MENTE", "ATRACCION"]
            }
        ]
    },

    {
        pregunta: "Si pudieras cambiarte el color de piel, ¿de qué color sería?",
        respuestas: [
            {
                texto: "Colores fantasía",
                ordenes: ["INTERIOR", "GAMUSINO", "ATRACCION"]
            },
            {
                texto: "Blanco puro",
                ordenes: ["JUICIO"]
            },
            {
                texto: "Transparente, incoloro",
                ordenes: ["FORMA"]
            },
            {
                texto: "No quiero cambiar de color",
                ordenes: ["REPULSION", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "Si te llegan a mentir…",
        respuestas: [
            {
                texto: "Le reprochas la mentira",
                ordenes: ["ATRACCION", "REPULSION"]
            },
            {
                texto: "Lo dejas pasar, pero lo tienes en cuenta",
                ordenes: ["MENTE", "JUICIO"]
            },
            {
                texto: "Te lo guardas y le devuelves la mentira",
                ordenes: ["INTERIOR", "JUICIO"]
            },
            {
                texto: "Le cuentas a todos que es un mentiroso",
                ordenes: ["REPULSION", "GAMUSINO"]
            }
        ]
    },

    {
        pregunta: "Puedes tener un compañero de aventura que sea…",
        respuestas: [
            {
                texto: "Extremadamente leal pero aburrido",
                ordenes: ["REPULSION", "ATRACCION"]
            },
            {
                texto: "Divertido pero poco fiable",
                ordenes: ["FORMA", "GAMUSINO"]
            },
            {
                texto: "Brillante pero arrogante",
                ordenes: ["MENTE", "SENAL"]
            },
            {
                texto: "Amable pero cobarde",
                ordenes: ["JUICIO", "ATRACCION"]
            },
            {
                texto: "Poderoso pero moralmente cuestionable",
                ordenes: ["REPULSION", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "Al morir, puedes descubrir una sola verdad absoluta de tu propia vida o de los acontecimientos que nunca supiste que sucedieron alrededor tuyo",
        respuestas: [
            {
                texto: "Cuántas veces has estado al borde de morir",
                ordenes: ["FORMA", "SENAL"]
            },
            {
                texto: "Existen los aliens",
                ordenes: ["EXTERIOR", "ATRACCION"]
            },
            {
                texto: "Todas las veces que alguien ha pensado en ti",
                ordenes: ["ATRACCION", "MENTE"]
            },
            {
                texto: "¿Fue realmente el 9/11 un trabajo interno?",
                ordenes: ["INTERIOR", "REPULSION"]
            }
        ]
    },

    {
        pregunta: "En una película o novela, te gustaría ser…",
        respuestas: [
            {
                texto: "Protagonista",
                ordenes: ["EXTERIOR", "ATRACCION"]
            },
            {
                texto: "Antagonista",
                ordenes: ["JUICIO", "REPULSION"]
            },
            {
                texto: "Alivio cómico",
                ordenes: ["SENAL", "ATRACCION"]
            },
            {
                texto: "Aura farmer (muere de los primeros)",
                ordenes: ["INTERIOR", "ATRACCION"]
            }
        ]
    },

    {
        pregunta: "Dios te ofrece poder suficiente para eliminar una injusticia aleatoria del mundo, pero no te permite saber qué otras consecuencias van a suceder (y sucederán)",
        respuestas: [
            {
                texto: "Duplícalo y dáselo al siguiente",
                ordenes: ["EXTERIOR", "ATRACCION"]
            },
            {
                texto: "Le doy sin pensarlo",
                ordenes: ["INTERIOR", "REPULSION"]
            }
        ]
    },

    {
        pregunta: "Si existieran los poderes…",
        respuestas: [
            {
                texto: "Ojalá que sí",
                ordenes: ["INTERIOR", "ATRACCION"]
            },
            {
                texto: "En este mundo lo último que nos hace falta es gente mágica",
                ordenes: ["REPULSION"]
            },
            {
                texto: "Diría que sí, pero me dan miedo las consecuencias",
                ordenes: ["EXTERIOR", "JUICIO"]
            }
        ]
    },

    {
        pregunta: "¿Eres feliz?",
        respuestas: [
            {
                texto: "Sí",
                ordenes: ["INTERIOR", "EXTERIOR", "ATRACCION"]
            },
            {
                texto: "No",
                ordenes: ["REPULSION", "JUICIO"]
            }
        ]
    }

];
let preguntaActual = 0;
let introPaso = 0;

const elementoPregunta = document.getElementById("question");
const elementoRespuestas = document.getElementById("answers");
const elementoProgreso = document.getElementById("progress");

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    elementoProgreso.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

    elementoPregunta.textContent = pregunta.pregunta;

    elementoRespuestas.innerHTML = "";

    pregunta.respuestas.forEach((respuesta) => {

        const boton = document.createElement("button");

        boton.textContent = respuesta.texto;

        boton.classList.add("answer");

        boton.addEventListener("click", () => {
            
console.log("HE PULSADO UNA RESPUESTA");
    console.log("RESPUESTA:", respuesta);

    responder(respuesta);

        });

        elementoRespuestas.appendChild(boton);

    });
}
 

function responder(respuesta) {

    console.log("RESPUESTA PULSADA");

    respuesta.ordenes.forEach((orden) => {
        ordenes[orden] += 1;
    });


    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function calcularResultado() {

    const resultado = Object.entries(ordenes);

    resultado.sort((a, b) => b[1] - a[1]);

    return resultado;
}
function obtenerOrdenesFinales() {

    const resultado = calcularResultado();

    const secundarias = [
        "JUICIO",
        "GAMUSINO",
        "ATRACCION",
        "REPULSION"
    ];

    for (let i = 0; i < resultado.length; i++) {

        for (let j = i + 1; j < resultado.length; j++) {

            const orden1 = resultado[i][0];
            const orden2 = resultado[j][0];

            const sonSecundarias =
                secundarias.includes(orden1) &&
                secundarias.includes(orden2);

            if (!sonSecundarias) {
                return [orden1, orden2];
            }
        }
    }
}


const descripcionOrdenes = {

    INTERIOR: {
        nombre: "Interior",
        descripcion: "Capacidad de llevar al límite cualquier energía producida por el cuerpo humano. Permite intensificar procesos y funciones que ya están ocurriendo dentro del organismo, como la fuerza muscular, los latidos del corazón, la respiración, el metabolismo, la temperatura corporal o la producción de sonido. No modifica directamente la estructura del cuerpo, sino la intensidad con la que este funciona y produce energía.",
        representa: "El impulso, la voluntad y la identidad."
    },

    FORMA: {
        nombre: "Forma",
        descripcion: "Incremento de la firmeza y organización de toda estructura corporal humana. Permite modificar y reforzar la composición física del organismo, haciendo que huesos, músculos, tejidos, piel y órganos sean más resistentes, estables, compactos o estén mejor organizados. También puede favorecer la reconstrucción y recuperación de estructuras dañadas.",
        representa: "La acción, la materialidad y la transformación."
    },

    EXTERIOR: {
        nombre: "Exterior",
        descripcion: "Aumento del flujo e intensidad en cualquier variable que ya esté ocurriendo en la naturaleza. Permite intensificar fenómenos externos como el movimiento del agua, el viento, el calor, una llama, una corriente eléctrica, el crecimiento de una planta o cualquier otro proceso natural que ya se encuentre activo. No crea el fenómeno desde cero, sino que aumenta su intensidad o velocidad.",
        representa: "La adaptación, el contexto y el mundo exterior."
    },

    SENAL: {
        nombre: "Señal",
        descripcion: "Mejora absoluta de cualquier terminación nerviosa y sistema conductor de información. Permite aumentar la capacidad de recibir, transmitir y procesar señales dentro del organismo, mejorando sentidos, reflejos, coordinación, equilibrio, percepción y comunicación nerviosa. Su especialidad no es producir más fuerza, sino hacer que la información llegue con mayor precisión, rapidez y calidad.",
        representa: "La percepción, el significado y la interpretación."
    },

    MENTE: {
        nombre: "Mente",
        descripcion: "Aumento de cualquier producto generado por la actividad mental. Permite intensificar pensamientos, recuerdos, emociones, imaginación, concentración, razonamiento, asociaciones, decisiones y otras funciones producidas por la mente. No genera conocimientos de la nada, sino que lleva más lejos aquello que la mente ya está produciendo o procesando.",
        representa: "El análisis y el razonamiento."
    },

    JUICIO: {
        nombre: "Juicio",
        descripcion: "Aparición de consciencia en cualquier ser vivo. Permite despertar, desarrollar o intensificar la consciencia de un ser vivo, haciendo que pueda adquirir una percepción propia de sí mismo y de su entorno. Es más común que la consciencia aparezca de manera espontánea en seres vivos, pero quienes poseen esta Orden pueden provocar ese despertar de forma deliberada. En casos excepcionales, también pueden dotar de vida o consciencia a objetos inanimados.",
        representa: "La valoración, el criterio y la decisión."
    },

    GAMUSINO: {
        nombre: "Gamusino",
        descripcion: "Manifestación física y palpable de cualquier producto mental, ya sean ideas, emociones, deseos o conceptos imaginados. Permite que un aspecto de la vida interior del usuario alcance tal intensidad que pueda manifestarse temporalmente en el plano físico, tomando una forma determinada y pudiendo actuar de acuerdo con sus órdenes. Su naturaleza está ligada a aquello que puede ser imaginado, concebido o deseado, incluso cuando resulta extraño o imposible.",
        representa: "La imaginación, la rareza y la fantasía."
    },

    ATRACCION: {
        nombre: "Atracción",
        descripcion: "Control e intensificación de la energía constructiva del universo. Permite comprender y favorecer los procesos relacionados con la creación, la unión, el crecimiento y la formación de nuevas estructuras o relaciones. Quienes poseen esta Orden tienen una afinidad natural con las fuerzas que conectan y hacen prosperar las cosas, pudiendo intensificar procesos constructivos y reforzar vínculos entre diferentes elementos.",
        representa: "La conexión, la empatía y el vínculo."
    },

    REPULSION: {
        nombre: "Repulsión",
        descripcion: "Control e intensificación de la energía destructiva del universo. Es el contrapunto de Atracción y permite comprender y favorecer los procesos relacionados con la ruptura, la separación, el deterioro y la destrucción. Quienes poseen esta Orden pueden intensificar fuerzas que deshacen estructuras o rompen vínculos, llevando procesos destructivos que ya existen hacia estados más extremos.",
        representa: "El rechazo, la oposición y la separación."
    }

};


function mostrarResultado() {

    const resultado = obtenerOrdenesFinales();

    const orden1 = resultado[0];
    const orden2 = resultado[1];

    document.getElementById("test").classList.add("hidden");

    document.getElementById("result").classList.remove("hidden");

    const contenedor = document.getElementById("result-orders");

    contenedor.innerHTML = `

        <div class="orden-resultado">

            <h3>${descripcionOrdenes[orden1].nombre}</h3>

            <p>
                ${descripcionOrdenes[orden1].descripcion}
            </p>

            <strong>
                Representa: ${descripcionOrdenes[orden1].representa}
            </strong>

        </div>

        <div class="orden-resultado">

            <h3>${descripcionOrdenes[orden2].nombre}</h3>

            <p>
                ${descripcionOrdenes[orden2].descripcion}
            </p>

            <strong>
                Representa: ${descripcionOrdenes[orden2].representa}
            </strong>

        </div>

    `;
}
const portada = document.getElementById("cover");
const introduccion = document.getElementById("intro");
const botonComenzar = document.getElementById("start-button");

const introImage = document.getElementById("intro-image");
const introText = document.getElementById("intro-text");
const introButton = document.getElementById("intro-button");


function cambiarImagen(nuevaImagen) {

    introduccion.classList.add("fade");

    setTimeout(() => {
        introImage.src = nuevaImagen;
    }, 700);

    setTimeout(() => {
        introduccion.classList.remove("fade");
    }, 1400);

}

console.log("INTRO BUTTON:", introButton);

botonComenzar.addEventListener("click", () => {

    const cortina = document.createElement("div");

    cortina.id = "screen-transition";

    document.body.appendChild(cortina);

    requestAnimationFrame(() => {
        cortina.classList.add("active");
    });

    setTimeout(() => {

        portada.classList.add("hidden");
        introduccion.classList.remove("hidden");

    }, 700);

    setTimeout(() => {

        cortina.remove();

    }, 1800);

});

introButton.addEventListener("click", () => {
console.log("BOTÓN INTRO PULSADO");
    introPaso++;

    if (introPaso === 1) {

        cambiarImagen("img/intro2.png");

        introText.textContent = "huh…!";

    }

    else if (introPaso === 2) {

        introText.textContent =
            "Anda, al fin vienes. Lamento haberte traido hasta aquí";

    }

    else if (introPaso === 3) {

        introText.textContent =
            "Mi nombre es Laffite, uno de los muchos encargados en organizar y clasificar a las personas para este “trabajo”";

    }

    else if (introPaso === 4) {

        introText.textContent =
            "Como bien sabrás, o no. Estás en La Gran Selección, y gracias a mis habilidades especiales podré decirte que poderes posees.";

    }

    else if (introPaso === 5) {

        cambiarImagen("img/intro3.png");

        introText.textContent =
            "Antes que nada, quiero que sepas que este trabajo es muy mal agradecido, pero por obvias razones no puedes trabajar en otra cosa que no sea esto…";

    }

    else if (introPaso === 6) {

        introText.textContent =
            "Así que, en nombre de E.R.A.S.E, que comience el cuestionario!";

    }

else if (introPaso === 7) {

    const test = document.getElementById("test");

    introduccion.classList.add("fade");

    setTimeout(() => {

        introduccion.classList.add("hidden");
        test.classList.remove("hidden");

        mostrarPregunta();

    }, 700);

}
  
});