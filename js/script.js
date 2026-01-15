// Aspetta che la pagina sia caricata
document.addEventListener('DOMContentLoaded', function() {
    
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Controlla se l'utente ha già accettato in passato (funzionalità base)
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    // Quando clicchi su "Accetto"
    acceptBtn.addEventListener('click', function() {
        // 1. Nascondi il banner
        cookieBanner.style.display = 'none';
        // 2. Salva la preferenza nel browser
        localStorage.setItem('cookiesAccepted', 'true');
    });

});