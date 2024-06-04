// Tamaño del lienzo
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del lienzo al tamaño deseado
canvas.width = 1020; // Cambiar este valor al ancho deseado
canvas.height = 500; // Cambiar este valor al alto deseado

// Caracteres que se mostrarán en el efecto Matrix
const matrixChars = '01';
const charsArray = matrixChars.split('');

// Tamaño y distancia entre los caracteres (ajustado para la nueva ventana)
const fontSize = 8; // Reducir el tamaño de la fuente
const columns = canvas.width / fontSize;
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Función para dibujar los caracteres
function draw() {
    // Fondo negro translúcido
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Caracteres verdes
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px arial';

    // Iterar sobre cada columna
    for (let i = 0; i < drops.length; i++) {
        const text = charsArray[Math.floor(Math.random() * charsArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar la gota y hacerla caer nuevamente al llegar al fondo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementar la posición de la gota
        drops[i]++;
    }
}

// Animar el efecto Matrix
function matrixAnimation() {
    // Llamar a la función de dibujo y programar la próxima llamada
    draw();
    requestAnimationFrame(matrixAnimation);
}

// Iniciar la animación al cargar la página
matrixAnimation();
