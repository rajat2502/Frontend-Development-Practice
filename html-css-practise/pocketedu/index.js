//class Details
class Details{
  constructor(Block_ID, Color, Quantity){
    this.Block_ID = Block_ID;
    this.Color = Color;
    this.Quantity = Quantity;
  }
}

//class ui
class UI{
  addDetailsToList(Details){
    const list = document.getElementById('company-details');

    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
      <td>${this.Block_ID}</td>
      <td>${this.Color}</td>
      <td>${this.Quantity}</td>
      <td><a href ="#" class="delete">Delete</a></td>
     `;
     list.appendChild(row);
  }
  
  clearFields(){
    document.getElementById('Block_ID').value = '';
    document.getElementById('Color').value = '';
    document.getElementById('Quantity').value = '';
  }

  showAlert(message, className){
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#company-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout afetr 3sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteDetails(target){
    if(target.className == 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
}

//store class(local storage class)

class Store{
  static getDetails(){
    let details;
    if(localStorage.getItem('details') === null){
      details = [];
    }
    else{
      books = JSON.parse(localStorage.getItem('details'));
    }

    return details;
  }

  static displayDetails(){
    const details = Store.getDetails();

    books.forEach(function(detail){
      const ui = new UI();

      //add book to UI
      ui.addDetailsToList(detail);
    });
  }

  static addBook(detail){
    const details = Store.getDetails();

    details.push(detail);

    localStorage.setItem('details', JSON.stringify(details));
  }

  static removeDetails(){

    const details = Store.getDetails();

    books.forEach(function(detail, index){
       if(detail.Block_ID == Block_ID){
         details.splice(index, 1);
       }
    });

    localStorage.setItem('details', JSON.stringify(details));
  }
}

//dom load event
document.addEventListener('DOMContentLoaded', Store.displayDetails);

//Event Listeners

document.getElementById('company-form').addEventListener('submit', function(e){
 console.log('test');
 //get form values
 const title = document.getElementById('Block_ID').value;
 const author = document.getElementById('Color').value;
 const isbn = document.getElementById('Quantity').value;

 //instantiate book
 const detail = new Details(Block_ID , Color , Quantity);

 //instantiate ui
 const ui = new UI();


 if(Block_ID == '' || Color == '' || Quantity == ''){
   //Error Alert
   ui.showAlert('Please fill in all the fields', 'error');
 }
 else{
 //add book to list
 ui.addDetailsToList(detail);

 //add to LS
 Store.addDetails(detail);

 //show success
 ui.showAlert('Details Added', 'success');

 //clear fields
 ui.clearFields();
 }

 e.preventDefault();
});

//event listener for delete
document.getElementById('company-details').addEventListener('click', function(e){

 //instantiate ui
 const ui = new UI();
 ui.deleteDetails(e.target);

 //remove from ls
 Store.removeDetails(e.target.parentElement.previousElementSibling.textContent);

 //show message
 ui.showAlert('Book Removed', 'success');
});