/** Composante statique Cache de Timtools */
export default class Cache {
  /**
   * Méthode set - Crée une nouvelle donnée dans le localStorage.
   * @param {string} key - Clé de cache
   * @param {string} value - Valeur string de la clé de cache
   * @param {bool} force - Force une nouvelle clé de cache   *
   */
  static set(key, value, force) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le localStorage");
    } else if (value === undefined) {
      console.error("Vous n'avez pas fourni de valeur pour le localStorage");
    } else if (Cache.isLocalStorageAvailable()) {
      if (!Cache.get(key) || force === true) {
        key = `TT_${key}`;
        localStorage.setItem(key, value);
      } else {
        console.error('La clé que vous avez fournie est déjà utilisée. Forcer au besoin.');
      }
    }
  }

  /**
   * Méthode get - Obtient un donnée de cache en fonction d'une clé.
   * @param {string} key - Clé de cache
   * @param {string} defaultValue - Valeur par défaut de la clé de cache
   */
  static get(key, defaultValue) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le localStorage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`;
      return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue;
    }
  }

  /**
   * Méthode remove - Retire une clé du localStorage.
   * @param {string} key - Clé de cache
   */
  static remove(key) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le localStorage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`;
      localStorage.removeItem(key);
    }
  }

  /**
   * Méthode isLocalStorageAvailable - Vérifie si le localStorage est accessible.
   */
  static isLocalStorageAvailable() {
    const test = '__timTools__';

    //Essai de créer un clé dans le LocalStorage.
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test, test);
      return true;
    } catch (error) {
      console.error("LocalStorage n'est pas disponible sur votre navigateur.");
    }
  }
}
