;(function(){

  const myForm = document.querySelector('.form');
  const send = document.querySelector('#send');
  const popap =  document.querySelector('.popap-order');
  const btn = document.querySelector('.btn-popap');
  var text = document.querySelector('.popap-order__text');
  var url = ['https://webdev-api.loftschool.com/sendmail'];
  send.addEventListener('click', event => {
   event.preventDefault();
   if(validateForm(myForm)) {
    var formData = new FormData();
    formData.append('name', myForm.elements.name.value);
    formData.append('phone', myForm.elements.phone.value);
    formData.append('comment', myForm.elements.comment.value);
    formData.append('to', 'elenta1511@gmail.com');
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(formData);
    function popAp(){
      xhr.addEventListener('load',() => {
        document.querySelector('.form').reset();
        popap.classList.add('popap-order_active');
        if(xhr.response.status == 1) {
         text.textContent = "Ваш заказ успешно доставлен";
        } else { 
          text.textContent = "Произошла ошибка, пожалуйста попробуйте позднее";
        }
      });
    }
    popAp()
      btn.addEventListener('click', e => {
      popap.classList.remove('popap-order_active');
     });
    }
  });
  
  function validateForm(form) {
    let valid = true;
    if(!validateField(form.elements.name)) {
      valid = false;
    }
    if(!validateField(form.elements.phone)) {
      valid = false;
    }
    if(!validateField(form.elements.comment)) {
      valid = false;
    }
    return valid;
  }
  
  function validateField(label) {
    if(!label.checkValidity()) {
      label.nextElementSibling.textContent = label.validationMessage;
      return false;
    } else {
      label.nextElementSibling.textContent = '';
      return true;
    }
  }


  })()

