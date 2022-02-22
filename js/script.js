(function($,window){
  var Tom_N_Toms ={
    init:function(){
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
    },
    section1:function(){
      var slide_container = $('.slide_container'),
          slide_wrap = slide_container.find('.slide_wrap'),
          slides = slide_wrap.find('.slide'),
          slideCount = slides.length,
          currentIdx = 0,
          timer,
          timer2,
          second,
          page_btn = slide_container.find('.page_btn'),
          num = slide_container.find('.num'),
          now = num.find('.now'),
          total_length = slide_container.find('.slide_length'),
          play_box = slide_container.find('.play_box'),
          pause_btn = play_box.find('.pause'),
          play_btn = play_box.find('.play');

         



          function mainSlide(){
            var nextSlide = (currentIdx + 1) % slideCount
            slides.eq(currentIdx).stop().fadeOut(700)
            slides.eq(nextSlide).stop().fadeIn(700)
            currentIdx = nextSlide;
            pageEvent()
            nowTxt()
          }

          function nowTxt(){
            now.text(currentIdx+1)
            total_length.text(slideCount)
            if(currentIdx == 2){
              num.css({color:'#fff'})
              pause_btn.css({color:'#fff'})
              play_btn.css({color:'#fff'})
            }else{
              num.css({color:'#000'})
              pause_btn.css({color:'#000'})
              play_btn.css({color:'#000'})
            }
          }


          function pageEvent(){
            page_btn.removeClass('active');
            page_btn.eq(currentIdx).addClass('active')
            if(currentIdx == 1 || currentIdx == 3){
             page_btn.not('.active').css({background:'#ddd'})
             page_btn.eq(currentIdx).css({background:'#000'})
            }else{
             page_btn.css({background:'#fff'})
             page_btn.eq(currentIdx).css({background:'#000'})
            }
          }
          page_btn.each(function(idx){
            $(this).on({
              click:function(e){
                e.preventDefault();
                currentIdx = idx;
                slides.stop().fadeOut(700)
                slides.eq(currentIdx).stop().fadeIn(700)
                pageEvent()
                if(play_btn.hasClass('show')){
                  clearInterval(timer);
                }else{
                  stopTimer()
                }
                nowTxt()
              }
            })
          })

          play_box.on({
            click:function(e){
              e.preventDefault();
              pause_btn.toggleClass('show')
              play_btn.toggleClass('show')
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                autoSlide()
              }
            }
          })

          function autoSlide(){
            timer = setInterval(mainSlide,4000)
          }
          autoSlide()

          function stopTimer(){
            clearInterval(timer);
            second = 0;
            clearInterval(timer2);
            timer2 = setInterval(function(){
              second++
              if(second == 2){
                autoSlide()
                clearInterval(timer2);
              }
            },1000)
          }
    },
    section2:function(){
      var s2 = $('#section2'),
          slide_wrap = s2.find('.slide_wrap'),
          slides = slide_wrap.find('.slide'),
          slideCount = slides.length,
          currentIdx = 0,
          timer;

          function mainSlide(){
            currentIdx++
            slide_wrap.stop().animate({top : -70 * currentIdx},700,'easeOutCubic',
              function(){
                if(currentIdx > slideCount - 2){
                  currentIdx = 0;
                  slide_wrap.css({top : 0})
                }
              })
          }
          function autoSlide(){
            timer = setInterval(mainSlide,4000)
          }
          autoSlide()
    },
    section3:function(){
      var wind = $(window),
          s3 = $('#section3'),
          s1_OffsetTop = $('#section1').offset().top,
          s3_s_container = s3.find('.sec3_slide_container'),
          s3_s_a = $('#section3 a'),
          s3_wrap = s3_s_container.find('.s3_wrap'),
          slides = s3_wrap.find('.slide'),
          new_slides,
          new_slideCount,
          new_s3_wrap_width,
          new_s3_wrap_marginLeft,
          currentIdx = 0,
          timer,
          timer2,
          second,
          slideCount = slides.length,
          slideWidth = slides.width(),
          prev_btn = s3_s_container.find('.s3_prev_btn'),
          next_btn = s3_s_container.find('.s3_next_btn'),
          sec3_page_box = $('.sec3_page_box'),
          now = sec3_page_box.find('.now'),
          total_length = sec3_page_box.find('.total_length'),
          page_btn = sec3_page_box.find('.page_btn'),
          play_box = sec3_page_box.find('.play_box'),
          pause_btn = play_box.find('.pause'),
          play_btn = play_box.find('.play'),
          dragStart,
          dragEnd,
          mDown,
          load = false;

      
          s3_wrap.append(slides.clone().addClass('clone'));
          s3_wrap.prepend(slides.clone().addClass('clone'));


          function slideLayOut(){
            new_slides = $('#section3 .slide')
            new_slideCount = new_slides.length,
            new_s3_wrap_width = new_slideCount * slideWidth,
            new_s3_wrap_marginLeft = -slideWidth * 8; 
            s3_wrap.css({width:new_s3_wrap_width, marginLeft:new_s3_wrap_marginLeft})
            new_slides.find('a').click(function(e){
              e.preventDefault();
            })


          }
          slideLayOut()


          s3_s_a.on({
            click:function(e){
              e.preventDefault();
            }
          })

          wind.scroll(function(){
              if(wind.scrollTop() > s1_OffsetTop){
                s3.addClass('show')
                if(s3.hasClass('show') && load == false){
                  autoSlide()
                }
                load=true;
            }
          })
          
          
          function mainSlide(){
            s3_wrap.stop().animate({left : -slideWidth * currentIdx},1000,
              function(){
                ifFn()
                s3_wrap.stop().animate({left : -slideWidth * currentIdx},0)
              })
             pageEvent()
             nowTxt()
          }

          function ifFn(){
            if(currentIdx == 8 || currentIdx == -8){currentIdx = 0}
            if(currentIdx == 9 || currentIdx == -7){currentIdx = 1}
            if(currentIdx == 10 || currentIdx == -6){currentIdx = 2}
            if(currentIdx == 11 || currentIdx == -5){currentIdx = 3}
            if(currentIdx == 12 || currentIdx == -4){currentIdx = 4}
            if(currentIdx == 13 || currentIdx == -3){currentIdx = 5}
            if(currentIdx == 14 || currentIdx == -2){currentIdx = 6}
            if(currentIdx == 15 || currentIdx == -1){currentIdx = 7}
          }



          function nextSlide(){
           if(!s3_wrap.is(':animated')){
            currentIdx++
            mainSlide()
           }
          }
          function prevSlide(){
            if(!s3_wrap.is(':animated')){
              currentIdx--
              mainSlide()
             }
          }
          

          prev_btn.on({
            click:function(e){
              e.preventDefault();
              prevSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          next_btn.on({
            click:function(e){
              e.preventDefault();
              nextSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          
          function nowTxt(){
            ifFn()
            now.text(currentIdx + 1);
            total_length.text(slideCount)
          }
          
          function pageEvent(){
            ifFn()
            page_btn.removeClass('active');
            page_btn.eq(currentIdx).addClass('active');
          }
          
          page_btn.each(function(idx){
            $(this).on({
              click:function(e){
                e.preventDefault();
                currentIdx = idx;
                mainSlide();
                if(play_btn.hasClass('show')){
                  clearInterval(timer);
                }else{
                  stopTimer();
                }
              }
            })
          })


          play_box.on({
            click:function(e){
              e.preventDefault();
              pause_btn.toggleClass('show')
              play_btn.toggleClass('show')
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          s3_wrap.on({
            mousedown : function(e){
              e.preventDefault();
              mDown = true;
              dragStart = e.clientX - s3_wrap.offset().left + s3_s_container.offset().left + (new_s3_wrap_marginLeft)
              clearInterval(timer)
            },
            mouseup : function(e){
              mDown = false;
              currentIdx = (Math.trunc(-s3_wrap.offset().left/slideWidth)-7);
              mainSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            },
            mousemove : function(e){
             if(!mDown){return}
             dragEnd  = e.clientX;
             s3_wrap.css({left:dragEnd - dragStart})
             clearInterval(timer)
            },
            mouseleave : function(e){
              if(!mDown){return};
              mDown = false;
              currentIdx = (Math.trunc(-s3_wrap.offset().left/slideWidth)-7);
              mainSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          function autoSlide(){
            timer = setInterval(nextSlide,4000)
          }
          function stopTimer(){
            clearInterval(timer);
            second = 0;
            clearInterval(timer2);
            timer2 = setInterval(function(){
              second++
              if(second == 2){
                if(pause_btn.hasClass('show')){
                  autoSlide()
                  clearInterval(timer2);
                }
              }
            },1000)
          }


    },
    section4:function(){
      var s4 = $('#section4'),
          wind = $(window),
          s4_a = s4.find('a'),
          s3_OffsetTop = $('#section3').offset().top;

          s4_a.on({
            click:function(e){
              e.preventDefault();
            }
          })

          wind.scroll(function(){
              if(wind.scrollTop() > s3_OffsetTop){
                s4.addClass('show')
            }
          })

    },
    section5:function(){
      var wind = $(window),
          s5 = $('#section5'),
          s4_OffsetTop = $('#section4').offset().top - 200,
          slide_container = s5.find('.s5_slide_container'),
          s5_s_a = slide_container.find('a'),
          slide_wrap = slide_container.find('.s5_slide_wrap'),
          slides =  slide_wrap.find('.slide'),
          new_slides,
          new_slideCount,
          new_s5_wrap_width,
          new_s5_wrap_marginLeft,
          currentIdx = 0,
          timer,
          timer2,
          second,
          slideCount = slides.length,
          slideWidth = slides.width(),
          prev_btn = slide_container.find('.s5_prev_btn'),
          next_btn = slide_container.find('.s5_next_btn'),
          page_box = s5.find('.s5_page_box'),
          now = page_box.find('.now'),
          total_length = page_box.find('.total_length'),
          page_btn = page_box.find('.page_btn'),
          play_box = page_box.find('.play_box'),
          pause_btn = play_box.find('.pause'),
          play_btn = play_box.find('.play'),
          dragStart,
          dragEnd,
          mDown,
          load = false;

          slide_wrap.append(slides.clone().addClass('clone'));
          slide_wrap.prepend(slides.clone().addClass('clone'));


          function slideLayOut(){
            new_slides = $('#section5 .slide')
            new_slideCount = new_slides.length,
            new_s5_wrap_marginLeft = -slideWidth * 5; 
            new_s5_wrap_width = new_slideCount * slideWidth,
            slide_wrap.css({width:new_s5_wrap_width, marginLeft:new_s5_wrap_marginLeft})
            new_slides.find('a').click(function(e){
              e.preventDefault();
            })
          }
          slideLayOut()

          s5_s_a.on({
            click:function(e){
              e.preventDefault();
            }
          })
          wind.scroll(function(){
              if(wind.scrollTop() > s4_OffsetTop){
                s5.addClass('show')
                if(s5.hasClass('show') && load == false){
                  autoSlide()
                }
                load=true;
            }
          })


          function mainSlide(){
            slide_wrap.stop().animate({left : -slideWidth * currentIdx},1000,
              function(){
                ifFn()
                slide_wrap.stop().animate({left : -slideWidth * currentIdx},0)
              })
             pageEvent()
             nowTxt()
          }
          function ifFn(){
            if(currentIdx == 5 || currentIdx == -5){currentIdx = 0}
            if(currentIdx == 6 || currentIdx == -4){currentIdx = 1}
            if(currentIdx == 7 || currentIdx == -3){currentIdx = 2}
            if(currentIdx == 8 || currentIdx == -2){currentIdx = 3}
            if(currentIdx == 9 || currentIdx == -1){currentIdx = 4}
         
            
          }

          function nextSlide(){
            if(!slide_wrap.is(':animated')){
             currentIdx++
             mainSlide()
            }
           }
           function prevSlide(){
             if(!slide_wrap.is(':animated')){
               currentIdx--
               mainSlide()
              }
           }
           
           prev_btn.on({
            click:function(e){
              e.preventDefault();
              prevSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          next_btn.on({
            click:function(e){
              e.preventDefault();
              nextSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          function nowTxt(){
            ifFn()
            now.text(currentIdx + 1);
            total_length.text(slideCount)
          }
          function pageEvent(){
            ifFn()
            page_btn.removeClass('active');
            page_btn.eq(currentIdx).addClass('active');
          }
          
          page_btn.each(function(idx){
            $(this).on({
              click:function(e){
                e.preventDefault();
                currentIdx = idx;
                mainSlide();
                if(play_btn.hasClass('show')){
                  clearInterval(timer);
                }else{
                  stopTimer();
                }
              }
            })
          })

          play_box.on({
            click:function(e){
              e.preventDefault();
              pause_btn.toggleClass('show')
              play_btn.toggleClass('show')
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                autoSlide();
              }
            }
          })

          slide_wrap.on({
            mousedown : function(e){
              e.preventDefault();
              mDown = true;
              dragStart = e.clientX - slide_wrap.offset().left + slide_container.offset().left + (new_s5_wrap_marginLeft)
              clearInterval(timer)
              /* 화면크기가 줄어들면 오류뜸 */
            },
            mouseup : function(e){
              mDown = false;
              currentIdx = (Math.trunc(-slide_wrap.offset().left/slideWidth)-4);
              mainSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            },
            mousemove : function(e){
             if(!mDown){return}
             dragEnd  = e.clientX;
             slide_wrap.css({left:dragEnd - dragStart})
             clearInterval(timer)
            },
            mouseleave : function(e){
              if(!mDown){return};
              mDown = false;
              currentIdx = (Math.trunc(-slide_wrap.offset().left/slideWidth)-4);
              mainSlide()
              if(play_btn.hasClass('show')){
                clearInterval(timer);
              }else{
                stopTimer();
              }
            }
          })

          function autoSlide(){
            timer = setInterval(nextSlide,4000)
          }
          
          function stopTimer(){
            clearInterval(timer);
            second = 0;
            clearInterval(timer2);
            timer2 = setInterval(function(){
              second++
              if(second == 2){
                if(pause_btn.hasClass('show')){
                  autoSlide()
                  clearInterval(timer2);
                }
              }
            },1000)
          }


    },
    section6:function(){
      var s6 = $('#section6'),
      wind = $(window),
      s6_a = s6.find('a'),
      s4_OffsetTop = $('#section5').offset().top,
      load = false;


      s6_a.on({
        click:function(e){
          e.preventDefault();
        }
      })


      wind.scroll(function(){
          if(wind.scrollTop() > s4_OffsetTop){
            s6.addClass('show')
        }
      })

    }
  }
  Tom_N_Toms.init();
})(jQuery,window);