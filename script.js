// Animate chat messages on page load
window.addEventListener('DOMContentLoaded', () => {
    const msgs = document.querySelectorAll('.msg');
    msgs.forEach((msg, i) => {
        msg.style.animationDelay = (0.2 + i * 0.3) + 's';
    });
});
