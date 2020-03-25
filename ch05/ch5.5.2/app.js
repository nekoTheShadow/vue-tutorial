Vue.mixin({
  data: function() {
    return {loggedInUser: null}
  },
  created: function() {
    var auth = this.$options.auth;
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (auth && !this.loggedInUser) {
      window.alert('このページはログインが必要です。')
    }
  }
});

var LoginRequirePage = {
  auth: true,
  template: `
    <div>
      <p v-if="loggedInUser">
        {{loggedInUser.name}}さんでログインしています
      </p>
      <p v-else>
        このページはログインが必要です
      </p>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {LoginRequirePage}
})