/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune (arg1,arg2,arg3,arg4){
  console.log("You will be a "+arg1+" in "+arg2+", and married to "+arg3+" with "+arg4+" kids.");
  }
  return tellFortune("Developer","USA","My Wife",20);


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(dogAge){
  return "Your doggie is "+dogAge*7+" years old in dog years!";  
  }
  console.log(calculateDogAge(5));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age,amountPerDay){
  const maxAge=100;
      if (age<=maxAge && age >0){
          consumable=amountPerDay*(age*12*30);
          return consumable;}
          else
          return "Check Age entered";
      
  }
  console.log(calculateSupply(10,1));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  return "Hello "+name;
  }
  console.log(greet("Abd"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
// cat should be replaced with x

function double(x) {
  return 2 * x;
}

// argument should never be decleared while function declearation

function double(x) {
  return 2 * x;
}

// argument should never be decleared while function declearation
// argument should never be in a single qoute



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}
function  double3 (x) {
  return 2 * x;}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(para){
  return para**3;

}

console.log(cube(3));

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(para1,para2){
  return para1*para2;
  }
  
  console.log(multiply(6,4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
  if (age>=20)
      return "yes you can";
  return `please come back after `+(20-age)+` years to get one`;
  
  
  }
  
  console.log(canIGetADrivingLicense(10));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(para1,para2){
  return para1.length == para2.length
}
console.log(sameLength("Ali","Ali"))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNumber(para1,para2){
  if (para1>para2)
      return para1
     return para2 

}
console.log(largerNumber(30,30))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(para1,para2,para3){
  if (para1 <= para2 && para1 <= para3)
  return para1
  if (para2 <= para1 && para2 <= para3)
  return para2
  if (para3 <= para1 && para3 <= para2)
  return para3

}

console.log(smallerNubmer(-50,2,5))
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(para1,para2,para3,para4,para5){

  let minStr=para1;
  for(let i=1;i<arguments.length;i++)
      if(minStr.length >arguments[i].length)
          minStr=arguments[i];
      return minStr;
  }

console.log(shorterString('A414','Ak1','AAA11','A5','z'));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(para1,para2,para3,para4){

  let maxStr=para1;
  for (let i=1;i<arguments.length;i++)
      if (maxStr.length<arguments[i].length)
          maxStr=arguments[i]
  return maxStr;
}
console.log(longerString("Abd","Ahmad","Abdelhameed","Ahed"));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(para1){

  return para1%2 ==0 

}
console.log(isEven(3));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(para1){

  return para1%2 !=0 

}
console.log(isOdd(4));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(para1){
  if (para1<0)
  return para1 *-1;
  return para1

}


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName){
  return firstName+' '+lastName;
  
  }
  
  console.log(fullName("Ali","Ahmad"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(p1,p2,p3,p4,p5){

  return (p1+p2+p3+p4+p5)/arguments.length
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    return Math.random();
}

console.log(randomNumber);
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min, max) { 
  // min and max included but not 
  return Math.floor(Math.random() * (max - min + 1) + min)

}

  const rndInt = randomBetweenNumbers(1, 6)
  console.log(rndInt)

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
  return score>=95 && score<=100 ? "A" : score>=85 && score<=94 ? "B" : score>=70 && score<=84 ? "C" : score>=50 && score<=69 ? "D" : score>=0 && score<=49 ? "F":"Wronge score" ;
}
console.log(scoreInUniversty(100));



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var j=0;
function counter(){
return j++;
}

console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  let previousCounterValue = counter;
  counter = 0; 
  return {
    previousValue: previousCounterValue,
    message: "Counter has been reset." 
  };
}