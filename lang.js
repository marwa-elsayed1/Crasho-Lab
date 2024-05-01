getLanguage();
function getLanguage(){
  var currentLanguage=localStorage.getItem('lang');
  if(currentLanguage=='Ar')
    change_arabic();
  else 
    change_english();

}


