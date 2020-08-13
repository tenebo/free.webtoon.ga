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
        //let remove_underline = input.replace(/_/g, " ");
        var node = document.createElement("DIV");
        node.setAttribute("onclick", `loadTo('menu.html?title=${input}')`);
        node.setAttribute("class", "wt");
        var imgtag = document.createElement("IMG");
        imgtag.setAttribute("src", `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${input}/${input}.jpg`); 
        node.appendChild(imgtag);         
        var name = document.createElement("P");
        name.setAttribute("class", "korean-font")
        name.appendChild(document.createTextNode(json.webtoon.korean[input]));
        node.appendChild(name);
        document.getElementById("wt-container").appendChild(node);
      })
    });
}
loadJson (); 


function searchWt() { 
    let input = document.getElementById('searchBar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('wt'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 
