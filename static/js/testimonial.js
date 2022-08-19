$(document).ready(
    (function () {
      $(".client-single").on("click", function (event) {
        event.preventDefault();
  
        var active = $(this).hasClass("active");
  
        var parent = $(this).parents(".testi-wrap");
  
        if (!active) {
          var activeBlock = parent.find(".client-single.active");
  
          var currentPos = $(this).attr("data-position");
  
          var newPos = activeBlock.attr("data-position");
  
          activeBlock
            .removeClass("active")
            .removeClass(newPos)
            .addClass("inactive")
            .addClass(currentPos);
          activeBlock.attr("data-position", currentPos);
  
          $(this)
            .addClass("active")
            .removeClass("inactive")
            .removeClass(currentPos)
            .addClass(newPos);
          $(this).attr("data-position", newPos);
        }
      });
    })(jQuery)
  );
  