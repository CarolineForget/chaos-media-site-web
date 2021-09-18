/** Composante Scrolly de Timtools */
export default class Scrolly {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée.
   */
  constructor(element) {
    this.element = element;

    // Options par défaut pour les margins de la zone d'affichage.
    this.options = {
      rootMargin: '0px 0px 0px 0px',
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.observer = new IntersectionObserver(this.watch.bind(this), this.options);

    //Gestion des éléments scrolly (cibles).
    //Initialisation d'un tableau avec tous les éléments <HTML> avec le dataset scrolly.
    const items = this.element.querySelectorAll('[data-scrolly]');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.observer.observe(item);
    }
  }

  /**
   * Méthode Watch
   * @param {HTML} entries - Éléments en contact avec la zone d'affichage.
   */
  watch(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      //Véfifie si l'élément est en contact avec la zone d'affichage ou non.
      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
