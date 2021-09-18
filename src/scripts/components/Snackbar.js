import Cache from '../utils/Cache';

/** Composante Snackbar de Timtools */
export default class Snackbar {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.html = document.documentElement;
    this.autoHide = element.dataset.autoHide || false;
    this.scrollLimit = element.dataset.scrollLimit || 0;
    this.delay = element.dataset.delay || 1000;
    this.dataId = element.dataset.id || 1;
    this.isHiding = false;

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.checkCache();

    // Fait apparaître la snackbar si elle a un nouveau ID.
    if (!this.isHiding) {
      setTimeout(this.showSnackbar.bind(this), this.delay);
    } else {
      this.element.remove();
    }
  }

  /**
   * Méthode showSnackbar - Initialise la snackbar après un délai.
   */
  showSnackbar() {
    this.html.classList.remove('snackbar-is-hidden');

    // Gestion de la disparition automatique du snackbar lors d'un scroll.
    if (this.autoHide == 'true') {
      window.addEventListener('scroll', this.onScroll.bind(this));
    } else {
      console.log('Le Snackbar ne se cache pas.');
    }

    this.close = this.element.querySelector('.js-close-snackbar');
    this.close.addEventListener('click', this.closeSnackbar.bind(this));
  }

  /**
   * Méthode onScroll - Gère le scroll de la page.
   * @param {Event} evt - Élément HTML cible de l'événement.
   */
  onScroll(evt) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setSnackbarState();
    this.setDirectionState();
  }

  /**
   * Méthode setSnackbarState - Gère l'état du Snackbar en fonction du scroll.
   */
  setSnackbarState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if (this.scrollPosition > scrollHeight * this.scrollLimit) {
      this.html.classList.add('snackbar-is-hidden');
    } else {
      this.html.classList.remove('snackbar-is-hidden');
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
   * Méthode closeSnackbar - Ferme et Détruit le snackbar.
   * @param {Event} evt - Élément HTML cible de l'événement.
   */
  closeSnackbar(evt) {
    const target = evt.currentTarget;
    const closeSnackbar = target.dataset.closeSnackbar;

    this.html.dataset.snackbarIsClosed = closeSnackbar;

    Cache.set(`snackbar${this.dataId}`, closeSnackbar, true);

    // Enlève les EventListener et détruit la snackbar
    this.close.removeEventListener('click', this.closeSnackbar);
    window.removeEventListener('scroll', this.onScroll);
    this.element.remove();
  }

  /**
   * Méthode checkCache - Vérifie la clé de cache (ID de la snackbar).
   */
  checkCache() {
    const defaultValue = Cache.get(`snackbar${this.dataId}`);

    //Détermine si la snackbar doit apparaître à l'écran.
    if (defaultValue === undefined) {
      this.isHiding = false;
    } else {
      this.isHiding = true;
    }

    if (defaultValue) {
      this.html.dataset.snackbarIsClosed = defaultValue;
    }
  }
}
