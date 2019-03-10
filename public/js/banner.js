var items=document.getElementsByClassName("imgs")[0]
                  .children;
var gobefore=document.getElementsByClassName("left")[0];
var gonext=document.getElementsByClassName("right")[0];
var points=document.getElementsByClassName("point")[0]
                  .children;
var time=0;                  
//  console.log(items[0].className);
//  console.log(point[0]);
var item=0;
var clearActive=function(){
    for(var i=0; i<items.length;i++){
        items[i].className="";
        points[i].className="";
    }
}
var  goIndex=function(){
    clearActive();
    items[item].className="active";
    points[item].className="po";
}
var gon=function(){
    if(item<items.length-1){
        item++;
    }else{
        item=0;
    }
    goIndex();
}
var gob=function(){
    if(item>0){
        item--;
    }else{
        item=items.length-1;
    }
    goIndex();
}
gonext.addEventListener("click",function(){
    gon();
    time=0;
});
gobefore.addEventListener("click",function(){
    gob();
    time=0;
});
for(var i=0;i<points.length;i++){
    points[i].addEventListener("click",function(){
        var pointIndex=this.getAttribute("data-index");
        item=pointIndex;
        goIndex();
        time=0;
    })
};
// var ban=setInterval(function(){
//     gon();
// },2000);
// for(var i=0;i<items.length;i++){
//     items[i].addEventListener("mouseover",function(){
//         var ban=setInterval(function(){
//             gon();
//         },2000);
//     })
//     items[i].addEventListener("mouseout",function(){
//         clearInterval(ban);
//     })
// }
setInterval(function(){
    time++;
    if(time==20){
        gon();
        time=0;
    }
},100)
