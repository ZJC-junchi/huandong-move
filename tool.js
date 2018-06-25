/**
 * Created by Administrator on 2018/1/3.
 */
<!--缓动动画-->
function huandong(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var speed = (target - ele.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        ele.style.left = ele.offsetLeft + speed + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(speed)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer)
        }
    }, 30)
}
//我是dev分支的测是哈
//我是第二次插入的测试文字
//倒计时
// function djs() {
//     var today=new Date();
//     var timeCha=future.getTime()-today.getTime();
//     var day=parseInt(timeCha/1000/60/60/24);
//     var hour=parseInt(timeCha/1000/60/60%24);
//     var min=parseInt(timeCha/1000/60%60);
//     var miao=parseInt(timeCha/1000%60);
//     var hmiao=parseInt(timeCha%1000);
//     if(day<10){
//         day="0"+day
//     }
//     if(hour<10){
//         hour="0"+hour;
//     }
//     if(miao<10){
//         miao="0"+miao;
//     }
//     if(hmiao<10){
//         hmiao="00"+hmiao;
//     }
//     if(10<hmiao<100){
//         hmiao="0"+hmiao;
//     }
// }

//匀速动画
function yunsu(ele, target) {
    clearInterval(ele.timer);
    var speed = target > ele.offsetLeft ? 10 : -10;
    ele.timer = setInterval(function () {
        var cha = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        if (Math.abs(cha) <= Math.abs(speed)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer)
        }
    }, 10)
}


//    兼容性写法
function scrolll() {
    return {
        "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    }
}


//    client兼容性写法
function client() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            widtn: document.documentElement.innerWidth,
            height: document.documentElement.innerHeight
        }
    } else {
        return {
            widtn: document.body.innerWidth,
            height: document.body.innerHeight
        }
    }
}
//    获取style
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}



//      牛逼缓动框架
function animate(ele, json,fn) {
//        清除定时器
    clearInterval(ele.timer);
//        设置定时器
    ele.timer = setInterval(function () {
//            停止定时器的开关
        var bool =true;
        for(var k in json){
            var leader = parseInt(getStyle(ele, k)) || 0;
//        获取步长
            var step = (json[k] - leader) / 10;
//        二次处理步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        赋值
            ele.style[k] = leader + step + "px";
//        停止定时器
            if(leader!=json[k]){
                bool=false
            }
            if (Math.abs(json[k] - leader) <= Math.abs(step)) {
                ele.style[k] = json[k] + "px";
            }
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    }, 30);
}
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}
