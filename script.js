// Simple animation on load
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector('.animated-text');
    let index = 0;
    const chars = text.textContent.split('');
    text.textContent = '';
    chars.forEach((char, i) => {
        setTimeout(() => { text.textContent += char; }, 100*i);
    });
});