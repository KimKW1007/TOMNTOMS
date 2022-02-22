(function($,window){
  var Tom_N_Toms_newMenu ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
    },
    section1:function(){
        $('#section1').addClass('show')
    },
    section2:function(){
        $('#section2').addClass('show')
    },
    section3:function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > 300)
        $('#section3').addClass('show')
      })
    }
    
  }
  Tom_N_Toms_newMenu.init();
})(jQuery,window);