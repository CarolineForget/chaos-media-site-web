/** Composante Header de Timtools */
export default class Header {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée.
   */
  constructor(element) {
    this.element = element;
    this.scrollLimit = element.dataset.scrollLimit || 0;
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.autoHide = element.dataset.autoHide || false;

    this.init();
    this.initNavMobile();
  }

  /**
   * Méthode d'initialisation - Header en version desktop
   */
  init() {
    //Active l'événement scroll si le dataset autoHide est "true".
    if (this.autoHide == 'true') {
      window.addEventListener('scroll', this.onScroll.bind(this));
    } else {
      console.log('Le Header ne se cache pas.');
    }
  }

  /**
   * Méthode onScroll - Gère le scroll de la page.
   * @param {HTMLElement} evt - Élément HTML cible de l'événement.
   */
  onScroll(evt) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setHeaderState();
    this.setDirectionState();
  }

  /**
   *Méthode setHeaderState - Gère l'état du Header en fonction du scroll.
   */
  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    //Cache le header si sa position de scroll est plus grande que le produit
    //de la hauteur de l'élément scroll et de la limite de scroll.
    if (this.scrollPosition > scrollHeight * this.scrollLimit) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  /**
   * Méthode setDirectionState - Gère la direction du scroll.
   */
  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  /**
   * Méthode d'initialisation - Header en version mobile
   */
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  /**
   * Méthode onToggleNav - Gére l'ouverture et la fermeture du header version mobile
   */
  onToggleNav() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.classList.toggle('active');
    this.html.classList.toggle('nav-is-active');
  }
}
