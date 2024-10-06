document.addEventListener('DOMContentLoaded', () => {
    const enrollButton = document.querySelector('.enroll-btn');
    const modal = document.getElementById('enroll-modal');
    const closeBtn = document.querySelector('.close-btn');

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

    // File upload form submission
    const uploadForm = document.querySelector('.upload-evidence form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Evidencia subida exitosamente. ¡Gracias por tu participación!');
        });
    }
});