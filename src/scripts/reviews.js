//слайдер в форме отзыва
(function(){

  var move = function(container, numbSlide) {             
   
    var items = container.find('.reviews__elem '),
    activeSlide = items.filter('.reviews_active'),
    reqItem = items.eq(numbSlide),
    reqIndex = reqItem.index(),
    list = container.find('.reviews__list');

    if(reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%',          
      }, function() {
        activeSlide.removeClass('reviews_active');  
        reqItem.addClass('reviews_active');        
      });
    }
  };
var userActive = function(index) {   
  $('.reviews')
  .find('.reviews__user-item')
  .eq(index)
  .addClass('user-active')
  .siblings()
  .removeClass('user-active');
}
    $('.reviews__user-item').on('click', function(e) {  
        e.preventDefault();
        var $this = $(this),
            container = $this.closest('.reviews'),
            index = $this.index();
        move(container, index);
        userActive(index);
  });

})()
