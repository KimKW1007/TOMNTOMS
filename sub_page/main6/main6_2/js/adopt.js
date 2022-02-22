(function($,window){
  var Tom_N_Toms_adopt ={
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
          sub_s1_img_box = sub_section1.find('.img_txt_box .img'),
          sub_section2 = $('.sub_section2'),
          sub_s2_list_item = sub_section2.find('.img_txt_box .list_item'),
          sub_section3 = $('.sub_section3'),
          sub_s3_list_item = sub_section3.find('.img_txt_box  .list_item'),
          sub_section4 = $('.sub_section4'),
          cnt1 = -1,
          cnt2 = -1,
          cnt3 = -1,
          s1_load = false,
          s2_load = false,
          s3_load = false;

      $('li.desc > a').click(function(e){
        e.preventDefault();
        $('li.desc').toggleClass('show');
        $('.side_sub_menu').stop().slideToggle(300);
      })
    

      $(window).scroll(function(){
        if(s1_load == false){
          if($(window).scrollTop() > 300){
            s1_load = true;
            sub_section1.addClass('show')
            setInterval(function(){
              cnt1++
              sub_s1_img_box.eq(cnt1).find('p').stop().animate({top: 50+'%', opacity:1},1000,'easeInOutBack')
            },100)
          }
        }
        if(s2_load == false){
          if($(window).scrollTop() > $('#section3').offset().top + 150 ){
            s2_load = true;
            sub_section2.addClass('show')
            setInterval(function(){
              cnt2++
              sub_s2_list_item.eq(cnt2).stop().animate({top: 0, opacity:1},1000,'easeInOutBack')
            },200)
          }
        }
        if(s3_load == false){
          if($(window).scrollTop() >  $('#section4').offset().top + 400){
            s3_load = true;
            sub_section3.addClass('show')
            setInterval(function(){
              cnt3++
              sub_s3_list_item.eq(cnt3).stop().animate({top:0, opacity:1},1000,'easeInOutBack')
            },200)
          }
        }
      })






    }
    
  }
  Tom_N_Toms_adopt.init();
})(jQuery,window);