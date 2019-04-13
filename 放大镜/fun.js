function scroll() {
    if(window.pageYOffset !== undefined){
    return{
        left:window.pageXOffset,
        top:window.pageYOffset
    }
    }
    else if(document.compatMode === "CSS1Compat"){
        return{
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return{
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
//封装动画
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 12)
}
function animate_top(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        if (Math.abs(target - ele.offsetTop) < Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 20)
}
//鼠标点击
function onclick(event) {
   event = event || window.event;
   var pagex = event.pageX || event.clientX + scroll().left;
   var pagey = event.pageY || event.clientY + scroll().top;
}
 function show(ele){
            ele.style.display="block";
           }

function hide(ele){
               ele.style.display="none";
           }