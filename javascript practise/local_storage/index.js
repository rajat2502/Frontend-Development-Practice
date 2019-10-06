// // localstorage
// // console.log(localStorage); //gives a storage object

// // in local storage data is stored in the form of key value pairs
// // both key and value are stored as strings 

// // localstorage methods
// // 1. clear() //clears all the data
// // 2. getItem(key) //gives the value for the key
// // 3. key() //it is used to access the keys by their index(indexing starts from 0)
// // 4. removeItem(key)
// // 5. setItem(key, value)


// // setItem(key, value);
// localStorage.setItem("name", "Rajat");

// // removeItem(key);
// localStorage.removeItem("name");

// // console.log(localStorage);

// localStorage.setItem("age", "30");
// localStorage.setItem("name", "Rajat");

// // getItem()
// console.log(localStorage.getItem("name"));

// // key()
// console.log(localStorage.key(1));


const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const submitBtn = document.getElementById("submitbtn");
const lsOutput = document.getElementById("lsOutput");

submitBtn.addEventListener("click", function(){
  const key = inpKey.value;
  const value = inpValue.value;
  if(key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
})

for(let i=0; i<localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  lsOutput.innerHTML += `${key}: ${value} <br />`;
}