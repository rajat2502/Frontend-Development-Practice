var input = document.querySelector('#inputbtn');

input.addEventListener('focus', function(){
  console.log(input.getAttribute('placeholder'));

  input.setAttribute('placeholder', "");
})

input.addEventListener('focusout', function(){
  input.setAttribute('placeholder', "Search Google or type in a URL");
})

