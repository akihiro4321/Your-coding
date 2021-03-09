$(function() {
    // AOS
    AOS.init();

    // slidemenu
    $('.fas').click(function(){
        $('#bg').show(200);
        $('.nav_responsive').animate({'margin-right': 0}, 200);
    });
    $('.navList_listItem_responsive a').click(function(){
        $('.nav_responsive').animate({'margin-right': -200 + "px"}, 200);
        $('#bg').hide();
    });
    $('#bg').click(function(){
        $('.nav_responsive').animate({'margin-right': -200 + "px"}, 200);
        $('#bg').hide();
    });

    // アコーディオン
    $('.faqZone_list_item').click(function(){
        var $answer = $(this).find('.faqZone_list_item_answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
        }else{
            $answer.addClass('open');
            $answer.slideDown();
        }
    });

    // スムーススクロール
    $('a[href^=#]:not([href=#])').click(function(){
        var target = $($(this).attr('href')).offset().top;
        var header_height = $('header').height();
        target -= header_height;
        $("html, body").animate({scrollTop: target}, 500);

        return false
    });
    
    // validation
    $('.validation').hide();
    $('.submitBtn').click(function(){
        var sendFlag = true;

        if(!$('#name').val()){
            $('.name_area .validation').show();
            sendFlag = false;
        }else{
            $('.name_area .validation').hide();
        }
        if(!$('#email').val()){
            $('.email_area .validation').show();
            sendFlag = false;
        }else{
            $('.email_area .validation').hide();
        }
        if(!$('#message').val()){
            $('.context_area .validation').show();
            sendFlag = false;
        }else{
            $('.context_area .validation').hide();
        }

        var chkbocChk = $('input[name="confirm"]:checked').length;
        if(chkbocChk == 0){
            $('.confirm_area .validation').show();
            sendFlag = false;
        }else{
            $('.confirm_area .validation').hide();
        }

        if(sendFlag == false){
            return false;
        }
    });

    // Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.5,
        breakpoints: {
            // 850px以上の場合
            850: {
              slidesPerView: 3.5,
            },
          },
        centeredSlides: true,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        });
    // $(window).on('load resize', function(){
    //     var window_width = $(window).width();
    //     var slide_perview;
    //     if(window_width > 850){
    //         slide_perview = 3.5;
    //     }else{
    //         slide_perview = 1.5;
    //     }

    // });




});