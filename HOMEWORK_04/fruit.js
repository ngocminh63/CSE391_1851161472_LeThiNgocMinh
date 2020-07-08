//xac dinh cac phan tu bi tac dong
var jFruit     = document.getElementById('txtFruit');
var jShowFruit = document.getElementById('btnShowFruit');
var jImgFruit  = document.getElementById('imgFruit');

//bat su kien
jShowFruit.addEventListener('click',showResult);

//khai bao chi tiet ham xu li du lieu
function showResult(){
    var getFruit = jFruit.value;
    jImgFruit.setAttribute('scr','images/'+getFruit+'.jpg');
}

