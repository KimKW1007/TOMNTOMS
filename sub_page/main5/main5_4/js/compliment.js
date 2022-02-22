(function($,window){
  var Tom_N_Toms_compliment ={
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
      var $item2 = $('#item2'),
          sm_item  = $('select[name=sm_item]'),
          selectEm = $('#e_mail4'),
          $target = $('#e_mail3');
   
         selectEm.change(function () {
           var domain = $(this).val();
           $target.val(domain);
         });

           $item2.change(function(){
            if($(this).find('option:selected').val() == 1){
              sm_item.removeClass('selected');
              $('#sm_item1').addClass('selected');
            }
            if($(this).find('option:selected').val() == 2){
              sm_item.removeClass('selected');
              $('#sm_item2').addClass('selected');
            }
            if($(this).find('option:selected').val() == 3){
              sm_item.removeClass('selected');
              $('#sm_item3').addClass('selected');
            }
            if($(this).find('option:selected').val() == 4){
              sm_item.removeClass('selected');
              $('#sm_item4').addClass('selected');
            }
            if($(this).find('option:selected').val() == 5){
              sm_item.removeClass('selected');
              $('#sm_item5').addClass('selected');
            }
            if($(this).find('option:selected').val() == 6){
              sm_item.removeClass('selected');
              $('#sm_item6').addClass('selected');
            }
            if($(this).find('option:selected').val() == 7){
              sm_item.removeClass('selected');
              $('#sm_item7').addClass('selected');
            }
           })
          $(window).scroll(function(){
              $('#section4').addClass('show')
          })

          $('.popup_op_btn').click(function(e){
            e.preventDefault();
            $('#popup').addClass('show')
          })

          $('.popup_cl_btn').click(function(e){
            e.preventDefault();
            $('#popup').removeClass('show')
          })
        

    }
    
  }
  Tom_N_Toms_compliment.init();
})(jQuery,window);