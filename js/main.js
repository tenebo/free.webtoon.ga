Vue.component('webtoontitle', {
  props: ['name', "koreanname"],
  data:function(){
    return {
      imgSrc: `https://qpo9w6tvvhkbvesizqvshw.on.drv.tw/web/${this.name}/${this.name}.jpg`,
    }
  },
  methods:{
    onclickurl:function(){
      window.location.href = `/menu.html?title=${this.name}`
    },
  },
  template: `
  <div class="wt">
    <a v-bind:href="'/menu.html?title='+this.name">
      <img v-bind:src="imgSrc">
      <p class="korean-font text">{{koreanname}}</p>
    </a>
  </div>
  `,
})

var app = new Vue({
  el: '#vue',
  data: {
    WebtoonData: ""
  },
  beforeMount(){
    this.getName()
  },
  methods: {
    async getName(){
      const res = await fetch('/datas.json');
      const data = await res.json();
      this.WebtoonData = data;
    }
  }
})

function loadTo(url){
  window.location.href = url;
}

function searchWt() { 
    let input = document.getElementById('searchBar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('wt'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="block";                  
        } 
    } 
} 
