document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const darkToggle = document.getElementById('darkModeToggle');

    // Toggle menu mobile
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Toggle dark mode
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme',
            document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
    });

    // Terapkan dark mode jika sebelumnya aktif
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
