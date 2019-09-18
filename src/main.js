import Vue from "vue";
import App from "./App";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const client = new ApolloClient({
  uri: "https://breaking-bad-voting.herokuapp.com/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
