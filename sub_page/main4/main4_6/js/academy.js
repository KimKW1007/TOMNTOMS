(function($,window){
  var Tom_N_Toms_academy ={
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
      $('#section3').addClass('show')
    },
    section4:function(){
     $(window).scroll(function(){
       if($(this).scrollTop() > $('#section1').offset().top){
          $('#section4').addClass('show')
       }
     })
    },
    section5:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section2').offset().top - 200){
           $('#section5').addClass('show')
        }
      })
    },
    section6:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section4').offset().top - 150){
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
    
    }
  }
  Tom_N_Toms_academy.init();
})(jQuery,window);