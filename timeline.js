// ============================================================
//  CONFIGURACIÓN — Todo se edita acá en el código
// ============================================================
const CONFIG = {
    // Fecha en que empezaron a salir (YYYY-MM-DD)
    START_DATE: '2026-03-14',

    // Horas hablando (cambiá el número cuando quieras)
    HOURS_TALKING: 3+0.5+2+1.5,

    // ID del video de YouTube para la música
    YOUTUBE_VIDEO_ID: 'pKtLNYNWbBw',

    // Cumpleaños (MM-DD)
    HER_BIRTHDAY: '08-24',
    HIS_BIRTHDAY: '02-27',
};

// ============================================================
//  MOMENTOS — Agregá, editá o borrá entradas acá
//
//  Tipos disponibles:
//    'visit'     → 💑 Nos vimos
//    'letter'    → 💌 Carta de amor
//    'call'      → 📞 Llamada especial
//    'date'      → 🌹 Cita especial
//    'loversday' → 💕 Día de los enamorado 
//    'gift'      → 🎁 Regalo
//    'milestone' → ⭐ Hito importante
//    'other'     → ✨ Momento especial
//
//  Formato de cada entrada:
//  {
//    date:   'YYYY-MM-DD',
//    type:   'visit',
//    title:  'Título',
//    desc:   'Descripción (opcional)',
//    photos: ['Images/foto1.jpg', 'Images/foto2.jpg'],   ← opcional
//  },
//
//  • 1-3 fotos/videos  → se muestran en fila, click abre el archivo grande
//  • 4+ fotos/videos   → las primeras 3 se muestran con "+N más" en la última,
//                        click en el grupo abre la galería completa
//
//  Podés mezclar fotos y videos en el mismo array:
//  photos: ['Images/foto.jpg', 'Images/video.mp4', 'Images/clip.mov']
//  Extensiones de video soportadas: mp4, mov, webm, ogg, mkv, m4v
// ============================================================
const MOMENTS = [
    // ── Ejemplos — borrá estos y poné los tuyos ──────────────
    {
        date:  '2026-02-14',
        type:  'loversday',
        title: 'San Valentín 2026',
        desc:  'El día que empezó todo.',
        photos: [
            '/Images/14-02-2026/Img1.HEIC',
            '/Images/14-02-2026/Img2.HEIC',
            '/Images/14-02-2026/Img3.HEIC',
            '/Images/14-02-2026/Img4.HEIC',
            '/Images/14-02-2026/Img5.HEIC',
            '/Images/14-02-2026/Img6.HEIC',
            '/Images/14-02-2026/Img7.HEIC',
            '/Images/14-02-2026/Img8.HEIC',
            '/Images/14-02-2026/Img9.HEIC',
            '/Images/14-02-2026/Img10.HEIC',
            '/Images/14-02-2026/Img11.HEIC'
        ],
    },
    {
        date:  '2026-03-13',
        type:  'visit',
        title: 'Maquillaje y... Stand By Me',
        desc:  'Un dia especial donde nos acercamos mas y compartimos momentos que nos llevaron a un nuevo mivel de confianza y cariño.',
        photos: [
            '/Images/13-03-2026/Img1.HEIC',
            '/Images/13-03-2026/Img2.HEIC',
            '/Images/13-03-2026/Img3.HEIC',
            '/Images/13-03-2026/Vid1.MOV'
        ]
    },
    {
        date:  '2026-03-14',
        type:  'date',
        title: 'Palmas y... ¡Oficialmente novios!',
        desc:  'El día que oficialmente nos convertimos en novios. Fue un día lleno de emociones, risas y momentos inolvidables que marcaron el comienzo de nuestra hermosa historia juntos.',
        photos: [
            '/Images/14-03-2026/Img1.JPG',
            '/Images/14-03-2026/Img2.HEIC',
            '/Images/14-03-2026/Img3.HEIC',
            '/Images/14-03-2026/Img4.HEIC',
            '/Images/14-03-2026/Img5.HEIC',
            '/Images/14-03-2026/Img6.HEIC',
            '/Images/14-03-2026/Img7.HEIC',
            '/Images/14-03-2026/Img8.HEIC',
            '/Images/14-03-2026/Img9.JPG',
            '/Images/14-03-2026/Img10.HEIC',
            '/Images/14-03-2026/Img11.HEIC',
            '/Images/14-03-2026/Img12.HEIC'
        ]
    }
    // ─────────────────────────────────────────────────────────
];

// ── Daily Messages ──────────────────────────────────────────
const DAILY_MESSAGES = [
    "Sos el mejor error que cometí en mi vida.",
    "Cada día que pasa, te quiero más de lo que creía posible.",
    "En cualquier universo, te volvería a elegir.",
    "Tu risa es mi canción favorita.",
    "Gracias por hacer que lo ordinario se sienta extraordinario.",
    "Hoy, como todos los días, estoy enamorado de vos.",
    "Sos mi lugar favorito en el mundo.",
    "Cada vez que pienso en vos, sonrío sin querer.",
    "Mi corazón siempre va a encontrar el camino de vuelta a vos.",
    "No sé cómo era mi vida antes de vos, y no quiero saberlo.",
    "Sos la razón por la que creo en el amor.",
    "Tu existencia hace que este mundo sea mejor.",
    "Contigo todo tiene más sentido.",
    "Sos mi persona favorita en este planeta.",
    "Me alegra tanto que existas.",
    "Cada 'te quiero' que te digo es más grande que el anterior.",
    "Sos el tipo de persona que hace que valga la pena estar acá.",
    "Tu sonrisa arregla cualquier día.",
    "Me gusta quién soy cuando estoy con vos.",
    "Sos hermosa de todas las maneras posibles.",
    "No hay distancia que pueda apagar lo que siento por vos.",
    "Gracias por ser exactamente como sos.",
    "Tu voz es lo mejor que puedo escuchar.",
    "Cada vez que te extraño, me doy cuenta lo mucho que te quiero.",
    "Sos la parte favorita de mi historia.",
    "Me enamoré de vos sin darme cuenta, y ahora no quiero salir.",
    "Sos mi calma en el caos.",
    "Todo lo bueno que me pasa, quiero contártelo a vos.",
    "Ojalá puedas sentir todo lo que yo siento por vos.",
    "Sos especial de una manera que no se parece a nadie más.",
    "El tiempo con vos siempre se me hace corto.",
    "Gracias por quedarte.",
    "Sos el tipo de amor que esperé sin saber que esperaba.",
    "Me hacés sentir en casa aunque no estemos en ningún lado.",
    "Tu manera de ser me encanta completamente.",
    "Pienso en vos más de lo que puedo admitir.",
    "Lo mejor de mis días es cuando hablo con vos.",
    "Sos la razón por la que mis mañanas valen la pena.",
    "Me alegra muchísimo tenerte.",
    "Sos genuinamente increíble, ¿sabés?",
    "Hoy también te quiero un montón.",
    "Si pudiera elegir a alguien para pasar el tiempo, serías vos.",
    "Sos mi persona favorita para hablar de todo y de nada.",
    "Cada pequeño momento con vos se queda grabado.",
    "Gracias por amarme tal como soy.",
    "Sos la mejor parte de mis recuerdos recientes.",
    "Me das fuerzas sin darte cuenta.",
    "Ojalá algún día pueda mostrarte todo lo que significás para mí.",
    "Sos más de lo que pedí y todo lo que necesitaba.",
    "Tu presencia en mi vida es un regalo que no me canso de agradecer.",
    "Sos mi motivación sin saberlo.",
    "Cada mensaje tuyo me hace mejor el día.",
    "Te quiero hoy, mañana y siempre.",
    "Sos la persona con la que quiero celebrar cada cosa.",
    "Mi vida tiene más color desde que llegaste.",
    "Gracias por hacer que el amor se sienta fácil.",
    "Sos la primera persona en la que pienso cuando algo sale bien.",
    "Todo lo que viví me trajo hasta vos, y eso lo hace valer.",
    "Sos mi favorita, punto.",
    "Hoy es un buen día para recordarte lo importante que sos para mí.",
    "No paro de agradecerte por existir.",
    "Sos la razón por la que sonrío solo.",
    "Qué suerte tuve de que la vida nos cruzara.",
    "Sos todo lo que no sabía que quería.",
    "Mi corazón se alegra solo de saber que existís.",
    "Sos la persona que hace que este mundo tenga sentido.",
    "Me encanta ser el tuyo.",
    "Hoy y siempre, gracias por estar.",
    "Sos lo más lindo que tengo.",
    "Nada de lo que viví antes se compara con lo que siento con vos.",
];

// ── Type map ────────────────────────────────────────────────
const TYPE_INFO = {
    visit:     { icon: 'users',       label: 'Nos juntamos' },
    loversday: { icon: 'heart',       label: 'Día de los enamorados' },
    letter:    { icon: 'mail',        label: 'Carta de amor' },
    call:      { icon: 'phone',       label: 'Llamada especial' },
    date:      { icon: 'calendar-heart',    label: 'Cita especial' },
    gift:      { icon: 'gift',        label: 'Regalo' },
    milestone: { icon: 'star',        label: 'Hito importante' },
    other:     { icon: 'sparkles',    label: 'Momento especial' },
};

// ── State ───────────────────────────────────────────────────
let ytPlayer  = null;
let isPlaying = false;

// ── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    setupDailyMessage();
    updateStats();
    setupBirthdayCountdowns();
    renderTimeline();
    setupCursor();
    setupHearts();
    initYouTube();
    lucide.createIcons();
});

// ── Daily message ───────────────────────────────────────────
function setupDailyMessage() {
    const now       = new Date();
    const start     = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86_400_000);
    const idx       = dayOfYear % DAILY_MESSAGES.length;

    document.getElementById('dailyMessage').textContent = DAILY_MESSAGES[idx];
    document.getElementById('dailyDate').textContent = now.toLocaleDateString('es-AR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
}

// ── Stats ───────────────────────────────────────────────────
function updateStats() {
    const start = new Date(CONFIG.START_DATE + 'T00:00:00');
    const today = new Date();
    const days  = Math.max(0, Math.floor((today - start) / 86_400_000));

    animateNumber(document.getElementById('daysTogether'), days, 1600);
    animateNumber(document.getElementById('hoursTalking'), CONFIG.HOURS_TALKING, 1600);
    document.getElementById('momentCount').textContent = MOMENTS.length;
}

// ── Birthday Countdowns ─────────────────────────────────────
function daysUntilNextBirthday(mmdd) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [month, day] = mmdd.split('-').map(Number);
    let next = new Date(today.getFullYear(), month - 1, day);
    if (next < today) next.setFullYear(today.getFullYear() + 1);
    return Math.round((next - today) / 86_400_000);
}

function setupBirthdayCountdowns() {
    const herDays = daysUntilNextBirthday(CONFIG.HER_BIRTHDAY);
    const hisDays = daysUntilNextBirthday(CONFIG.HIS_BIRTHDAY);

    document.getElementById('herBirthdayDays').textContent =
        herDays === 0 ? '¡Es hoy! 🎉' : herDays;
    document.getElementById('hisBirthdayDays').textContent =
        hisDays === 0 ? '¡Es hoy! 🎉' : hisDays;
}

function animateNumber(el, target, duration) {
    const start = Date.now();
    function step() {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// ── Timeline ────────────────────────────────────────────────
function renderTimeline() {
    const wrap  = document.getElementById('timelineWrap');
    const empty = document.getElementById('emptyState');

    wrap.querySelectorAll('.timeline-entry').forEach(e => e.remove());

    if (MOMENTS.length === 0) {
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    const sorted = [...MOMENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
    sorted.forEach((m, i) => wrap.appendChild(buildEntryEl(m, i)));
    lucide.createIcons();
}

function buildEntryEl(m, idx) {
    const info    = TYPE_INFO[m.type] || TYPE_INFO.other;
    const dateStr = new Date(m.date + 'T00:00:00').toLocaleDateString('es-AR', {
        day: 'numeric', month: 'long', year: 'numeric',
    });

    const entry = document.createElement('div');
    entry.className = 'timeline-entry';
    entry.style.animationDelay = `${idx * 0.07}s`;
    entry.style.opacity = '0';

    entry.innerHTML = `
        <div class="entry-dot ${m.type}" title="${info.label}">
            <i data-lucide="${info.icon}"></i>
        </div>
        <div class="entry-card">
            <div class="entry-title">${escHtml(m.title)}</div>
            <div class="entry-meta">
                <span class="entry-date">${dateStr}</span>
                <span class="entry-type-badge">${info.label}</span>
            </div>
            ${m.desc ? `<p class="entry-desc">${escHtml(m.desc)}</p>` : ''}
        </div>
    `;

    // Inject photos if present
    if (m.photos && m.photos.length > 0) {
        const card   = entry.querySelector('.entry-card');
        const photos = m.photos;
        const total  = photos.length;
        const many   = total > 3;

        const grid = document.createElement('div');
        grid.className = `photos-grid ${many ? 'count-many' : 'count-' + total}`;

        const visible = many ? 3 : total;
        for (let i = 0; i < visible; i++) {
            const thumb   = makeThumb(photos[i], m.title);
            const isLast  = many && i === 2;
            if (isLast) {
                thumb.classList.add('has-more');
                thumb.dataset.more = `+${total - 2}`;
                thumb.onclick = () => openGallery(photos, m.title);
            } else {
                thumb.onclick = () => openLightbox(photos, i);
            }
            grid.appendChild(thumb);
        }
        card.appendChild(grid);
    }

    return entry;
}

// ── Media helpers ────────────────────────────────────────────
const VIDEO_EXTS = new Set(['mp4','mov','webm','ogg','mkv','m4v']);

function isVideo(src) {
    const ext = src.split('.').pop().split('?')[0].toLowerCase();
    return VIDEO_EXTS.has(ext);
}

function makeThumb(src, title) {
    const thumb = document.createElement('div');
    thumb.className = 'photo-thumb';

    if (isVideo(src)) {
        thumb.classList.add('video-thumb');
        const vid = document.createElement('video');
        vid.src         = src;
        vid.muted       = true;
        vid.playsInline = true;
        vid.preload     = 'metadata';
        vid.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;';
        const icon = document.createElement('div');
        icon.className = 'video-play-icon';
        icon.innerHTML = '<i data-lucide="play"></i>';
        thumb.appendChild(vid);
        thumb.appendChild(icon);
    } else {
        const img = document.createElement('img');
        img.src     = src;
        img.alt     = title;
        img.loading = 'lazy';
        thumb.appendChild(img);
    }
    return thumb;
}

function escHtml(str) {
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
}

// ── YouTube Music ───────────────────────────────────────────
function initYouTube() {
    if (!CONFIG.YOUTUBE_VIDEO_ID) return;
    const tag   = document.createElement('script');
    tag.src     = 'https://www.youtube.com/iframe_api';
    const first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(tag, first);
}

window.onYouTubeIframeAPIReady = function () {
    if (!CONFIG.YOUTUBE_VIDEO_ID) return;
    const container = document.getElementById('yt-player-container');
    const div       = document.createElement('div');
    div.id          = 'yt-player';
    container.appendChild(div);

    ytPlayer = new YT.Player('yt-player', {   // eslint-disable-line no-undef
        height:     '1',
        width:      '1',
        videoId:    CONFIG.YOUTUBE_VIDEO_ID,
        playerVars: { playsinline: 1, controls: 0, loop: 1, playlist: CONFIG.YOUTUBE_VIDEO_ID, rel: 0, fs: 0 },
        events: { onStateChange: onPlayerStateChange },
    });
};

function onPlayerStateChange(event) {
    isPlaying = event.data === 1;
    updateVinylState();
}

function toggleMusic() {
    if (!ytPlayer) return;
    isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
}

function updateVinylState() {
    const vinyl  = document.getElementById('vinyl');
    const widget = document.getElementById('musicWidget');
    if (isPlaying) {
        vinyl.classList.add('spinning');
        widget.classList.add('playing');
    } else {
        vinyl.classList.remove('spinning');
        widget.classList.remove('playing');
    }
}

// ── Lightbox ────────────────────────────────────────────────
let lbPhotos = [];
let lbIndex  = 0;

function openLightbox(photos, startIndex) {
    lbPhotos = photos;
    lbIndex  = startIndex;
    renderLbImage();
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const vid = document.getElementById('lbVideo');
    vid.pause();
    vid.src = '';
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function handleLightboxClick(e) {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function lightboxNav(dir) {
    lbIndex = (lbIndex + dir + lbPhotos.length) % lbPhotos.length;
    renderLbImage();
}

function renderLbImage() {
    const img     = document.getElementById('lbImg');
    const vid     = document.getElementById('lbVideo');
    const counter = document.getElementById('lbCounter');
    const prev    = document.getElementById('lbPrev');
    const next    = document.getElementById('lbNext');
    const src     = lbPhotos[lbIndex];

    // Stop any playing video before switching
    vid.pause();
    vid.src = '';

    if (isVideo(src)) {
        img.classList.add('hidden');
        vid.classList.add('active');
        vid.src = src;
        vid.load();
        vid.play().catch(() => {});   // autoplay (may need user gesture)
    } else {
        vid.classList.remove('active');
        img.classList.remove('hidden');
        img.style.animation = 'none';
        img.offsetHeight;             // reflow to restart animation
        img.style.animation = '';
        img.src = src;
    }

    counter.textContent = lbPhotos.length > 1 ? `${lbIndex + 1} / ${lbPhotos.length}` : '';
    prev.classList.toggle('hidden', lbPhotos.length <= 1);
    next.classList.toggle('hidden', lbPhotos.length <= 1);
}

// ── Gallery overlay ─────────────────────────────────────────
function openGallery(photos, title) {
    const overlay = document.getElementById('galleryOverlay');
    document.getElementById('galleryTitle').textContent = title;

    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    photos.forEach((src, i) => {
        const item  = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => { closeGallery(); openLightbox(photos, i); };

        if (isVideo(src)) {
            const vid = document.createElement('video');
            vid.src         = src;
            vid.muted       = true;
            vid.playsInline = true;
            vid.preload     = 'metadata';
            vid.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;';
            const icon = document.createElement('div');
            icon.className = 'video-play-icon';
            icon.innerHTML = '<i data-lucide="play"></i>';
            item.style.position = 'relative';
            item.appendChild(vid);
            item.appendChild(icon);
        } else {
            const img = document.createElement('img');
            img.src     = src;
            img.alt     = title;
            img.loading = 'lazy';
            item.appendChild(img);
        }
        grid.appendChild(item);
    });

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeGallery() {
    document.getElementById('galleryOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function handleGalleryClick(e) {
    if (e.target === document.getElementById('galleryOverlay')) closeGallery();
}

// Keyboard navigation
document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb.classList.contains('open')) {
        if (e.key === 'ArrowRight') lightboxNav(1);
        if (e.key === 'ArrowLeft')  lightboxNav(-1);
        if (e.key === 'Escape')     closeLightbox();
    }
    if (document.getElementById('galleryOverlay').classList.contains('open')) {
        if (e.key === 'Escape') closeGallery();
    }
});

// ── Custom cursor ───────────────────────────────────────────
function setupCursor() {
    const cursor = document.getElementById('customCursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });
}

// ── Floating hearts ─────────────────────────────────────────
function createHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = '❤️';
    h.style.left              = Math.random() * 100 + '%';
    h.style.animationDuration = (Math.random() * 3 + 5) + 's';
    h.style.animationDelay    = (Math.random() * 0.8) + 's';
    document.getElementById('heartsContainer').appendChild(h);
    setTimeout(() => h.remove(), 9000);
}

function setupHearts() {
    for (let i = 0; i < 5; i++) setTimeout(createHeart, i * 500);
    setInterval(createHeart, 1800);
}
