Vue.component('list-webtoon', {
  props: ['num', 'title'],
  data:function(){
    return {
      imgSrc: `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${this.name}/${this.name}.jpg`,
    }
  },
  template: `
  <li>
    <a v-bind:href="'/view.html?title='+title+'&epi='+num">{{num}} 화</a>
  </li>
  `,
})


var app = new Vue({
  el: '#vue',
  data: {
    WebtoonData: "",
    is_loading:true,
    //img_url: `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${this._GET["title"]}/${this._GET["title"]}.jpg`
  },
  mounted () {
    fetch('/datas.json')
      .then(response => response.json())
      .then(json => (this.WebtoonData = json))
      .then(this.load_title)
      .finally(() => this.is_loading = false)
  },
  computed:{
    _GET: function(){
      let _GET = {};
      let args= location.search.substr(1).split(/&/);
      for (var i=0; i<args.length; ++i) {
          var tmp = args[i].split(/=/);
          if (tmp[0] != "") {
              _GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
          }
      }
      if (this.WebtoonData.webtoon.titles.indexOf(_GET.title) === -1){
        window.location.href = "/404.html"
      }
      return _GET;
    },
    korean_title_name: function(){
      return this.WebtoonData.webtoon.korean[this._GET["title"]];
    },
    img_url: function(){
      return 'https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/'+this._GET.title+'/'+this._GET.title+'.jpg';
    },
    range: function() {
      let epi = this.WebtoonData.webtoon.epi[this._GET["title"]];
      var ans = [];
      for (let i = epi.start; i <= epi.end; i++) {
          ans.push(i);
      }
      return ans;
    },
  },
  methods: {
    load_title: function(){
      document.title = this.WebtoonData.webtoon.korean[this._GET.title] + " 무료 보기"
    }
  },
})

function toBottom() {
  document.body.scrollTop = document.body.scrollHeight;
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
