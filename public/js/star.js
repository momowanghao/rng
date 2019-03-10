var arr1=["star1.html","star11.html","star12.html","star13.html"];
var star1=document.getElementsByClassName("star1")[0]
                  .children[0];
var star11=document.getElementsByClassName("star1")[0]
                  .children[1];
var star12=document.getElementsByClassName("star1")[0]
                  .children[2];
var star13=document.getElementsByClassName("star1")[0]
                  .children[3]  
function stars(a,n){
    a.onclick=function(){
        window.open(arr1[n])
    }
}
stars(star1,0);
stars(star11,1);
stars(star12,2);
stars(star13,3);