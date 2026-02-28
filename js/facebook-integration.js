// Intégration Facebook et compteur de visiteurs
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser l'API Facebook
  window.fbAsyncInit = function() {
    FB.init({
      appId: '183285387826518',
      xfbml: true,
      version: 'v18.0'
    });
  };

  // Ajouter les boutons Facebook à la barre de navigation
  const navButtons = document.querySelector('.navbar-end');
  if (navButtons) {
    // Créer les boutons Facebook
    const fbButtonsContainer = document.createElement('div');
    fbButtonsContainer.className = 'fb-buttons flex items-center space-x-2 ml-2';
    
    // Bouton J'aime
    const likeButton = document.createElement('div');
    likeButton.className = 'fb-like';
    likeButton.setAttribute('data-href', 'https://www.facebook.com/profile.php?id=61575956266820');
    likeButton.setAttribute('data-width', '');
    likeButton.setAttribute('data-layout', 'button');
    likeButton.setAttribute('data-action', 'like');
    likeButton.setAttribute('data-size', 'large');
    likeButton.setAttribute('data-share', 'false');
    
    // Bouton Partager
    const shareButton = document.createElement('div');
    shareButton.className = 'fb-share-button';
    shareButton.setAttribute('data-href', 'https://bigscreenfr.fr');
    shareButton.setAttribute('data-layout', 'button');
    shareButton.setAttribute('data-size', 'large');
    
    // Ajouter les boutons au conteneur
    fbButtonsContainer.appendChild(likeButton);
    fbButtonsContainer.appendChild(shareButton);
    
    // Ajouter le conteneur à la barre de navigation
    navButtons.appendChild(fbButtonsContainer);
  }
  
  // Ajouter le compteur de visiteurs au pied de page
  const footer = document.querySelector('footer');
  if (footer) {
    const copyrightSection = footer.querySelector('.copyright') || footer.lastElementChild;
    
    if (copyrightSection) {
      // Créer le compteur de visiteurs
      const visitorCounter = document.createElement('div');
      visitorCounter.className = 'mt-6 flex justify-center';
      visitorCounter.innerHTML = `
        <div class="flex flex-col items-center">
          <h3 class="text-white text-base font-semibold mb-2">Visiteurs</h3>
          <div class="flex space-x-8">
            <div class="flex flex-col items-center">
              <span class="text-accent text-xl font-bold">12</span>
              <span class="text-gray-400 text-xs">Cette semaine</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-accent text-xl font-bold">200</span>
              <span class="text-gray-400 text-xs">Total</span>
            </div>
          </div>
        </div>
      `;
      
      // Insérer le compteur avant la section copyright
      copyrightSection.parentNode.insertBefore(visitorCounter, copyrightSection);
    }
  }
});
