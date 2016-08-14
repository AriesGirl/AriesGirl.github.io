var renderTab = function(){
    var tabHead = Helper.dom('tabHead');
    var tabBody = Helper.dom('tabbody');
    var tabAs = tabHead.getElementsByTagName('li');
    var tabDivs = tabBody.getElementsByTagName('div');
    var len = tabAs.length;
    // console.log(tabAs);
    // 
    if(tabAs.length != tabDivs.length){
        return;
    }    // 如果li的数量不等于div的数量 则无法进行

    for(var i=0; i<len; i++){

        tabAs[i].setAttribute('index',i);

        tabAs[i].onclick = function(){

            var currIndex = this.getAttribute('index');
            // alert(currIndex);
            
            for (var j=0; j<len; j++){
                tabAs[j].className = '';
                tabDivs[j].className = '';
                // tabDivs[j].style.display = 'none'; 
            }

            this.className = 'on';

            tabDivs[currIndex].className = 'onn';
            // tabDivs[currIndex].style.display = 'block';


        }

    }
    

};

renderTab();