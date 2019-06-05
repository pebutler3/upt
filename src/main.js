import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from './router';

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPH_CMS_URI,
});

Vue.use(VueApollo)
Vue.use(VueRouter)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
