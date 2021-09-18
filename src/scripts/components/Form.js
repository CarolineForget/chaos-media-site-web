/** Composante Form de Timtools */
export default class Form {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.formElements = this.element.elements;

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.element.setAttribute('novalidate', '');

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required) {
        input.addEventListener('input', this.validateInput.bind(this));
      }
    }

    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  /**
   * Méthode onSubmit - Envoie le formulaire
   * @param {HTMLElement} evt - Élément HTML ciblé par l'événement
   */
  onSubmit(evt) {
    evt.preventDefault();

    //Vérifie si tous les champs sont bien remplis pour envoyer le formulaire.
    if (this.validate()) {
      this.showConfirmation();
    } else {
      console.error("Échec de l'envoie du formulaire.");
    }
  }

  /**
   * Méthode validate - Valide tous les éléments du formulaire
   */
  validate() {
    let isValid = true;
    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required && !this.validateInput(input)) {
        isValid = false;
      }
    }

    return isValid;
  }

  /**
   * Méthode validateInput - Vérifie un seul champ du formulaire
   * @param {HTMLElement} evt - Élément HTML du formulaire ciblé par l'événement
   */
  validateInput(evt) {
    const input = evt.currentTarget || evt;
    if (input.validity.valid) {
      this.removeError(input);
    } else {
      this.addError(input);
    }

    return input.validity.valid;
  }

  /**
   * Méthode addError - Ajoute la classe .error lorsque le champ est invalide
   * @param {HTMLElement} input - Élément HTML sélectionné
   */
  addError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.add('error');
  }

  /**
   * Méthode removeError - Retire la classe .error lorsque le champ est invalide
   * @param {HTMLElement} input - Élément HTML sélectionné
   */
  removeError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.remove('error');
  }

  /**
   * Méthode showConfirmation - Affiche la confirmation de l'envoie du formulaire
   */
  showConfirmation() {
    this.element.classList.add('is-sent');
  }
}
