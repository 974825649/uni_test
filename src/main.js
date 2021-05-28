import Vue from 'vue'
import App from './App'

// import mixin from './common/mixin/mixin'
import fn from './common/utils/assist.js'
Vue.prototype.$fn = fn;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
