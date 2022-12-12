import Vue from 'vue';
import IndexComponent from './IndexComponent.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(IndexComponent),
}).$mount('#app');
