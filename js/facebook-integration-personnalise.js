// Intégration Facebook et compteur de visiteurs - PERSONNALISÉ POUR BIGSCREENFR.FR
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser l'API Facebook
  window.fbAsyncInit = function() {
    FB.init({
      appId: '183285387826518',
      xfbml: true,
      version: 'v18.0'
    });
  };

  // Ajouter les boutons Facebook dans le header
  const header = document.querySelector('header');
  if (header) {
    // Créer les boutons Facebook
    const fbButtonsContainer = document.createElement('div');
    fbButtonsContainer.className = 'fb-buttons flex items-center absolute right-4 top-4';
    fbButtonsContainer.style.zIndex = "100";
    
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
    
    // Ajouter le conteneur à l'en-tête
    header.appendChild(fbButtonsContainer);
  }
  
  // Ajouter le compteur de visiteurs au footer - MÉTHODE SPÉCIFIQUE POUR BIGSCREENFR.FR
  const footer = document.querySelector('footer');
  if (footer) {
    // Créer le compteur de visiteurs
    const visitorCounter = document.createElement('div');
    visitorCounter.className = 'visitor-counter';
    visitorCounter.style.textAlign = 'center';
    visitorCounter.style.marginTop = '20px';
    visitorCounter.style.marginBottom = '20px';
    visitorCounter.style.color = 'white';
    
    visitorCounter.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 10px;">Visiteurs</h3>
      <div style="display: flex; justify-content: center; gap: 40px;">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <span style="color: #FFD700; font-size: 24px; font-weight: bold;">12</span>
          <span style="color: #aaa; font-size: 14px;">Cette semaine</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <span style="color: #FFD700; font-size: 24px; font-weight: bold;">200</span>
          <span style="color: #aaa; font-size: 14px;">Total</span>
        </div>
      </div>
    `;
    
    // Insérer le compteur au début du footer
    footer.prepend(visitorCounter);
  }
});
