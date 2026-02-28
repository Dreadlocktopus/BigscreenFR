import { useEffect } from 'react';

export default function FacebookSDK() {
  useEffect(() => {
    // Configuration Facebook pour bigscreenfr.fr
    const domain = "bigscreenfr.fr";
    const facebookPageId = "61575956266820";
    const facebookAppId = "183285387826518";
    
    // Cette fonction initialise le SDK Facebook
    const initFacebookSdk = () => {
      // @ts-ignore
      window.fbAsyncInit = function() {
        // @ts-ignore
        FB.init({
          appId: facebookAppId,
          cookie: true,         // Activer les cookies
          autoLogAppEvents: true,
          xfbml: true,          // Parse les éléments sociaux sur la page
          version: 'v18.0'      // Version de l'API Facebook
        });
        
        // Parse les éléments sociaux une fois que le SDK est chargé
        // @ts-ignore
        FB.XFBML.parse();
      };

      // Charge le SDK Facebook de manière asynchrone - optimisé pour la production
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = `https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0&appId=${facebookAppId}`;
        js.async = true;
        js.defer = true;
        js.crossOrigin = "anonymous";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, 'script', 'facebook-jssdk'));
    };

    // Initialiser le SDK
    initFacebookSdk();

    // Rafraîchir les boutons Facebook après tout changement de DOM
    const refreshFacebookButtons = () => {
      // @ts-ignore
      if (typeof window.FB !== 'undefined') {
        try {
          // @ts-ignore
          window.FB.XFBML.parse();
        } catch (e) {
          console.error("Erreur lors du parsing Facebook XFBML:", e);
        }
      }
    };

    // Essayer de rafraîchir après le chargement complet et lors des mises à jour DOM
    window.addEventListener('load', refreshFacebookButtons);
    const observer = new MutationObserver(refreshFacebookButtons);
    observer.observe(document.body, { childList: true, subtree: true });

    // Nettoyage
    return () => {
      window.removeEventListener('load', refreshFacebookButtons);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="fb-root"></div>
  );
}