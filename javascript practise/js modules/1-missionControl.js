// import that module into a variable
const Airplane = require('./1-airplane.js');

const displayAirplane = () => {
  console.log(Airplane);
  console.log(Airplane.myAirplane); //use its propertirs as it is
}

displayAirplane();