(function($,window){
  var Tom_N_Toms_lifeStore ={
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
      $(window).scroll(function(){
          $('#section3').addClass('show')
      })
    },
    section4:function(){
     $(window).scroll(function(){
       if($(this).scrollTop() > $('#section1').offset().top){
        $('#section4').find('.left1').addClass('show')
        $('#section4').find('.right1').addClass('show')
       }
     })
    },
    section5:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section4').offset().top ){
          $('#section5').addClass('show')
          $('#section5').find('.left1').addClass('show')
        }
        if($(this).scrollTop() > $('#section4').offset().top + 400){
          $('#section5').find('.left2').addClass('show')
          $('#section5').find('.right1').addClass('show')
        }
      })
    },
    section6:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section5').offset().top + 200 ){
          $('#section6').addClass('show')
          $('#section6').find('.right1').addClass('show')
        }
        if($(this).scrollTop() > $('#section5').offset().top + 700){
          $('#section6').find('.left1').addClass('show')
          $('#section6').find('.right2').addClass('show')
        }
      })

    },
    section7:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section6').offset().top + 200 ){
          $('#section7').addClass('show')
          $('#section7').find('.left1').addClass('show')
        }
        if($(this).scrollTop() > $('#section6').offset().top + 700){
          $('#section7').find('.left2').addClass('show')
          $('#section7').find('.right1').addClass('show')
        }
      })
    },
    section8:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section7').offset().top + 200 ){
          $('#section8').addClass('show')
          $('#section8').find('.right1').addClass('show')
        }
        if($(this).scrollTop() > $('#section7').offset().top + 700){
          $('#section8').find('.left1').addClass('show')
          $('#section8').find('.right2').addClass('show')
        }
      })
    }
  }
  Tom_N_Toms_lifeStore.init();
})(jQuery,window);