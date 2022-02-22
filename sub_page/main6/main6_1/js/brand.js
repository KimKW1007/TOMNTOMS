(function($,window){
  var Tom_N_Toms_brand ={
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
      var sub_section1 = $('.sub_section1'),
          s_s1_b = sub_section1.find('.bottom'),
          sub_section2 = $('.sub_section2'),
          s_s2_item1 = sub_section2.find('.item1'),
          s_s2_item2 = sub_section2.find('.item2'),
          s_s2_item3 = sub_section2.find('.item3'),
          sub_section3 = $('.sub_section3'),
          list_item = sub_section3.find('.list_item'),
          sub_section4 = $('.sub_section4'),
          cnt = -1,
          add,
          load = false;

      $('li.desc > a').click(function(e){
        e.preventDefault();
        $('li.desc').toggleClass('show');
        $('.side_sub_menu').stop().slideToggle(300);
      })

      $(window).scroll(function(){
          $('#section4').addClass('show')
          if($(window).scrollTop() > 100){
            sub_section1.addClass('show');
          }
          if($(window).scrollTop() > 300){
            s_s1_b.addClass('show');
          }
          if($(window).scrollTop() > sub_section1.offset().top){
            s_s2_item1.addClass('show');
          }
          if($(window).scrollTop() > sub_section1.offset().top + 300){
            s_s2_item2.addClass('show');
            s_s2_item3.addClass('show');
          }
          if(load == false){
            if($(window).scrollTop() > sub_section2.offset().top + 400){
              load = true;
              sub_section3.addClass('show');
              add = setInterval(function(){
                cnt++
                list_item.eq(cnt).find('img').stop().animate({top : 0, opacity: 1},1000,'easeInOutBack')
                list_item.eq(cnt).find('p').stop().animate({top : 0, opacity: 1},1000,'easeInOutBack')
              },200)
              if(cnt > 7){
                clearInterval(add)
              }
            }
          }
          if($(window).scrollTop() > sub_section3.offset().top - 200){
            sub_section4.addClass('show');
          }
      })
  

    }
    
  }
  Tom_N_Toms_brand.init();
})(jQuery,window);