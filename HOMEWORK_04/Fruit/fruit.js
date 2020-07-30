//xac dinh cac phan tu bi tac dong
var jFruit     = document.getElementById('txtFruit');
var jShowFruit = document.getElementById('btnShowFruit');
var jImgFruit  = document.getElementById('imgFruit');
alert('Co chay den day') 
//bat su kien
//su kien click - tac dong vao dau ? nut nhan show fruit
jShowFruit.addEventListener('click',showResult);
//showResult: hàm kiểm tra
//  showfruit.addEventListneer('click',function(){ 
//      let getFruit = jFruit.value;
//      imgfuit.setAttribute('src','images/'+getFruit+'.jpg')
//  })

//khai bao chi tiet ham xu li du lieu
function showResult(){
    var getFruit = jFruit.value;
    jImgFruit.setAttribute('src','images/'+getFruit+'.jpg');
}
//$(document).ready(function(){
 //   $(#btnShowFruit). click(function(){
   //     let getFruit =$(#txtFruit).val();
     //   $(#imgFruit).attr('src','images/'+getFruit+'.jpg')
    //})
//})











