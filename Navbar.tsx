import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import siteConfig from "@/config/siteConfig";

/**
 * Utilisation de la configuration centralisée pour la navbar
 * Pour modifier les valeurs, rendez-vous dans le fichier src/config/siteConfig.ts
 */
const navigationConfig = siteConfig.navbar.links.map(link => ({
  id: link.href.replace('#', ''),
  label: link.label
}));

/**
 * Configuration du logo depuis le fichier de configuration centralisé
 */
const logoConfig = {
  src: siteConfig.navbar.logo.imagePath || "/images/logo/titre2.PNG",
  alt: siteConfig.navbar.logo.altText || "BigScreenFR",
  height: "h-20 md:h-20"
};

/**
 * Interface pour les props du composant NavLink
 */
interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Composant NavLink - Crée un lien de navigation stylisé avec animation
 */
const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className="relative px-3 py-2 text-white font-bold tracking-wider uppercase text-sm hover:text-accent transition-all duration-300 group overflow-hidden whitespace-nowrap"
    onClick={onClick}
  >
    <span className="relative z-10">{label}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-accent to-blue-400 group-hover:w-full transition-all duration-300"></span>
  </a>
);

/**
 * Composant Navbar - Barre de navigation responsive avec menu mobile
 */
export default function Navbar() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fonctions pour gérer le menu mobile
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  /**
   * Fonction pour faire défiler la page vers une section spécifique
   * @param sectionId - L'ID de la section vers laquelle défiler
   */
  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcul de la position avec offset pour tenir compte de la hauteur de la navbar
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 55;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="navbar fixed w-full top-0 z-50 py-0 px-0 md:px-0 bg-black bg-opacity-50 backdrop-blur-sm shadow-lg border-b-2 border-yellow-400" style={{ height: "60px" }}>

      <div className="w-full flex justify-between items-center p-0 px-0 md:px-2">
        {/* Logo du site avec lien vers l'accueil */}
        <a 
          href="#accueil" 
          className="flex items-center p-0 m-0 w-1/6"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("accueil");
          }}
        >
          <img 
            src={logoConfig.src}
            alt={logoConfig.alt}
            className={`${logoConfig.height} object-contain`}
            style={{ marginTop: "-10px", marginBottom: "-10px", marginLeft: "-10px" }}
          />
        </a>
        
        {/* Navigation pour écrans de taille desktop */}
        <nav className="hidden md:flex items-center justify-start pl-0 space-x-7 flex-1">
          {navigationConfig.map((item) => (
            <NavLink 
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }} 
            />
          ))}
        </nav>
        
        {/* Boutons Facebook officiels pour le serveur */}
        <div className="hidden md:flex items-center justify-end p-0 mr-4 w-2/5">
          <div className="flex space-x-3">
            {/* Bouton J'aime Facebook officiel */}
            <div className="fb-like" 
                data-href="https://www.facebook.com/profile.php?id=61575956266820" 
                data-width="" 
                data-layout="button" 
                data-action="like" 
                data-size="large" 
                data-share="false">
            </div>
            
            {/* Bouton Partager Facebook officiel */}
            <div className="fb-share-button" 
                data-href="https://bigscreenfr.fr" 
                data-layout="button" 
                data-size="large">
            </div>
            
            {/* Boutons de secours si les officiels ne se chargent pas */}
            <div className="hidden">
              <a 
                href="https://www.facebook.com/profile.php?id=61575956266820" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-3 py-1 rounded mr-2 text-sm font-semibold flex items-center"
              >
                J'aime
              </a>
              
              <a 
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbigscreenfr.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-3 py-1 rounded text-sm font-semibold flex items-center"
              >
                Partager
              </a>
            </div>
          </div>
        </div>
        
        {/* Bouton de menu pour mobile */}
        <button 
          className="md:hidden text-white hover:text-accent transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Menu mobile (visible uniquement sur petits écrans et lorsque activé) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-md border-t border-purple-500/30 py-4 px-6 animate-fadeIn shadow-xl ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4">
          {navigationConfig.map((item) => (
            <NavLink 
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }} 
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
