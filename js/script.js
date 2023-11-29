$(document).ready(function () {
  "use strict";

  // fixed header
  $(window).scroll(function () {
   let scroll = $(window).scrollTop();

   if (scroll >= 2) {
     $("header .navbar.main-nav").addClass("fixed");
   } else {
     $("header .navbar.main-nav").removeClass("fixed");
   }
  });

  //main slider owl
  
     //main slider owl
     $(".hero_carousel").owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      nav:true,
       rtl:true,
      mouseDrag:false,
      autoplay:true,
      animateOut: 'fadeOut',
      navText: ["<i class='bi bi-chevron-right'></i>", "<i class='bi bi-chevron-left'></i>"],
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:1
          }
      }
     })
  $('.news_carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    nav: true,
    rtl: true,
    dots: false,
    lazyLoad: true,
    navText: ["<i class='bi bi-chevron-right'></i>", "<i class='bi bi-chevron-left'></i>"],
    responsive: {
      0:{
          items: 1
      },
      576:{
          items: 1,
          stagePadding: 0,
      },
      1200:{
          items: 1,
          stagePadding: 200,
      },
      1500:{
          items: 1,
          stagePadding: 300,
      },
      1750:{
          items: 1,
          stagePadding: 450,
      }
      }
  });
  $('.testi_carousel').owlCarousel({
    loop:true,
    center:true,
    margin:100,
    dots:false,
    nav:true,
    items:1,
     rtl:true,
    mouseDrag:false,
    autoplay:true, 
    navText: ["<i class='bi bi-chevron-right'></i>", "<i class='bi bi-chevron-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
  });
  $(".clients_carousel").owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
     rtl:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'fadeOut',
    navText: ["<i class='bi bi-chevron-right'></i>", "<i class='bi bi-chevron-left'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:5
        }
    }
   })
  
  
});