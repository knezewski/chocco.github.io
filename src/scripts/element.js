;(function(){
const element = document.querySelector(".team__content");
  
element.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target;
      const item = target.closest(".team__content-item");
      const items = document.querySelectorAll(".team__content-item");
      if(target.className === 'team__description-name'){
          if (!item.classList.contains("desc_active")) {
              for(let i=0; i<items.length;i++){
                  items[i].classList.remove("desc_active");
              }
              item.classList.add("desc_active");
          } else {
              item.classList.remove("desc_active");
          }
      }
  });

})()

