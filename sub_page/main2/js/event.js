(function($,window){
  var Tom_N_Toms_event ={
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
      })
    },
    section4:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >= 300){
          $('#section4').addClass('show')
        }
      })
      $('#section4').find('a').on({
        click:function(e){
          e.preventDefault();
        }
      })




    }
    
  }
  Tom_N_Toms_event.init();
})(jQuery,window);