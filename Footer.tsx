import siteConfig from "@/config/siteConfig";
import VisitorCounter from "./VisitorCounter";

/**
 * Utilisation de la configuration centralisée pour le pied de page
 * Pour modifier les valeurs, rendez-vous dans le fichier src/config/siteConfig.ts
 */
const footerConfig = {
  // Logo et slogan
  branding: {
    logo: siteConfig.footer.logo,
    text: {
      main: "BigScreen",
      accent: "FR"
    },
    slogan: "La passion du cinéma, en français"
  },
  
  // Liens de navigation
  navigation: siteConfig.footer.links.map(link => ({
    id: link.href.replace('#', ''),
    label: link.label
  })),
  
  // Copyright
  copyright: {
    text: siteConfig.footer.copyright
  }
};

/**
 * Composant Footer - Pied de page du site
 */
export default function Footer() {
  /**
   * Fait défiler la page vers une section spécifique avec un effet de défilement fluide
   * @param sectionId - L'identifiant HTML de la section cible
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcul de la position avec un offset pour tenir compte de la hauteur du header
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-secondary py-8 md:py-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo et slogan */}
          <div className="mb-6 md:mb-0">
            <a 
              href="#accueil" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("accueil");
              }}
            >
              <img 
                src={footerConfig.branding.logo} 
                alt="Logo BigScreenFR" 
                className="h-12 md:h-16"
              />
            </a>
            <p className="text-gray-400 mt-1 text-sm">
              {footerConfig.branding.slogan}
            </p>
          </div>
          
          {/* Liens de navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-0">
            {footerConfig.navigation.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-gray-400 text-sm">
              {footerConfig.copyright.text}
            </p>
          </div>
        </div>
        
        {/* Compteur de visiteurs - centré sous les liens */}
        <div className="mt-6 flex justify-center">
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
