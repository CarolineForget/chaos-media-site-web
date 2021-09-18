import Swiper from 'swiper/bundle';

/** Composante Carousel de Timtools */
export default class Carousel {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    // Options par défaut pour la librairie Swiper
    this.defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    let options = this.defaultOptions;

    // Gestion des paramètres différents lorsqu'on veut avoir
    // 2 slides visibles sur grand écran et une seule sur petit écran
    if (this.element.dataset.carousel == 'split') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        },
      };
    }

    // 2 slides par colonne en une vue
    if (this.element.dataset.carousel == 'column') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          slidesPerColumn: 2,
          spaceBetween: 30,
          slidesPerColumnFill: 'row',
        },
      };
    }

    // Instanciation d'un nouveau Swiper avec les options
    new Swiper(this.element, options);
  }
}
