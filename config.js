// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Shubhi",

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
        title: "YAYYYY 😭💖",
        message: "Now come get your gift… a big hug + lot of kisses 😘",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // 📸 PHOTO SLIDESHOW
    memories: {
        enabled: true,
        images: [
            "https://raw.githubusercontent.com/KushalKhandelwal227/valentine-website-2025/main/Gemini_Generated_Image_2xysdf2xysdf2xys.png",
            "https://raw.githubusercontent.com/KushalKhandelwal227/valentine-website-2025/main/Gemini_Generated_Image_fq32ykfq32ykfq32.png",
            "https://raw.githubusercontent.com/KushalKhandelwal227/valentine-website-2025/main/WhatsApp%20Image%202026-02-01%20at%208.39.34%20PM%20(2).jpeg",
            "https://raw.githubusercontent.com/KushalKhandelwal227/valentine-website-2025/main/WhatsApp%20Image%202026-02-01%20at%208.39.34%20PM%20(3).jpeg"
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
