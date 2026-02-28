# Configuration des Fonctionnalités Facebook

Ce guide explique comment configurer les différentes intégrations Facebook sur le site BigScreenFR.

## Bouton "J'aime" et "Partager" dans la barre de navigation

Pour configurer le bouton Facebook dans la barre de navigation :

1. Ouvrez le fichier `client/src/components/Navbar.tsx`
2. Localisez l'iframe Facebook (autour de la ligne 115)
3. Modifiez l'URL pour pointer vers votre propre site ou page :

```jsx
<iframe 
  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2FVOTRE-SITE.fr&width=450&layout&action&size&share=true&height=35&appId&colorscheme=dark" 
  width="280" 
  height="40" 
  // autres attributs...
></iframe>
```

Paramètres importants :
- `href` : L'URL de votre site (encodée)
- `width` : Largeur du bouton (280px par défaut)
- `height` : Hauteur du bouton (40px par défaut)
- `colorscheme` : Thème du bouton (dark ou light)

## Section "Actualités récentes" dans Qui Sommes-Nous

Pour configurer le widget de page Facebook dans la section "Qui Sommes-Nous" :

1. Ouvrez le fichier `client/src/components/AboutUs.tsx`
2. Localisez l'iframe Facebook (autour de la ligne 126)
3. Modifiez l'URL pour pointer vers votre propre page Facebook :

```jsx
<iframe 
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVOTRE-PAGE-ID&tabs=timeline&width=500&height=370&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
  width="500" 
  height="370" 
  // autres attributs...
></iframe>
```

Paramètres importants :
- `href` : L'URL de votre page Facebook (encodée)
- `tabs` : Onglet à afficher (timeline, events, messages)
- `width` et `height` : Dimensions du widget
- `small_header` : Afficher une petite version de l'en-tête
- `hide_cover` : Cacher l'image de couverture
- `show_facepile` : Afficher les visages des amis qui aiment la page

## Liens Facebook dans la section Contact

Pour configurer les liens vers vos pages Facebook dans la section Contact :

1. Ouvrez le fichier `client/src/components/Contact.tsx`
2. Localisez les liens vers Facebook (autour des lignes 243 et 259)
3. Modifiez les URL pour pointer vers votre propre page ou groupe Facebook :

```jsx
<a 
  href="https://www.facebook.com/profile.php?id=VOTRE-ID" 
  target="_blank" 
  rel="noopener noreferrer" 
  // autres attributs...
>
  Suivre notre page officielle
</a>
```

## Création d'une App ID Facebook (Optionnel)

Pour une intégration plus professionnelle, vous pouvez créer une App ID Facebook :

1. Allez sur [Facebook Developers](https://developers.facebook.com/)
2. Créez une nouvelle application
3. Ajoutez l'URL de votre site dans les paramètres de l'application
4. Récupérez l'App ID généré
5. Ajoutez cet ID dans tous les widgets Facebook (paramètre `appId` dans les URL d'iframe)

## Dépannage des fonctionnalités Facebook

Si les widgets Facebook ne s'affichent pas correctement :

1. **Problème de domaine** : Assurez-vous que le domaine de votre site est bien configuré dans les paramètres de votre application Facebook
2. **Problème de cookies/vie privée** : Les utilisateurs avec des bloqueurs de publicité peuvent ne pas voir les widgets
3. **Version mobile** : Sur les petits écrans, certains widgets sont remplacés par des liens directs vers Facebook

## Personnalisation avancée

Pour des personnalisations plus avancées, consultez la [documentation officielle du Facebook Developer](https://developers.facebook.com/docs/plugins) qui détaille toutes les options disponibles pour chaque widget.