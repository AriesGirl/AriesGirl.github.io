/*var daojishi=function() {
    var btn=document.getElementById('btn');
    var tim=document.getElementById('tim');
    var unit=document.getElementById('unit');
    var time=$('time');
    var timer;
    var a=true;


    btn.onclick=function(){
        var sel=userSel.value;
        var ipt=userIpt.value;
        var total;
        if(isNaN(ipt)||ipt==''){
            alert('请输入一个数字！')
        }
        
        if (sel==0) {
            return
        };

        btn.innerHTML='倒计时暂停';
        btn.onclick=function(){
            if(a===false){
                startBtn.innerHTML='倒计时继续';
                a=true;
            }else{
                startBtn.innerHTML='倒计时暂停';
                a=false;                
            }

        };
        total = sel*ipt;
        countDown(total);

    }


    function countDown(seconds) {
        var h,m,s;
        timer=setInterval(function(){
            if(a){
                seconds--;
            }else{
                seconds;
            }
                if(seconds == 0){
                    filll = "0"+"0"+":"+"0"+"0"+":"+"0"+"0";
                    time.innerHTML=filll;
                    clearInterval(timer);

                    alert('倒计时结束');
                }else if(seconds<10){

                    time.style.color='red';
                }
                h=Math.floor(seconds/(60*60));
                m=Math.floor((seconds%(60*60))/60);
                s=Math.floor(seconds%60);
        
                time.innerHTML=fill0(h)+':'+fill0(m)+':'+fill0(s);
        },1000);
    }
}
daojishi();*/


// var countDown = function(){
//     var btn = Helper.dom('btn');
//     var time = Helper.dom('time');

//     btn.onclick = function(){
//         var inp = Helper.dom('input').value;
//         var unit = Helper.dom('unit').value;
//         var Seconds,h,m,s;
//         var timer;

//         if (isNaN(inp) || inp == '') {
//             alert('请输入数字！');
//             return;
//         }

//         if(unit == 0){
//             alert('请选择一个时间单位！');
//             return;
//         }

//         Seconds = inp * unit;

//         function runner(){
//             if (Seconds <= 0){
//                 clearInterval(timer);
//                 alert('时间到了！');
//             }

//             if (Seconds <= 10){
//                 time.style.color = 'red';
//                 if(Seconds%2==0){
//                     time.style.color = "yellow";
//                     // time.style.fontSize = "40px";

//                 }else{
//                     // time.style.fontSize = "45px";
//                     time.style.color = "red";
//                 }
//             }

//             h = Math.floor(Seconds / (60 *60));
//             m = Math.floor(Seconds % (60 *60) / 60);
//             s = Seconds % 60;
//             time.innerHTML=(Helper.fill0(h)+':'+Helper.fill0(m) +':'+Helper.fill0(s));
//             Seconds--;
//         }

//         timer = setInterval(runner,1000);
//         runner();  
//     }    
// };
// countDown();


/*
function writeDate (){
    var time = 60 * 60 * 3; //三个小时
    setInterval( function (){
        time--
        
        var hours = Math.floor(time  / 60 /60 );
        var minutes = Math.floor(time  / 60 % 60);
        var second = Math.floor(time  % 60);
        var tmpStr = fill0(hours) + ':' + fill0(minutes) + ':'+ fill0(second);
        document.getElementById('box').innerHTML = tmpStr;
    },1000)
    
}

writeDate();
*/

