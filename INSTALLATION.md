# Guide d'Installation de BigScreenFR

Ce document explique comment installer et configurer le site BigScreenFR sur votre environnement de développement ou sur un serveur d'hébergement.

## Prérequis

Pour faire fonctionner le site, vous aurez besoin de :

- Node.js (version 18 ou supérieure)
- NPM (généralement installé avec Node.js)
- Un serveur d'hébergement pour la production (avec support PHP pour le formulaire de contact)

## Installation en local pour développement

1. **Décompressez l'archive**
   ```
   tar -xzf bigscreenfr-site-complet.tar.gz
   ```

2. **Installez les dépendances**
   ```
   npm install
   ```

3. **Lancez le serveur de développement**
   ```
   npm run dev
   ```

4. **Accédez au site**
   Le site sera disponible à l'adresse : http://localhost:5000

## Configuration des formulaires

Par défaut, les formulaires (contact et inscription) sont configurés pour ouvrir le client de messagerie de l'utilisateur. Pour les faire fonctionner avec PHP :

1. Créez un fichier `contact.php` sur votre serveur avec le code fourni dans `server/contact.php`
2. Créez un fichier `inscription.php` sur votre serveur avec le code fourni dans `server/inscription.php`
3. Modifiez les URL des formulaires dans `client/src/components/Contact.tsx` et `client/src/components/RegistrationForm.tsx` pour pointer vers ces fichiers PHP

## Configuration de l'intégration Facebook

Pour que les boutons Facebook fonctionnent correctement :

1. Assurez-vous que l'URL dans les iframes Facebook correspond à votre domaine
2. Si les boutons ne s'affichent pas correctement, vérifiez que le domaine est bien autorisé dans les paramètres de votre application Facebook

## Versions alternatives

Deux versions du site sont disponibles :

1. **Version avec Google Fonts (standard)**
   Cette version utilise les polices Google Fonts pour un rendu optimal mais nécessite une connexion internet.

2. **Version avec polices système (locale)**
   Cette version utilise des polices déjà présentes sur l'ordinateur de l'utilisateur. Utilisez cette version si vous souhaitez un site sans dépendances externes.

## Dépannage courant

Si vous rencontrez des problèmes :

1. **Les images ne s'affichent pas**
   - Vérifiez que les chemins dans `client/src/config/siteConfig.ts` correspondent à l'emplacement de vos images
   - Assurez-vous que les images sont bien présentes dans le dossier `attached_assets/`

2. **Les formulaires ne fonctionnent pas**
   - Vérifiez que l'adresse email dans `client/src/config/siteConfig.ts` est correcte
   - Si vous utilisez PHP, assurez-vous que les fichiers PHP sont correctement configurés sur votre serveur

3. **Les boutons Facebook ne s'affichent pas**
   - Vérifiez que votre navigateur n'est pas configuré pour bloquer le contenu Facebook
   - Assurez-vous que l'URL dans les iframes correspond à votre domaine

## Mise à jour du site

Pour mettre à jour le site :

1. Modifiez les fichiers concernés (voir GUIDE_CONFIGURATION.md)
2. Si vous êtes en développement, les changements seront visibles immédiatement
3. Si vous êtes en production, téléversez les fichiers modifiés sur votre serveur