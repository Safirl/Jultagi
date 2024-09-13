const videoPopup = document.getElementById('video-popup');
const videoElement = document.getElementById('popup-video');
const videoSource = document.getElementById('video-source');
const closeBtn = document.querySelector('.close-btn');
const openVideoLinks = document.querySelectorAll('.open-video');

// Fonction pour ouvrir la pop-up avec la vidéo
openVideoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const videoUrl = this.getAttribute('data-video-url');
        videoSource.setAttribute('src', videoUrl);
        videoElement.load();
        videoPopup.style.display = 'flex'; // Affiche la pop-up
        videoElement.play(); // Lance la vidéo automatiquement
    });
});

// Fonction pour fermer la pop-up
closeBtn.addEventListener('click', function() {
    videoPopup.style.display = 'none';
    videoElement.pause(); // Met en pause la vidéo quand la pop-up se ferme
});

// Fermer la pop-up en cliquant en dehors de la vidéo
videoPopup.addEventListener('click', function(event) {
    if (event.target === videoPopup) {
        videoPopup.style.display = 'none';
        videoElement.pause();
    }
});