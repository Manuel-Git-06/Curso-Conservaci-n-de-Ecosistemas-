document.addEventListener('DOMContentLoaded', () => {
    const enrollButton = document.querySelector('.enroll-btn');
    const modal = document.getElementById('enroll-modal');
    const closeBtn = document.querySelector('.close-btn');
    const mainContent = document.querySelector('main');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modules = document.querySelectorAll('.module');
    const moduleGrid = document.querySelector('.module-grid');

    // Ensure the enroll button exists before adding event listener
    if (enrollButton) {
        // Open enroll modal
        enrollButton.addEventListener('click', () => {
            modal.style.display = 'block';
            launchConfetti();
        });
    }

    // Close enroll modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Delegate event to toggle module content
    document.querySelector('.module-grid').addEventListener('click', (event) => {
        if (event.target.tagName === 'H3' && event.target.parentElement.classList.contains('module')) {
            const content = event.target.nextElementSibling;
            content.style.display = (content.style.display === 'block' || content.style.display === '') ? 'none' : 'block';
        }
    });

    // Scroll animation for main content
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            mainContent.classList.add('visible');
        }
    });

    // Scroll animation for timeline items using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach((item) => {
        observer.observe(item);
    });

    // Module hover effect
    modules.forEach((module) => {
        module.addEventListener('mouseenter', () => {
            moduleGrid.classList.add('darken');
        });

        module.addEventListener('mouseleave', () => {
            moduleGrid.classList.remove('darken');
        });
    });

    // Open module page on click
    modules.forEach((module) => {
        module.addEventListener('click', () => {
            const moduleName = module.querySelector('h3').textContent.trim();
            // Dependiendo del módulo, redirigir a la página correspondiente
            switch (moduleName) {
                case 'Módulo 1: Introducción a los Ecosistemas':
                    window.open('modulo_pages.html', '_blank');
                    break;
                case 'Módulo 2: Tipos de Ecosistemas y Biodiversidad':
                    window.open('modulo_pages.html', '_blank');
                    break;
                case 'Módulo 3: Amenazas a los Ecosistemas':
                    window.open('modulo_pages.html', '_blank');
                    break;
                case 'Módulo 4: Estrategias de Conservación':
                    window.open('modulo_pages.html', '_blank');
                    break;
                case 'Módulo 5: Acciones Locales y Globales':
                    window.open('modulo_pages.html', '_blank');
                    break;
            }
        });
    });

    // Launch confetti animation
    function launchConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        confettiContainer.innerHTML = '';

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confettiContainer.appendChild(confetti);
        }
    }
});