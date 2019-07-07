// class declaration
// first letter capitilized
// there are no commas between the methods of a class 

class Surgeon{
  // constructor function
  constructor(name, department){
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  // methods
  get name(){
    return this._name;
  }
  
  get department(){
    return this._department;
  }
  
  get remainingVacationDays(){
    return this._remainingVacationDays
  }
  
  takeVacationDays(daysoff){
    this._remainingVacationDays = this._remainingVacationDays - daysoff;
  }
}

// instance
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// method calls
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

// inheritance
// With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

// parent class
// classes can have static methods that needs no instances to get access as they can be accessed through the class only
// for example Date class has .now() as static method
class HospitalEmployee{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name(){
    return this._name;
  }
  
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }

  // static method can be accessed by this classname only not by any instance or subclass
  static generatePassword(){
    return Math.floor(Math.random()*10000);
  }
}

console.log(HospitalEmployee.generatePassword());

// first child class
class Nurse extends HospitalEmployee{
  constructor(name, certifications){
		super(name); //it makes a call to the constructor function of parent to set name to name property
    this._certifications = certifications;
  }

  // child class own methods
  get certifications(){
    return this._certifications;
  }
  
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}

// instance of our new class
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
// method calls of our new class
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

