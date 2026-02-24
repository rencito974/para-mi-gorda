function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 800);

for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}

const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    customCursor.style.transform = 'scale(1.3)';
});

document.addEventListener('mouseup', () => {
    customCursor.style.transform = 'scale(1)';
});

let lastSparkle = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkle > 100) {
        createSparkle(e.clientX, e.clientY);
        lastSparkle = now;
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function handleYes() {
    const response = document.getElementById('response');
    const noBtn = document.getElementById('noBtn');
    
    response.innerHTML = '¡Sabía que dirías que sí! 💕';
    response.classList.add('celebration');
    
    // Hide No button
    noBtn.style.display = 'none';
    
    // Launch fireworks!
    launchFireworks();
    
    // Create heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
}

let moveCount = 0;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.querySelector('.btn-yes');
    
    moveCount++;
    
    // Make Yes button grow MASSIVE to fill the entire section
    const newScale = 1 + (moveCount * 0.3);
    yesBtn.style.transform = `scale(${newScale})`;
    yesBtn.style.zIndex = '10';
    
    // Make No button shrink to nearly invisible but stay in place
    const shrinkScale = Math.max(0.1, 1 - (moveCount * 0.15));
    noBtn.style.transform = `scale(${shrinkScale})`;
    noBtn.style.opacity = Math.max(0.05, 1 - (moveCount * 0.15));
    
    const messages = [
        '¿Estás segura? 🥺',
        'Dale otra oportunidad... 💔',
        'Piénsalo bien... 💭',
        '¡Vamos, di que sí! 💕',
        'No me hagas esto... 😢',
        '¡El botón sí está creciendo! ✨',
        'Por favor... 🙏',
        '¿De verdad quieres decir no? 💔',
        '¡Mira cómo crece el Sí! 👀',
        'Sabes que quieres decir sí... 😏',
        '¡No seas así! 😭',
        '¡El Sí te está esperando! ⚡',
        'Mi corazón... 💔😢',
        '¿Por qué me haces esto? 🥹',
        'El No se está yendo... 👋',
        '¡Solo di que Sí! 💕',
        '¡El Sí está cada vez más grande! 😍',
        'El No casi no se ve... 👻'
    ];
    
    const response = document.getElementById('response');
    response.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    
    // Create mini hearts when button moves
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function checkSecret() {
    const answer = document.getElementById('secretAnswer').value.toLowerCase().trim();
    const secretMessage = document.getElementById('secretMessage');
    const hint = document.getElementById('decoderHint');
    
    if (answer === 'luicita') {
        secretMessage.classList.add('revealed');
        hint.innerHTML = '✨ ¡Correcto! Mensaje desbloqueado ✨';
        hint.style.color = '#FF1493';
        
        // Launch confetti!
        launchConfetti();
        
        // Create heart explosion
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
    } else {
        hint.innerHTML = '❌ Incorrecto... intenta de nuevo';
        hint.style.color = '#FF69B4';
        
        // Shake the input
        const input = document.getElementById('secretAnswer');
        input.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }
}

document.getElementById('secretAnswer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkSecret();
    }
});

function launchFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.classList.add('active');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fireworks = [];
    const particles = [];
    
    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.5;
            this.speed = 3;
            this.brightness = Math.random() * 50 + 50;
        }
        
        update() {
            this.y -= this.speed;
            return this.y > this.targetY;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(330, 100%, ${this.brightness}%)`;
            ctx.fill();
        }
    }
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speed = Math.random() * 5 + 2;
            this.angle = Math.random() * Math.PI * 2;
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.01;
            this.hue = Math.random() * 60 + 300; // Pink/magenta range
            this.brightness = Math.random() * 30 + 70;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.1; // gravity
            this.alpha -= this.decay;
            return this.alpha > 0;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
            ctx.fill();
            ctx.restore();
        }
    }
    
    function createParticles(x, y) {
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(x, y));
        }
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw fireworks
        for (let i = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].update()) {
                fireworks[i].draw();
            } else {
                createParticles(fireworks[i].x, fireworks[i].y);
                fireworks.splice(i, 1);
            }
        }
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].update()) {
                particles[i].draw();
            } else {
                particles.splice(i, 1);
            }
        }
        
        if (fireworks.length > 0 || particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.classList.remove('active');
        }
    }
    
    // Launch multiple fireworks
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            fireworks.push(new Firework());
        }, i * 200);
    }
    
    animate();
}

function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.classList.add('active');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#FF1493', '#FF69B4', '#FFB6D9', '#FFFFFF', '#FFC0CB'];
    
    class Confetto {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            return this.y < canvas.height;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    // Create confetti
    for (let i = 0; i < 150; i++) {
        confetti.push(new Confetto());
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = confetti.length - 1; i >= 0; i--) {
            if (confetti[i].update()) {
                confetti[i].draw();
            } else {
                confetti.splice(i, 1);
            }
        }
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            canvas.classList.remove('active');
        }
    }
    
    animateConfetti();
}

function generateLoveLetter() {
    const loveLetter = document.getElementById('loveLetter');
    
    const letters = [
        "Mi gorda, cada día con vos es un regalo. Tu sonrisa ilumina mi mundo, y tu risa es la melodía más hermosa que conozco. Eres mi persona favorita, mi mejor amiga, y la razón por la que creo en el amor. Te amo más de lo que las palabras pueden expresar. 💕",
        
        "Princesa, desde el momento en que entraste en mi vida, todo cambio. Vos sos la razon por la que me despierto feliz cada mañana. Eres mi inspiración, mi paz, y mi hogar. No importa lo que la vida nos traiga, quiero enfrentarlo todo a tu lado. Eres mi todo. ❤️",
        
        "Mi reina, cuando te miro, veo mi futuro. Veo risas, aventuras, y un amor que nunca termina. Gracias por ser vos, por amarme en mis días buenos y malos, y por hacer que cada momento sea especial. Eres la mejor cosa que me ha pasado. Te amo infinitamente. 💖",
        
        "Amor de mi vida, sos mas de lo que alguna vez soñé. Tu amor me hace mejor persona cada día. Contigo he encontrado mi lugar en el mundo. Gracias por elegirme, por amarme, y por ser mi compañera en esta hermosa aventura. Mi corazón es tuyo, hoy y siempre. 💝"
    ];
    
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    loveLetter.innerHTML = randomLetter;
    loveLetter.classList.add('show');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
}