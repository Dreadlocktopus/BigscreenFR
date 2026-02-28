# Guide de Configuration de BigScreenFR

Ce guide explique comment modifier et configurer les différentes parties du site BigScreenFR. Il est conçu pour être facilement compréhensible, même sans connaissances techniques approfondies.

## Structure des fichiers importants

Les fichiers principaux pour la configuration du site sont :

- **client/src/config/siteConfig.ts** : Contient les configurations générales du site (textes, liens, couleurs)
- **client/src/components/** : Contient tous les composants du site (sections, formulaires, etc.)
- **attached_assets/** : Contient toutes les images et médias du site

## Comment modifier les textes et contenus

La plupart des textes et contenus peuvent être modifiés dans le fichier `client/src/config/siteConfig.ts`. Ce fichier centralise la configuration pour faciliter les modifications.

Exemple pour modifier le titre du site :
```typescript
// Dans client/src/config/siteConfig.ts
const siteConfig = {
  site: {
    name: "BigScreenFR", // Modifiez cette valeur pour changer le titre du site
    // ...autres configurations
  },
  // ...
};
```

## Comment modifier la barre de navigation

Pour modifier la barre de navigation (liens, logo, etc.) :

1. Ouvrez `client/src/components/Navbar.tsx`
2. Pour modifier les liens du menu : modifiez le fichier `client/src/config/siteConfig.ts` dans la section `navbar.links`
3. Pour modifier le logo : remplacez l'image dans `attached_assets/` et mettez à jour le chemin dans `client/src/config/siteConfig.ts` section `navbar.logo.imagePath`
4. Pour ajuster l'espacement entre les éléments : modifiez la classe `space-x-7` dans la balise `<nav>` (ligne 97)

## Comment modifier l'intégration Facebook

Les boutons Facebook "J'aime" et "Partager" sont intégrés dans :

1. **Barre de navigation** : `client/src/components/Navbar.tsx` (ligne 115)
2. **Section Qui sommes-nous** : `client/src/components/AboutUs.tsx` (ligne 126)

Pour modifier ces intégrations :
- Vous pouvez ajuster les dimensions (width, height) 
- Modifier l'URL avec votre propre page Facebook en changeant la partie `href=https%3A%2F%2Fbigscreenfr.fr`

Exemple pour la barre de navigation :
```jsx
<iframe 
  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2FVOTRE-URL&width=450&layout&action&size&share=true&height=35&appId&colorscheme=dark" 
  width="280" 
  height="40" 
  // ... autres propriétés
></iframe>
```

## Comment modifier le formulaire d'inscription

Le formulaire d'inscription se trouve dans `client/src/components/RegistrationForm.tsx`.

Pour modifier les champs du formulaire :
1. Ouvrez `client/src/components/RegistrationForm.tsx`
2. Les champs et leurs validations sont définis dans `formSchema` (lignes 64-118)
3. Pour ajouter un nouveau champ :
   - Ajoutez-le au schéma de validation
   - Ajoutez-le dans la section du formulaire (à partir de la ligne 192)
4. Pour modifier l'email de destination : changez la valeur de `destinationEmail` dans le fichier `client/src/config/siteConfig.ts`

## Comment modifier la section "Qui sommes-nous"

Cette section se trouve dans `client/src/components/AboutUs.tsx`.

Pour modifier :
1. Les textes et paragraphes : modifiez les variables dans `aboutUsConfig` (lignes 8-71)
2. L'intégration Facebook : ajustez les paramètres de l'iframe (lignes 126-135)
3. Les images : remplacez les fichiers dans `attached_assets/` et mettez à jour les chemins dans `aboutUsConfig.gallery`

## Comment modifier le formulaire de contact

Le formulaire de contact se trouve dans `client/src/components/Contact.tsx`.

Pour modifier :
1. Les options de sujets : modifiez `client/src/config/siteConfig.ts` dans la section `contact.form.subjects`
2. L'email de destination : modifiez `client/src/config/siteConfig.ts` dans la section `contact.form.emailDestination`
3. Le chatbot Elfsight : remplacez l'ID d'application dans la div avec la classe `elfsight-app-...` (ligne 275)

## Comment remplacer les images et médias

Les images et médias sont stockés dans le dossier `attached_assets/`.

1. Placez vos nouvelles images dans ce dossier
2. Mettez à jour les chemins dans les fichiers appropriés :
   - Pour le logo : `client/src/config/siteConfig.ts` (section navbar.logo)
   - Pour les images de fond : modifiez les variables correspondantes dans chaque composant
   - Pour les images de la galerie : `client/src/components/AboutUs.tsx` (section aboutUsConfig.gallery)

## Comment modifier le design (couleurs, polices)

Les couleurs principales sont définies dans :
1. `tailwind.config.ts` pour les couleurs globales
2. `client/src/index.css` pour les styles CSS personnalisés

Pour modifier les polices :
1. Ajoutez vos polices dans `public/fonts/`
2. Mettez à jour les définitions de polices dans `client/src/index.css`

## Déploiement du site

Pour déployer le site :
1. Téléchargez l'archive complète (`bigscreenfr-site-complet.tar.gz`)
2. Décompressez-la sur votre ordinateur
3. Téléversez les fichiers sur votre hébergeur via FTP (suivez les instructions dans DEPLOYMENT_FTP.md)

Pour des mises à jour partielles, vous pouvez simplement remplacer les fichiers modifiés sur votre serveur.

## Obtenir de l'aide

Si vous avez besoin d'aide pour configurer ou modifier votre site :
1. Consultez la documentation dans les fichiers README.md, DEPLOYMENT.md et DEPLOYMENT_FTP.md
2. Référez-vous aux commentaires dans le code source pour des instructions spécifiques