(function($,window){
  var Tom_N_Toms_comeWay ={
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
       
    },
    section4:function(){
      $('li.desc > a').click(function(e){
        e.preventDefault();
        $('li.desc').toggleClass('show');
        $('.side_sub_menu').stop().slideToggle(300);
      })
      
      $(window).scroll(function(){
        if($(this).scrollTop() > $('.map').offset().top){
          $('.sub_section1').addClass('show')
        }
      })


    }
    
  }
  Tom_N_Toms_comeWay.init();
})(jQuery,window);