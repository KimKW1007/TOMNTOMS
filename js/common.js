(function($,window){
  var Tom_N_Toms ={
    init:function(){
      this.header();
      this.go_top();
    },
    header:function(){
      var nav = $('#nav'),
          main_menu = nav.find('.main'),
          sub_menu = nav.find('.sub_menu'),
          wind = $(window);

          wind.scroll(function(){
            if(wind.scrollTop() > 50){
              $('#header').addClass('down')
            }else{
              $('#header').removeClass('down')
            }
          })

          main_menu.on({
            mouseenter: function(){
              $(this).find('.sub_menu').stop().fadeIn(400,'easeOutQuad')
            },
            mouseleave:function(){
              sub_menu.stop().fadeOut(50,'easeInQuad')
            }
          })
         


    },
    go_top:function(){
      var btn = $('.go_top_btn'),
          wind = $(window);

          wind.scroll(function(){
            if($(this).scrollTop() > 100){
              btn.addClass('show')
            }else{
              btn.removeClass('show')
            }
          })
          btn.on({
            click:function(e){
              e.preventDefault();
             $('html,body').stop().animate({scrollTop:0},1200,'easeInOutQuart')
            }
          })
    }
  }
  Tom_N_Toms.init();
})(jQuery,window);