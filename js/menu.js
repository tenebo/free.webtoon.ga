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
  if(title !== undefined && title !== ""){
    for(let i=start;i<end+1;i++){
      var node = document.createElement("A");
      var textnode = document.createTextNode(i.toString()+" 화");   
      node.setAttribute("href", `/view.html?title=${title}&epi=${i}`)     
      node.appendChild(textnode);                   
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
      document.title = json.webtoon.korean[$_GET["title"]] + " 무료 보기";
      let epi = json.webtoon.epi[$_GET["title"]];
      loadMainPage(parseInt(epi.start), parseInt(epi.end));
    });
}
loadJson (); 