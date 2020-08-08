function loadTo(url){
  window.location.href = url;
}

async function loadJson () {
  var result = true; 
  await fetch(
    "/datas.json"
  )
    .then(response => response.json())
    .then(json => {
      json.webtoon.titles.forEach(function(input){
        let remove_underline = input.replace(/_/g, " ");
        var node = document.createElement("DIV");//.setAttribute("onclick", `loadTo('menu.php?title=${input}')`) ;
        node.setAttribute("onclick", `loadTo('menu.php?title=${input}')`);
        var imgtag = document.createElement("IMG");
        imgtag.setAttribute("src", `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${input}/${input}.jpg`); 
        node.appendChild(imgtag);         
        var name = document.createElement("P");
        name.appendChild(document.createTextNode(remove_underline));
        node.appendChild(name);
        document.getElementById("wt-container").appendChild(node);
      })
    });
}
loadJson (); 