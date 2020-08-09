var $_GET = {},
    args = location.search.substr(1).split(/&/);
for (var i=0; i<args.length; ++i) {
    var tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    }
}


function loadMainPage(start,end){
  let title = $_GET["title"];
  if(title !== undefined && title !== null && title !== ""){
    for(let i=start;i<end+1;i++){
      var node = document.createElement("LI");
      var linkTag = document.createElement("A");
      var textnode = document.createTextNode(i.toString()+" 화");   
      linkTag.setAttribute("href", `/view.html?title=${title}&epi=${i}`)     
      linkTag.appendChild(textnode);     
      node.appendChild(linkTag);              
      document.getElementById("wt-tiltes").appendChild(node);
    }
  }else{
    window.location.href = "/";
  }
}


async function loadJson () {
  var result = true; 
  await fetch(
    "/datas.json"
  )
    .then(response => response.json())
    .then(json => {
      let korean_name = json.webtoon.korean[$_GET["title"]];
      document.title = korean_name + " 무료 보기";
      document.getElementById("title").innerHTML = korean_name;
      document.getElementById("title-img").src = `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${$_GET["title"]}/${$_GET["title"]}.jpg`;
      let epi = json.webtoon.epi[$_GET["title"]];
      loadMainPage(parseInt(epi.start), parseInt(epi.end));
    });
}
loadJson (); 

function toBottom() {
  document.body.scrollTop = document.body.scrollHeight;
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}