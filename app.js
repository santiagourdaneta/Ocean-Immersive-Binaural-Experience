/* global Sentry */

// --- 1. CONFIGURACIÓN DE FRASES Y POESÍA ---
var frasesOceanicas = [
    "El eco azul resuena en tu interior.",
    "Las olas cuentan historias milenarias.",
    "Respira la sal, siente la vida.",
    "Un universo líquido se despliega.",
    "Déjate llevar por la corriente serena.",
    "El misterio de las profundidades te llama.",
    "Cada ola, un latido del planeta.",
    "Donde el cielo abraza el abismo.",
    "La calma de lo inmenso te envuelve.",
    "Sinfonía salada para el alma.",
    "Libre como el mar, profundo como el océano.",
    "El horizonte es solo el principio.",
    "Sumérgete en la paz infinita.",
    "Las aguas guardan secretos ancestrales.",
    "Un lienzo azul sin fin, solo para ti."
];

// Función que define un mensaje según la hora del día
window.obtenerPoesia = function() {
    var ahora = new Date().getHours();
    var mensaje = "";
    if (ahora >= 6 && ahora < 12) mensaje = "La aurora platea el abismo líquido.";
    else if (ahora >= 12 && ahora < 19) mensaje = "El sol danza sobre el cristal salino.";
    else mensaje = "La luna guarda los secretos del abismo.";
    
    var elPoesia = document.getElementById('poesia');
    if (elPoesia) elPoesia.innerText = mensaje;
};

// --- 2. LÓGICA DE LAS FRASES 3D ---
window.mostrarFraseEmergente = function() {
    var contenedor = document.getElementById('frases-emergentes');
    var audio = document.getElementById('sound');

    // Solo mostramos frases si el audio NO está pausado
    if (!contenedor || !audio || audio.paused) return;
    
    contenedor.innerHTML = ''; // Limpiamos frase anterior
    var fraseAleatoria = frasesOceanicas[Math.floor(Math.random() * frasesOceanicas.length)];
    
    var el = document.createElement('p');
    el.className = 'frase-3d';
    el.innerText = fraseAleatoria;
    
    contenedor.appendChild(el);
};

// --- 3. SISTEMA DE BURBUJAS BIOLUMINISCENTES ---
var intervaloBurbujas;

window.crearBurbuja = function() {
    var b = document.createElement('div');
    b.className = 'burbuja';
    var size = Math.random() * 15 + 5 + 'px';
    b.style.width = size; 
    b.style.height = size;
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDuration = Math.random() * 10 + 10 + 's';
    
    document.body.appendChild(b);
    
    // Limpieza de memoria: eliminar burbuja al terminar
    setTimeout(function() { b.remove(); }, 20000);
};

// --- 4. CONTROL DE INMERSIÓN (AUDIO Y EFECTOS) ---
window.tocar = function() {
    var audio = document.getElementById('sound');
    var btn = document.querySelector('.btn-immerse');
    var bg = document.getElementById('ocean-bg');

    if (audio.paused) {
        // Iniciar Inmersión
        btn.classList.remove('btn-pulse');
        audio.volume = 0;
        audio.play();
        
        // Fade In de volumen
        var fIn = setInterval(function() {
            if (audio.volume < 0.9) audio.volume += 0.1;
            else { audio.volume = 1; clearInterval(fIn); }
        }, 200);

        btn.innerText = "PAUSAR INMERSIÓN";
        bg.classList.add('bg-dark');
        
        // Iniciar efectos visuales
        if (!intervaloBurbujas) {
            intervaloBurbujas = setInterval(window.crearBurbuja, 2000);
        }
        // Lanzar primera frase inmediatamente
        window.mostrarFraseEmergente();
    } else {
        // Pausar Inmersión
        audio.pause();
        btn.innerText = "REANUDAR INMERSIÓN";
        bg.classList.remove('bg-dark');
        
        clearInterval(intervaloBurbujas);
        intervaloBurbujas = null;
        
        // Limpiar frases al pausar
        var contenedor = document.getElementById('frases-emergentes');
        if (contenedor) contenedor.innerHTML = '';
    }
};

// --- 5. INICIALIZACIÓN AL CARGAR LA PÁGINA ---
window.onload = function() {
    // 1. Cargar poesía inicial
    window.obtenerPoesia();

    // 2. Configurar el ciclo de frases (cada 15 segundos)
    setInterval(window.mostrarFraseEmergente, 15000);

    // 3. Sistema de Pre-loader
    var audio = document.getElementById('sound');
    var bar = document.getElementById('progress-bar');
    
    if (audio && bar) {
        audio.addEventListener('progress', function() {
            if (audio.duration > 0) {
                var p = (audio.buffered.end(0) / audio.duration) * 100;
                bar.style.width = p + '%';
            }
        });

        audio.oncanplaythrough = function() {
            bar.style.width = '100%';
            setTimeout(function() { 
                var loader = document.getElementById('loader-wrapper');
                if (loader) loader.classList.add('loader-hidden'); 
            }, 500);
        };
    }
};