document.addEventListener('DOMContentLoaded', function() {
    console.log('Le site est chargé et prêt !');
    
    // Vous pouvez ajouter ici des fonctionnalités JavaScript
    // Par exemple :
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image cliquée :', this.alt);
        });
    });
});