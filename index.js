let grossSalary=500;
console.log( "The gross Salary =" + grossSalary + "$");


let employeePension=0.05;

console.log("The employee pension is"+ "" +"5%");

let taxableAmount= grossSalary *employeePension;
console.log("The taxable amount is =" + taxableAmount + "$");



let myTax=0.1;

let secondTax=grossSalary*myTax;

console.log("My second tax that depends on my gross salary is =" + secondTax + "$" );




let takeHomePay= grossSalary-taxableAmount-secondTax;
console.log("My take-home pay is =" +   takeHomePay + "$")