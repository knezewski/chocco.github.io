;(function(){

let vertical = () => {
  let calculateWidth = () => {
      let windowWidth = window.innerWidth;
      let links = document.querySelectorAll(".accordion__form-title");
      let link = document.querySelector(".accordion__form-title");
      let linksWidth = parseFloat(getComputedStyle(link).width);
      let reqWidth = windowWidth - linksWidth * links.length;
      return reqWidth > 550 ? 550 : reqWidth;
  }


  let menu = document.querySelectorAll('.accordion__form-title');

  menu.forEach(function (personName) {
      personName.addEventListener("click", function (e) {
          e.preventDefault();
          let active = document.querySelector(".accordion_active");

          if (active) {
              let accordeonDetails = active.querySelector(".accordion__form-text");
              accordeonDetails.style.width = "0px";
              active.classList.remove("accordion_active");
          }

           if (!active || ((active.querySelector(".accordion__form-text") != e.target)
               && (active.querySelector(".accordion__form-title") != e.target))) { 
              let current = e.target.closest(".accordion__item");
              current.classList.add("accordion_active");

              let currentInfo = current.querySelector(".accordion__form-text");
              currentInfo.style.width = calculateWidth() + "px";
          } 
          
      })
  })
}
vertical();

})()