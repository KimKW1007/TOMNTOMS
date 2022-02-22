(function($,window){
  var Tom_N_Toms_soc ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      $('#wrap').mousedown(function(e){
        if(e.button == 2){
          alert('내용을 복사할 수 없습니다.')
        }
      })
    },
    section1:function(){
      
    },
    section2:function(){
      
    },
    section3:function(){
       
    },
    section4:function(){
     $(window).scroll(function(){
         $('#section4').addClass('show')
     })
     $('li.desc').click(function(e){
       e.preventDefault();
       $('li.desc').toggleClass('show');
       $('.side_sub_menu').stop().slideToggle(300);
     })
  
    }
    
  }
  Tom_N_Toms_soc.init();
})(jQuery,window);