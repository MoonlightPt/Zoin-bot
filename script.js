// Animate chat messages on page load
window.addEventListener('DOMContentLoaded', () => {
    const msgs = document.querySelectorAll('.msg');
    msgs.forEach((msg, i) => {
        msg.style.animationDelay = (0.2 + i * 0.3) + 's';
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.info, .demo');
    function revealSections() {
        const trigger = window.innerHeight * 0.85;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < trigger) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();
});

// Mood color logic
const moodColors = {
  roasty: '#ffb347',
  chill: '#5fd0ff',
  sassy: '#e75480',
  friendly: '#43b581',
  angry: '#ff4747'
};
const moodSelect = document.getElementById('mood-select');
const moodColor = document.getElementById('mood-color');
if (moodSelect && moodColor) {
  function updateMoodColor() {
    const mood = moodSelect.value;
    moodColor.style.background = moodColors[mood] || '#ffb347';
    moodColor.className = 'mood-color ' + mood;
  }
  moodSelect.addEventListener('change', updateMoodColor);
  updateMoodColor();
}
