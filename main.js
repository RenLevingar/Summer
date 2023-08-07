// Makes the header fade whenever you scroll
$(document).ready(function(){
    $(document).on("scroll", pageScroller);
  });

  function pageScroller(){
    if($(document).scrollTop() != 0){
      $(".header-bg").css("background-color", "rgba(0,0,0,0.25)");
    } else {
      $(".header-bg").css("background-color", "");
    }
  }