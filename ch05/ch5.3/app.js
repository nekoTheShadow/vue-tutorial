Vue.directive('fallback-image', {
  bind: function(el) {
    el.addEventListener('error', function(el, binding){
      console.log('bind', binding)
      el.src = "https://dummyimage.com/400x400/000/fff.png&text=no+image";
    })
  },

  update: function(el, binding) {
    console.log('update', binding);
  }
})

var vm = new Vue({
  el: '#app',
  data: function() {
    return {
      altText: 'logo'
    }
  }
})