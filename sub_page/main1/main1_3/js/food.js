(function($,window){
  var Tom_N_Toms_food ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
      this.section4();
    },
    section1:function(){
      
    },
    section2:function(){
      
    },
    section3:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >= 10){
          $('#section3').addClass('show')
        }
        if($(this).scrollTop() >= 250){
          $('.search_result').addClass('show')
        }
      })
      

    },
    section4:function(){
      var show_itmes = $('.show_itmes'),
          main_list_item = show_itmes.find('.main_list_item'),
          detail_btn = main_list_item.find('> a'),
          detail_view = main_list_item.find('.detail_view'),
          detail_cl_btn = detail_view.find('.cl_btn'),
          more_view_btn = $('.more_view_btn');
          
          
          $(window).scroll(function(){
            if($(this).scrollTop() >= 300){
              $('#section4').addClass('show')
            }
          })
          more_view_btn.on({
            click:function(e){
              e.preventDefault();
              show_itmes.addClass('show')
            }
          })
 
          detail_view.stop().hide()
          detail_btn.each(function(){
            $(this).on({
              click:function(e){
                e.preventDefault();
                $(this).next().stop().show()
              }
            })
          })

          detail_view.each(function(){
            $(this).find(detail_cl_btn).on({
              click:function(e){
                e.preventDefault();
                $(this).parent().stop().hide()
              }
            })
          })
    }
    
  }
  Tom_N_Toms_food.init();
})(jQuery,window);