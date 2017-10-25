import Vue from 'vue'
import App from './App.vue'

//全局filters
//Vue.filter('to-lowercase');

Vue.filter('to-lowercase', function(value){
    return value.toLowerCase();
});

Vue.filter('calculateLength', (value) => {
    return value + '(' + value.length + ')';
})

//全局mixin
Vue.mixin({
    created(){
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
