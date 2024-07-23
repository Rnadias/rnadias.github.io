document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.text-animation, .text-animation2');
    const texts = ['Frontend Designer', 'Web Designer', 'UI/UX Designer', 'Web Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        elements.forEach(element => {
            element.textContent = texts[textIndex].substring(0, charIndex);
        });

        if (!isDeleting && charIndex < texts[textIndex].length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else if (!isDeleting && charIndex === texts[textIndex].length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        }
    }

    type();
});