import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css'
import '@/assets/js/rem.js'
import '@/assets/css/common.css'
import iView from 'iview';

Vue.use(iView);
Vue.config.productionTip = false

//引入Mint组件库，按序要引入
import {Button,Header,Tabbar, TabItem,TabContainer, TabContainerItem,Cell,Checklist,Navbar,InfiniteScroll} from 'mint-ui';

//使用组件库
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name,Cell);
Vue.component(Checklist.name,Checklist);
Vue.component(Navbar.name, Navbar);
Vue.use(InfiniteScroll);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
