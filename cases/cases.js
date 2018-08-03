jQuery(document).ready(function() {
    "use strict";

    /* ------- Preloader ------ */
    $(window).load(function(){
        $('.preloader').delay(2000).slideUp('slow'); // set duration in brackets
    });

    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* --------- One Page Navigation 页内锚点导航 -------- */
    // $('#collapsingNavbar').onePageNav({
    //     currentClass: 'active',
    //     scrollSpeed: 500,
    //     easing: 'linear'
    // });

    /* ---------- Wow Js ---------- */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'wow animated', // animation css class (default is animated)
            offset:       250,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
                $('.hidddden').removeClass('hidddden');
            }
        }
    );
    wow.init();

    // /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');

    // filter items on button click
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    //瀑布流
    // var $container = $('.portfolio-items');
    // if($container.length){
    //     $container.imagesLoaded(function() {
    //         $container.masonry({
    //             // set itemSelector so .grid-sizer is not used in layout
    //             itemSelector: '.item',
    //             // use element for option
    //             columnWidth: '.item',
    //             percentPosition: true,
    //             // isFitWidth: true,
    //             isAnimated: true,
    //         });
    //     });
    // }


    // $('#portfolio-filter ul li a').on('click',function(){
    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({
    //         filter: selector,
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear',
    //             queue: false
    //         }
    //     });
    //     $(this).addClass('selected').siblings().removeClass('selected');
    //     console.log($('#portfolio-filter li a.selected').attr('data-filter'));
    //     return false;
    // });

    var imgData=[
        {img:'../assets/images/cases/cover09.jpg',det:'casesDet_9.html',title:'海南农信社手机银行'},
        {img:'../assets/images/cases/cover10.jpg',det:'casesDet_10.html',title:'网银管家云服务'},
        {img:'../assets/images/cases/cover11.jpg',det:'casesDet_11.html',title:'昆山农商行个人手机银行'},
        {img:'../assets/images/cases/cover12.jpg',det:'casesDet_12.html',title:'昆山农商行个人网银'},
        {img:'../assets/images/cases/cover13.jpg',det:'casesDet_13.html',title:'深圳农商行小微金融'},
        {img:'../assets/images/cases/cover14.jpg',det:'casesDet_14.html',title:'深圳农商行手机银行'},
        {img:'../assets/images/cases/cover15.jpg',det:'casesDet_15.html',title:'太仓农商行手机银行'},
        {img:'../assets/images/cases/cover16.jpg',det:'casesDet_16.html',title:'紫金农商行手机银行'},
        {img:'../assets/images/cases/cover17.png',det:'casesDet_17.html',title:'宁波清算中心移动支付'},
        {img:'../assets/images/cases/talkToMe.jpg',det:'../about/about.html#portfolio'},
    ];
    var n=1;
    //滑动到底部加载更多
    $(window).scroll(function() {
        if($('.portfolio-item').length){
            var max=Math.ceil(imgData.length/8);
            var scrollTop=$(document).scrollTop();
            var windowHeight=$(this).height();
            var scrollHeight=$(document).height();
            if (scrollTop + windowHeight >= scrollHeight-80 && n<=max){
                var html='';
                var len=imgData.length-(8*n-8)>=8 ? 8*n : 8*(n-1)+imgData.length-(8*n-8);
                for(var i=8*n-8;i<len;i++){
                    if(i==imgData.length-1){
                        html+='<div class="item portfolio-item" onclick="location.href=\''+imgData[i].det+'\'">' +
                            '                <img src='+imgData[i].img+'>' +
                            '            </div>';
                    }else{
                        html+='<div class="item portfolio-item" onclick="location.href=\''+imgData[i].det+'\'">' +
                            '                <img src='+imgData[i].img+'>' +
                            '                <div class="portfolio-details-wrapper">' +
                            '                    <div class="portfolio-details">' +
                            '                        <h3 class="animated slideInDown">'+imgData[i].title+'</h3>' +
                            '                    </div>' +
                            '                </div>' +
                            '            </div>';
                    }
                }
                var $items=$(html);
                $container.append( $items );
                $container.imagesLoaded(function() {//图片加载完成之后再渲染新加的块儿
                    $container.isotope( 'appended', $items ,true)
                        .isotope('reloadItems');
                });
                n++;
            }
        }
    });



    // var $optionSets = $('#portfolio-filter ul'),
    //     $optionLinks = $optionSets.find('a');
    //
    // $optionLinks.on('click',function(){
    //     var $this = $(this);
    //     // don't proceed if already selected
    //     if ( $this.hasClass('selected') ) {
    //         return false;
    //     }
    //     var $optionSet = $this.parents('#portfolio-filter ul');
    //     $optionSet.find('.selected').removeClass('selected');
    //     $this.addClass('selected');
    // });

    /*--------------底部切换-------------*/
    $('.contact div').mouseover(function(){
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq("+ $(this).index() +")").addClass('active');
    });



});
