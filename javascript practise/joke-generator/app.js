document.getElementsByClassName('get-jokes')[0].addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function(){
    if(xhr.status === 200){
      // console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if(response.type === 'success'){

        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`  
        });
        }
    
      
      else{
        output+= `<li>SOmething Went Wrong`;
      }

      document.querySelector('.jokes').innerHTML = output;

      
    }
  }
  xhr.send();
  e.preventDefault();
}