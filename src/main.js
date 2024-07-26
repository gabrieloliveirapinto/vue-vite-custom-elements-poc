import './assets/main.css'

import { createSSRApp, defineCustomElement } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

import ContentBuilderButton from './components/ContentBuilder/ContentBuilderButton.ce.vue';
import ContentBuilderButtonGroup from './components/ContentBuilder/ContentBuilderButtonGroup.ce.vue';
import ContentBuilderCard from './components/ContentBuilder/ContentBuilderCard.ce.vue';
import ContentBuilderImage from './components/ContentBuilder/ContentBuilderImage.ce.vue';
import ContentBuilderTextBox from './components/ContentBuilder/ContentBuilderTextBox.ce.vue';

customElements.define('cly-content-builder-button', defineCustomElement(ContentBuilderButton));
customElements.define('cly-content-builder-button-group', defineCustomElement(ContentBuilderButtonGroup));
customElements.define('cly-content-builder-card', defineCustomElement(ContentBuilderCard));
customElements.define('cly-content-builder-image', defineCustomElement(ContentBuilderImage));
customElements.define('cly-content-builder-text-box', defineCustomElement(ContentBuilderTextBox));

renderToString(createSSRApp(App))
  .then((html) => {
    document.getElementById('app').innerHTML = html;
  });
