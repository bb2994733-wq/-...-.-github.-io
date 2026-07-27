// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("👋 Welcome to 𝙿𝙰𝚁𝚃𝙷𝚄𝚄𝚄...!! Profile");
    }, 500);
};

// Profile Image Animation
const profile = document.querySelector(".profile");

profile.addEventListener("mouseenter", () => {
    profile.style.transform = "scale(1.08)";
    profile.style.transition = "0.3s";
});

profile.addEventListener("mouseleave", () => {
    profile.style.transform = "scale(1)";
});

// Button Click Animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});
