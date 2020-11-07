Vue.component('bookmark-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

const app = new Vue({
  el: '#vue',
  data: {
    newBookmarkText: '',
    newBookmarkEpi: '',
    bookmark_data:{},
    is_loading: true,
  },
  mounted (){
    this.load_bookmark_data()
  },
  methods: {
    addNewBookmark: function () {
      this.bookmark_data["bookmarks"].push({
        id: this.bookmark_data.nextBookmarkId++,
        title: this.newBookmarkText,
        epi: this.newBookmarkEpi,
      })
      this.newBookmarkText = '';
      this.saveBookmark();
    },
    remove_item: function(index){
      this.bookmark_data.bookmarks.splice(index, 1);
      this.saveBookmark();
    },
    saveBookmark:function(){
      localStorage.setItem("bookmark",JSON.stringify(this.bookmark_data))
    },
    load_bookmark_data: function(){
      if(localStorage.getItem("bookmark") === null){
        localStorage.setItem("bookmark",JSON.stringify({"bookmarks":[],"nextBookmarkId":0}))
      }
      this.bookmark_data =  JSON.parse(localStorage.getItem("bookmark"));
      this.is_loading = false;
    },
  }
})