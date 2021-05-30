// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scroll_function()};

function scroll_function() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    NAVBAR.style.padding = "30px 10px";
    LOGO.style.fontSize = "0px";
    READ_INSTRUCTIONS.style.fontSize = '0px'
    PHONE_NUMBER[0].style.height = '0px'
    PHONE_NUMBER[1].style.height = '0px'
    PHONE_NUMBER[0].style.visibility = 'hidden'
    PHONE_NUMBER[1].style.visibility = 'hidden'
    NAVBAR.style.height = '120px' 
    PHONE_NUMBER_CONTAINER.style.marginTop = '0rem';
    STATES_DROPDOWN.style.marginTop = '-2rem';
    DISTRICT_DROPDOWN.style.marginTop = '-2rem';
  } else {
    NAVBAR.style.padding = "80px 10px";
    LOGO.style.fontSize = "35px";
    LOGO.style.float = 'none'    
    LOGO.style.textAlign = 'center';
    LOGO.style.marginLeft = '0'
    PHONE_NUMBER[0].style.height = '40px'
    PHONE_NUMBER[1].style.height = '40px'
    PHONE_NUMBER[0].style.visibility = 'visible'
    PHONE_NUMBER[1].style.visibility = 'visible'    
    READ_INSTRUCTIONS.style.fontSize = 'small'
    NAVBAR.style.height = '450px'
    PHONE_NUMBER_CONTAINER.style.marginTop = '5rem';
    STATES_DROPDOWN.style.marginTop = '5rem';
    DISTRICT_DROPDOWN.style.marginTop = '5rem';
  }
}
