import Carousel from './components/Carousel';
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Video from './components/Video';
import Form from './components/Form';
import Snackbar from './components/Snackbar';
import Modal from './components/Modal';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Carousel,
      Header,
      Scrolly,
      Video,
      Form,
      Snackbar,
      Modal, //
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
