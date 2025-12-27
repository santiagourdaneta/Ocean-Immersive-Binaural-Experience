# 🌊 Océano Inmersivo - Experiencia 3D Binaural

**Océano Inmersivo** es una plataforma web diseñada para la relajación profunda mediante la combinación de audio espacial, telemetría en tiempo real y una interfaz visual reactiva. El proyecto utiliza principios de **UX Sensorial** para guiar al usuario a un estado de calma total.

## ✨ Características Principales

* **Audio Binaural con Fade-in:** Sistema de sonido envolvente que inicia de forma gradual para evitar sobresaltos.
* **Interfaz Reactiva:** El fondo marino se oscurece dinámicamente al iniciar la reproducción para centrar la atención en el sonido y los mensajes.
* **Poesía 3D Emergente:** Frases en color **Cian Brillante** que emergen de las olas con un efecto de profundidad reversible (Ida y Vuelta).
* **Sistema de Burbujas Bioluminiscentes:** Partículas generadas por JS que simulan un entorno subacuático vivo.
* **Safe Zone Design:** Jerarquía visual optimizada para evitar el solapamiento de elementos mediante capas de profundidad (`z-index`).
* **Telemetría Sentry:** Monitoreo de errores y rendimiento en tiempo real integrado.

## 🛠️ Tecnologías Utilizadas

* **HTML5 & CSS3:** Animaciones por GPU (`keyframes`, `transforms`) para máxima fluidez.
* **Vanilla JavaScript:** Lógica ligera para el control de audio, burbujas y frases aleatorias.
* **Sentry SDK:** Observabilidad y reporte de errores en producción.

## 🚀 Instalación y Uso

1.  Clona este repositorio o descarga los archivos:
    ```bash
    git clone [https://github.com/santiagourdaneta/Ocean-Immersive-Binaural-Experience](https://github.com/santiagourdaneta/Ocean-Immersive-Binaural-Experience)
    ```
2.  Asegúrate de tener el archivo de audio `sound.mp3` y la imagen de fondo `mar-min.jpg` en la carpeta raíz.
3.  Abre `index.html` en cualquier navegador.

## 📂 Estructura del Proyecto

* `index.html`: Estructura semántica y capas de profundidad.
* `style.css`: Estilos visuales, efectos de resplandor cian y animaciones 3D.
* `app.js`: Motor de la experiencia, lógica de audio y generador de partículas.

## 🧠 Filosofía de Diseño (UX)

Este proyecto soluciona el problema del solapamiento visual mediante la **Regla de los Tercios**:

* **Tercios Superiores:** Reservados para la narrativa visual (frases emergentes).
* **Tercio Inferior:** Reservado para la interacción (Botón de Inmersión).
* **Colorimetría:** Uso exclusivo de **Cian (#00fbff)** sobre fondos oscuros para garantizar accesibilidad y contraste según normas WCAG.

---