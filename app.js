var vm = new Vue({
  el: '#app',
  data: {
    items: undefined,
    text1: ''
  },
  mounted: function() {
  },
  methods: {
    btn_click: function() {
      //url = `${location.href}/data.json`;
      url = `https://furandon-pig.github.io/pages_sample/data.json`;
      console.log(url);
      fetch(url)
      .then((response) => { return response.json(); })
      .then((json) => {
        console.log(json);
	this.text1 = JSON.stringify(json.data, null, '  ');
        this.items = json.data;
      });
    }
  }
})

