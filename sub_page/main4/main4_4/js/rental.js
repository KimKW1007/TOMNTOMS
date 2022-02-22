(function ($, window) {
  var Tom_N_Toms_rental = {
    init: function () {
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
    },
    section1: function () {},
    section2: function () {},
    section3: function () {
      $(window).scroll(function (){
        $('#section3').addClass('show');
      });
    },
    section4: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > $('#section1').offset().top) {
          $('#section4').addClass('show');
        }
      });
    },
    section5: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > $('#section4').offset().top) {
          $('#section5').addClass('show');
        }
      });
    },
    section6: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > $('#section5').offset().top + 500) {
          $('#section6').addClass('show');
        }
      });
    },
    section7: function () {
      var selectEm = $('#e_mail4'),
        $target = $('#e_mail3');

      selectEm.change(function () {
        var domain = $(this).val();
        $target.val(domain);
      });

      $('.item_ttl > img').click(function () {
        $('.tip_blind').stop().fadeIn(300);
      });
      $('.tip_cl_btn').click(function () {
        $('.tip_blind').stop().fadeOut(300);
      });
    },
  };
  Tom_N_Toms_rental.init();
})(jQuery, window);
