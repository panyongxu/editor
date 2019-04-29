import Vue from 'vue'
import router from './router.js'
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueQuillEditor);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
