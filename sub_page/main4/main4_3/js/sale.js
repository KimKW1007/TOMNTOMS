(function($,window){
  var Tom_N_Toms_sale ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
    },
    section1:function(){
      
    },
    section2:function(){
      
    },
    section3:function(){
       
    },
    section4:function(){
     $(window).scroll(function(){
       if($(this).scrollTop() > $('#section1').offset().top + 200){
         $('#section4').addClass('show')
       }
     })
    },
    section5:function(){
      var s5 = $('#section5'),
          step_span_top = s5.find('.step_inner .top div'),
          step_span_top_last = s5.find('.step_inner .top div:last-child'),
          step_span_bot = s5.find('.step_inner .bottom div'),
          step_span_bot_first = s5.find('.step_inner .bottom div:first-child'),
          detail_view = s5.find('.detail_view'),
          cnt = -1,
          cnt2 = 4,
          load = false;

      
      $(window).scroll(function(){
        if(load == false){
          if($(window).scrollTop() > $('#section3').offset().top+100){
            load = true;
            setInterval(function(){
              cnt++
              if(cnt < step_span_top.length){
                stepFn()
              }
            },150)
            setInterval(function(){
              if(step_span_top_last.find('span').hasClass('show') && cnt2 > -1){
                cnt2--
              }
              stepFn2()
            },150)
          }
        }
      })
      function stepFn(){
        step_span_top.eq(cnt).find('span').addClass('show')
      }
      function stepFn2(){
        step_span_bot.eq(cnt2).find('span').addClass('show')
      }
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section4').offset().top){
          if(step_span_bot_first.find('span').hasClass('show')){
            s5.addClass('show')
          }
        }
      })
    },
    section6:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section5').offset().top + 400){
            $('#section6').addClass('show')
        }
      })
    },
    section7:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section6').offset().top - 200){
            $('#section7').addClass('show')
        }
      })
    },
    section8:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section7').offset().top - 200){
            $('#section8').addClass('show')
        }
      })
    }
    
  }
  Tom_N_Toms_sale.init();
})(jQuery,window);