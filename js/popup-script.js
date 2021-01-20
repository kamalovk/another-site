$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы    
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
  $("#popup1, #popup_hide").show();
}
//Функция скрытия PopUp
function PopUpHide(){
  $("#popup1, #popup_hide").hide();
}
