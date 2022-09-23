let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');





themeButton.onclick = function() {
  //if(theme = 'l') {
      page.classList.toggle('light-theme');
      page.classList.toggle('dark-theme');
      //theme = 'b';
 /* }
    if(theme = 'b') {
      page.classList.toggle('light-theme');
      page.classList.toggle('dark-theme');
      theme = 'l';
  }*/
    
};
