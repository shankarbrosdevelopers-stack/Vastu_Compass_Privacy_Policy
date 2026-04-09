document.addEventListener('DOMContentLoaded', () => {
    // Reveal sections on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {document.addEventListener('DOMContentLoaded', () => {
    // Reveal sections on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Initial state for animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sectionObserver.observe(section);
    });

    // Hover effect for the card
    const card = document.querySelector('.card');
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        // Subtle tilt effect
        const moveX = (x - 0.5) * 5;
        const moveY = (y - 0.5) * 5;
        
        // Dynamic background glow (optional/subtle)
        card.style.borderColor = `rgba(16, 185, 129, ${0.1 + Math.abs(x - 0.5) * 0.2})`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Initial state for animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sectionObserver.observe(section);
    });

    // Hover effect for the card
    const card = document.querySelector('.card');
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        // Subtle tilt effect
        const moveX = (x - 0.5) * 5;
        const moveY = (y - 0.5) * 5;
        
        // Dynamic background glow (optional/subtle)
        card.style.borderColor = `rgba(16, 185, 129, ${0.1 + Math.abs(x - 0.5) * 0.2})`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});
