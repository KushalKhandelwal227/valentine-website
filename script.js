const config = window.VALENTINE_CONFIG;

document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('valentineTitle').textContent =
        `${config.valentineName}, my love...`;

    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;

    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;

    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    createFloatingElements();
    setupMusicPlayer();
    setInitialPosition();
});

// FLOATING ELEMENTS
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');

    [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears].forEach(e => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = e;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDelay = Math.random() * 5 + 's';
}

// QUESTIONS
function showNextQuestion(num) {
    document.querySelectorAll('.question-section')
        .forEach(q => q.classList.add('hidden'));

    document.getElementById(`question${num}`)
        .classList.remove('hidden');
}

function moveButton(btn) {
    btn.style.position = "fixed";
    btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + "px";
    btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + "px";
}

// LOVE METER
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
}

loveMeter.addEventListener('input', () => {

    const v = parseInt(loveMeter.value);
    loveValue.textContent = v;

    if (v > 100) {
        extraLove.classList.remove('hidden');

        if (v > 5000) extraLove.textContent = config.loveMessages.extreme;
        else if (v > 1000) extraLove.textContent = config.loveMessages.high;
        else extraLove.textContent = config.loveMessages.normal;

    } else {
        extraLove.classList.add('hidden');
    }
});

// 🎉 CELEBRATION + SLIDESHOW
function celebrate() {

    document.querySelectorAll('.question-section')
        .forEach(q => q.classList.add('hidden'));

    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent =
        config.celebration.title;

    document.getElementById('celebrationMessage').textContent =
        config.celebration.message;

    document.getElementById('celebrationEmojis').textContent =
        config.celebration.emojis;

    createHeartExplosion();
    startSlideshow();
}

// ❤️ HEART EXPLOSION
function createHeartExplosion() {
    const container = document.querySelector('.floating-elements');

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML =
            config.floatingEmojis.hearts[
                Math.floor(Math.random() * config.floatingEmojis.hearts.length)
            ];

        setRandomPosition(heart);
        container.appendChild(heart);
    }
}

// 📸 SIMPLE SLIDESHOW
function startSlideshow() {

    const mem = config.memories;

    if (!mem?.enabled || !mem.images.length) return;

    const box = document.createElement("div");

    box.style.marginTop = "20px";

    const img = document.createElement("img");

    img.src = mem.images[0];
    img.style.width = "240px";
    img.style.borderRadius = "18px";
    img.style.boxShadow = "0 15px 30px rgba(0,0,0,.25)";
    img.style.transition = "opacity .4s";

    box.appendChild(img);

    document.getElementById("celebration")
        .appendChild(box);

    let i = 0;

    setInterval(() => {

        i = (i + 1) % mem.images.length;
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = mem.images[i];
            img.style.opacity = 1;
        }, 300);

    }, 2500);
}

// 🎵 MUSIC
function setupMusicPlayer() {

    if (!config.music.enabled) return;

    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const source = document.getElementById('musicSource');

    source.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => {});
    }

    musicToggle.addEventListener('click', () => {

        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}
