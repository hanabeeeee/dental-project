
$(document).ready(function(){
    const swiper = new Swiper('#main-visual .swiper-container', {
  
        autoplay: {
          delay: 3000,
        },
        
        direction: 'horizontal',  // 효과
        loop: true,
        
      // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    
      });
})


$(document).ready(function(){
  const swiper = new Swiper('#main-visual-mobile .swiper-container', {

      autoplay: {
        delay: 3000,
      },
      
      direction: 'horizontal',  // 효과
      loop: true,
      
    // If we need pagination
      pagination: {
          el: '.swiper-pagination',
      },

  
    });
})



// $(function(){
//   $(window).scroll(function(){
//     var scrollPosition = $(window).scrollTop();
//     console.log(scrollPosition);
//     if( scrollPosition >= 600 ){
//       $('#fixed-menu').stop().slideDown();
//     } else {
//       $('#fixed-menu').stop().slideUp();
//     }
//   });
// });

window.onload = function() {
    // AOS 초기화
    AOS.init();
}