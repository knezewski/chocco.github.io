

;(function(){

const sections = $(".section");
const display = $(".maincontent");

let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent); //

const isMobile = md.mobile();

const switchActiveClassInSideMenu = menuItemIndex => {
  $(".pagination__pages-item")
    .eq(menuItemIndex)
    .addClass("pagination__pages-active")
    .siblings()
    .removeClass("pagination__pages-active");
};

const performTransition = sectionEq => {
  if (inscroll) return;

  const sectionEqNum = parseInt(sectionEq);

  if (!!sectionEqNum === false)

  inscroll = true;

  const position = sectionEqNum * -100 + "%";

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false;
    switchActiveClassInSideMenu(sectionEq);
  }, 500 + 300); //время транзишна + время на инерцию
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(".wrapper").on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection("next");
  }
  if (deltaY < 0) {
    scrollToSection("prev");
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();                  
});

$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 38:
      scrollToSection("prev");
      break;
    case 40:
      scrollToSection("next");
      break;
  }
});


$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  const target = $(e.currentTarget).attr('data-scroll-to'); // передвижение на необходимую секцию по нажатию на меню
  var ancor = ($(target).index());
 performTransition(ancor);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(event, direction) {
      const nextOrPrev = direction === "up" ? "next" : "prev"; //для мобильных устройств
      scrollToSection(nextOrPrev);
    }
  });
}

  })()
