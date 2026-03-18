document.addEventListener('DOMContentLoaded', () => {
    // --- HERO SLIDER LOGIC ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    let current = 0;
    let slideTimer;

    function showSlide(index) {
        if (!slides.length) return; // Safety check
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        current = index;
    }

    function nextSlide() {
        let next = (current + 1) % slides.length;
        showSlide(next);
        resetTimer();
    }

    function prevSlide() {
        let prev = (current - 1 + slides.length) % slides.length;
        showSlide(prev);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000); // 5 seconds is better for reading text
    }

    // Event Listeners for Manual Control
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Initial Timer Start
    slideTimer = setInterval(nextSlide, 5000);


    // --- NAVIGATION SIGN LOGIC (+/-) ---
    const submenus = document.querySelectorAll('.has-submenu');

    submenus.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const sign = item.querySelector('.sign');
            if(sign) sign.textContent = '-';
        });
        item.addEventListener('mouseleave', () => {
            const sign = item.querySelector('.sign');
            if(sign) sign.textContent = '+';
        });
    });

    // --- EMAIL LOGIC UPDATE ---
    // Smooth scroll for Contact Us removed to allow the mailto: link
    // in index.html to open the user's email client directly.
});