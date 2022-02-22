(function($,window){
  var Tom_N_Toms_myTom ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.section10();
      this.section11();
      this.section12();
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
       if($(this).scrollTop() > $('#section1').offset().top ){
         $('#section4').addClass('show')
       }
     })
    },
    section5:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section3').offset().top ){
          $('#section5').addClass('show')
        }
      })
    },
    section6:function(){
     var s6 = $('#section6'),
     register_inner = s6.find('.register_inner'),
     inner_div = register_inner.find('>div'),
     inner_div_last = register_inner.find('>div:last-child'),
     add_txt = s6.find('.add_txt'),
     cnt = -1,
     load = false,
     add;

     $(window).scroll(function(){
       if(load == false){
         if($(this).scrollTop() > $('#section3').offset().top ){
           load = true;
           $('#section6').addClass('show')
           add = setInterval(function(){
              cnt++
              inner_div.eq(cnt).addClass('show')
              if(inner_div_last.hasClass('show')){
                 setTimeout(function(){
                  add_txt.addClass('show')
                 },600) 
                  console.log('second');
                  clearInterval(add)
              }
             },200)
         }
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
    },
    section9:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section8').offset().top - 200){
            $('#section9').addClass('show')
        }
      })
    },
    section10:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section9').offset().top - 200){
            $('#section10').addClass('show')
        }
      })
    },
    section11:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section10').offset().top){
            $('#section11').addClass('show')
        }
      })
    },
    section12:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section11').offset().top - 400){
            $('#section12 .s12_w1').addClass('show')
        }
        if($(this).scrollTop() > $('#section12 .s12_w1').offset().top - 300){
            $('#section12 .s12_w2').addClass('show')
        }
        if($(this).scrollTop() > $('#section12 .s12_w2').offset().top - 400){
            $('#section12 .s12_w3').addClass('show')
        }
        if($(this).scrollTop() > $('#section12 .s12_w3').offset().top){
            $('#section12 .s12_w4').addClass('show')
        }
      })
    }
  }
  Tom_N_Toms_myTom.init();
})(jQuery,window);