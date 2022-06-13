let grossSalary=500;
console.log( "The gross Salary =" + grossSalary + "$");

let contributions=grossSalary *0.05;

console.log("The contributions are" +" "+ contributions + "$" ) 



let taxableAmount=475;
console.log("The taxable amount is"+ " "+ taxableAmount + "$");

let firstTax=0;
console.log("The first tax is 0% tax on 0-80 dollar per month");


let secondTax=(0.04 * (250-80));

console.log( "The second tax is 4% if you are paid between 80-250 $ so  it takes" +" "+ secondTax + "$");



let thirdTax= (0.08 * (450-250));

console.log("The third tax is 8% if you are paidn between 250-450$ so it takes"+ " "+ thirdTax + "$"    );



let fourthTax= (0.1 * (475-450));

console.log("The fourth tax is 10% if are paid more than 450$ so it takes"+ " "+ fourthTax +"$");



let moneyTheGovernmentStealsUs= secondTax +thirdTax+fourthTax;

console.log("THe money the government steals from us is"+" "+ moneyTheGovernmentStealsUs + "$");

let ourFinalPay=taxableAmount-moneyTheGovernmentStealsUs;

console.log("Our final pay is" + " "+  ourFinalPay+ "$" );

