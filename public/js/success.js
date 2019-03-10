var arr=["https://v.qq.com/x/page/o0195gb7mys.html","https://www.bilibili.com/video/av22682930?from=search&seid=12950852071591927266","https://www.bilibili.com/video/av23701283?from=search&seid=7839568087963351949","https://www.bilibili.com/video/av31697187?from=search&seid=8687405471687776268","https://v.qq.com/x/cover/dnvi24j7idm7eht/y0824gcedei.html","https://v.qq.com/x/cover/dnvi24j7idm7eht/y0824gcedei.html"]
var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
var d3=document.getElementById("d3");
var d4=document.getElementById("d4");
var d5=document.getElementById("d5");
var d6=document.getElementById("d6");
function vail(a,b){
    a.onmouseover=function(){
      this.children[1].className="";
    }
    a.onmouseout=function(){
        this.children[1].className="txt";
    }
    a.onclick=function(){
        var url=arr[b];
        window.open(url);
    }
}
vail(d1,0);
vail(d2,1);
vail(d3,2);
vail(d4,3);
vail(d5,4);
vail(d6,5);