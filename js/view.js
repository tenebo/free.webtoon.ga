      var elmnt = document.query("#myDIV");
      function onScolls(){
        if(beforeVar > elmnt.scrollTop){
          document.getElementById ("demo").innerHTML = "scoll up";
        }else{
        document.getElementById ("demo").innerHTML = "scoll down";
        }
        beforeVar = elmnt.scrollTop;
      }
