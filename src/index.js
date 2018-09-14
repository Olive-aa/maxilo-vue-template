import maxiloVue from 'maxilo-vue';
import App from './App';
import './config';
import './router/index.js';
import './store/index.js';
import './i18n';
import './utils';
import './component';
maxiloVue.targetComponent = App;
maxiloVue.run();