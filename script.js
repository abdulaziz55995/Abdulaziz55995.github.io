document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    const colorBtn = document.getElementById('color-changer');
    const animateBtn = document.getElementById('animate-image');
    const showMoreBtn = document.getElementById('show-more');
    const hiddenContent = document.getElementById('hidden-content');
    const profileImage = document.getElementById('profile-image');
    const title = document.getElementById('welcome-title');
    const phoneNumber = document.getElementById('phone-number');
    
    // Changer les couleurs aléatoirement
    colorBtn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        
        // Changer aussi la couleur du texte pour rester lisible
        const textContainers = document.querySelectorAll('.text-container');
        textContainers.forEach(container => {
            container.style.backgroundColor = getContrastColor(randomColor);
        });
    });
    
    // Animer l'image
    animateBtn.addEventListener('click', function() {
        profileImage.classList.toggle('animated-image');
        this.textContent = profileImage.classList.contains('animated-image') 
            ? 'Arrêter l\'animation' 
            : 'Animer l\'image';
    });
    
    // Afficher/masquer du contenu
    showMoreBtn.addEventListener('click', function() {
        hiddenContent.classList.toggle('showing');
        this.textContent = hiddenContent.classList.contains('showing') 
            ? 'Afficher moins' 
            : 'Afficher plus';
    });
    
    // Interaction avec le numéro de téléphone
    phoneNumber.addEventListener('click', function() {
        // Copie le numéro dans le presse-papiers
        navigator.clipboard.writeText(this.textContent.trim())
            .then(() => {
                const originalText = this.textContent;
                this.textContent = 'Numéro copié!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
    });
    
    // Fonction utilitaire pour obtenir une couleur de texte lisible
    function getContrastColor(hexColor) {
        // Convertir la couleur en RVB
        const r = parseInt(hexColor.substr(1,2), 16);
        const g = parseInt(hexColor.substr(3,2), 16);
        const b = parseInt(hexColor.substr(5,2), 16);
        
        // Calculer la luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Retourner noir ou blanc selon la luminance
        return luminance > 0.5 ? '#333333' : '#ffffff';
    }
});