$( document ).ready(function() {

  // masonry
  $('.masonry-container').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 3,
    percentPosition: true
  });

  // Slick nav
  $(function(){
     $('.menu').slicknav(
       {
         prependTo: '.nav'
       }
     );
   });

});
