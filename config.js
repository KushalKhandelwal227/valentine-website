// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Bubu Shubhi",

    pageTitle: "Will You Be My Valentine? ❤️",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine? 🌹",
            yesBtn: "YES 💖",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond 🚀💝",
        normal: "And beyond 🥰"
    },

    celebration: {
        title: "YAYYYY 😭💍💖",
        message: "Now come get your gift… a hug + kiss combo 😘",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // 📸 PHOTO SLIDESHOW
    memories: {
        enabled: true,
        images: [
            "https://YOUR_IMAGE_LINK_1.jpg",
            "https://YOUR_IMAGE_LINK_2.jpg",
            "https://YOUR_IMAGE_LINK_3.jpg"
        ]
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
