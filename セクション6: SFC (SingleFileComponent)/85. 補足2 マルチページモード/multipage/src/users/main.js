import Vue from 'vue';
import UsersComponent from './UsersComponent.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(UsersComponent),
}).$mount('#app');
