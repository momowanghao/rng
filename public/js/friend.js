var li=document.getElementsByClassName("nav")[0]//点击圈子时弹出下拉框
.children[0]
.children[5];
// console.log(li);
li.onclick=function(){
var ul=document.getElementById("friend");
console.log(ul);
if(ul.className==""){
ul.className="friend";
}else{
ul.className="";
}
}