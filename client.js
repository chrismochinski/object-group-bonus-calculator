const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

/**
 * 
 *  
 */

function bonus(employee){ 
  // console.log('in bonus function');
  let percent = 0; //check to see if let percent; is enough

  if(employee.reviewRating <= 2) {
    percent = 0;
  }
  else if(employee.reviewRating === 3) {
    percent = .04;
  }
  else if(employee.reviewRating === 4) {
    percent = .06;
  }
  else { //is it a 1-5 scale?
    percent = .10; 
  }

  if(employee.employeeNumber.length === 4) {  //from line 60
    percent += .05;
  }

  if(employee.annualSalary > 65000 && employee.reviewRating > 2){  //from line 62
    percent -= .01;
  }

  if(percent >= .13){  // from line 63
    percent = .13;
  }
  return percent;
  // createBonusObject(percent);
}
// Math.round(number);

// console.log(`Atticus: ${bonus(employees[0])}`); //TEST RETURN atticus
// console.log(`Scout: ${bonus(employees[2])}`); //TEST RETURN scout


function createBonusObject(employee) {
  let bonP = bonus(employee);

  let newObject = {
    name: employee.name,
    bonusPercentage: bonP, // bonus % based on stuff
    totalCompensation: parseInt(employee.annualSalary) + Math.round(bonP * employee.annualSalary), // total salary + bonus
    totalBonus: Math.round(bonP * employee.annualSalary)
  }
  
  return newObject;
}

for(worker of employees){
  console.log(createBonusObject(worker));
}

//bonus(employees[0]);

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

