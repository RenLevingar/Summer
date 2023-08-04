$(document).ready(function(){
    $(document).on("scroll", pageScroller);
  });

  function pageScroller(){
    if($(document).scrollTop() != 0){
      $(".header-bg").css("background-color", "rgba(0,0,190,0.75)");
    } else {
      $(".header-bg").css("background-color", "");
    }
  }