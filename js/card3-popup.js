$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы    
  PopUpCardHide();
});
//Функция отображения PopUp
function PopUpCardShow(){
  $("#popup2, #popup_hide_card").show();
}
//Функция скрытия PopUp
function PopUpCardHide(){
  $("#popup2, #popup_hide_card").hide();
}