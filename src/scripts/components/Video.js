/** Composante Snackbar de Timtools */
export default class Video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    this.videoContainer = this.element.querySelector('.js-video');
    this.poster = this.element.querySelector('.js-poster');
    this.videoId = this.element.dataset.videoId;
    this.autoplay = this.poster ? 1 : 0;
    this.playerReady = false;
    this.showControls = this.element.dataset.showControls == 'true' ? 1 : 0;

    Video.instances.push(this);

    //Vérifie si l'élément HTML de la vidéo possède un ID.
    if (this.videoId) {
      Video.loadScript();
    } else {
      console.error('Vous devez spécifier un ID.');
    }
  }

  /**
   * Méthode loadScript - Démarre le chargement de la librairie externe YouTube en créant une balise script
   */
  static loadScript() {
    if (!Video.scriptIsLoading) {
      Video.scriptIsLoading = true;
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.initPlayer = this.initPlayer.bind(this);

    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer);
    } else {
      this.initPlayer.bind(this);
    }
  }

  /**
   * Méthode initPlayer - Initialisation du player de YouTube.
   * @param {Event} evt - Élément HTML cible de l'événement.
   */
  initPlayer(evt) {
    if (evt) {
      this.element.removeEventListener('click', this.initPlayer);
    }

    // Options par défaut pour la librairie YouTube
    this.player = new YT.Player(this.videoContainer, {
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      playerVars: { rel: 0, autoplay: this.autoplay, controls: this.showControls },
      events: {
        onReady: () => {
          this.playerReady = true;

          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px',
          });
          observer.observe(this.element);
        },
        onStateChange: (evt) => {
          if (evt.data == YT.PlayerState.PLAYING) {
            Video.pauseAll(this);
          } else if (evt.data == YT.PlayerState.ENDED) {
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    });
  }

  /**
   * Méthode watch - Vérifie si des players sortent de la vue de l'utilisateur
   * @param {Event} entries - Élément HTML du player.
   */
  watch(entries) {
    if (this.playerReady && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }

  /**
   * Méthode d'initialisation de tous les vidéos
   */
  static initAll() {
    document.documentElement.classList.add('is-video-ready');

    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      instance.init();
    }
  }

  /**
   * Méthode pauseAll - Met en pause tous les vidéos ne devant pas jouer.
   * @param {HTMLElement} currentInstance - Élément HTML du player cliqué
   */
  static pauseAll(currentInstance) {
    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];

      if (instance.playerReady && instance !== currentInstance) {
        instance.player.pauseVideo();
      }
    }
  }
}

//Array contenant tous les players de la page HTML
Video.instances = [];

/**
 * Méthode pour charger toute la librairie JS de YouTube
 * Remplacée par la méthode initAll()
 */
window.onYouTubeIframeAPIReady = Video.initAll;
