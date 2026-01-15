document.addEventListener('DOMContentLoaded', function() {
    
    // --- GESTIONE MENU MOBILE ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    // Funzione per aprire/chiudere
    function toggleMenu() {
        navMenu.classList.toggle('active');
        
        // Cambia icona da Hamburger a X
        const icon = hamburgerBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }

    // Al click sull'hamburger
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita che il click si propaghi
            toggleMenu();
        });
    }

    // Chiudi il menu se clicchi su un link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Chiudi il menu se clicchi fuori
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburgerBtn.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

});