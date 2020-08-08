var $_GET = {},
    args = location.search.substr(1).split(/&/);
for (var i=0; i<args.length; ++i) {
    var tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    }
}


function loadMainPage(){
  let title = $_GET["title"];
  let epi = $_GET["epi"];
  if(title === undefined || epi === undefined){
    window.location.href = "/";
  }else{
    document.title = title + " " + epi + "화";
    document.getElementById("iframes").src = `https://qpo9w6tvvhkbvesizqvshw-on.drv.tw/web/${title}/${epi}/${epi}.html`;
    document.getElementById("leftBtnLink").href = `/view.html?title=${title}&epi=${parseInt(epi) - 1}`;
    document.getElementById("middleBtnLink").href = "/menu.html?title=" + title;
    document.getElementById("rightBtnLink").href = `/view.html?title=${title}&epi=${parseInt(epi) + 1}`;
  }
}

loadMainPage();