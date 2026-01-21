document.addEventListener('DOMContentLoaded', () => {
    console.log("La Torre Biology - Sales Protocol v3.0 Active");

    // 1. ANIMACIÓN DE ENTRADA (REVEAL)
    const observerOptions = { threshold: 0.15 };
    const revealPillars = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.pillar-card');
    cards.forEach((card, index) => {
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        revealPillars.observe(card);
    });

    // 2. EFECTO LATIDO EN BOTONES (LLAMA LA ATENCIÓN)
    const ctaButtons = document.querySelectorAll('.btn-gold-large');
    setInterval(() => {
        ctaButtons.forEach(btn => {
            btn.style.transform = 'scale(1.04)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        });
    }, 4000);

    // 3. SCROLL SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
