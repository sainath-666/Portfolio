// Using ES6+ features for smooth scrolling
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typewriter effect for the introduction text
const text = "Full Stack Web and App Developer | Data Analyst | Cloud Practitioner";
let i = 0;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
