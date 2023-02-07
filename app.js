// Task One
let userInput = +prompt("Enter the positive Integer");

document.write("Numeber :" + userInput + "<br> <br>")
document.write("Round Off value :" + Math.round(userInput) + "<br> <br>")
document.write("Floor value :" + Math.floor(userInput) + "<br> <br>")
document.write("Ceil value :" + Math.ceil(userInput) + "<br> <br>")


// Task Two
let seconduserInput = +prompt("Enter the negative Integer");

document.write("Numeber :" + seconduserInput + "<br> <br>")
document.write("Round Off value :" + Math.round(seconduserInput) + "<br> <br>")
document.write("Floor value :" + Math.floor(seconduserInput) + "<br> <br>")
document.write("Ceil value :" + Math.ceil(seconduserInput) + "<br> <br>")

// Task Three

let numValue = -4;

document.write("The absolute value of your entered number " + Math.abs(numValue) + "<br><br>")

// Task four
document.write("random dice value : " + Math.floor(Math.random() * 6) + "<br><br>");

// Task five

let coinResult = Math.floor(Math.random() * 2) + 1;
if(coinResult ==2){
    document.write("random coin value: Head" + "<br><br>")
}else{
    document.write("random coin value: Tail" + "<br><br>")
}

// Task Six

var digitNum = Math.floor(Math.random() * 100) + 1 
document.write(digitNum)


// Task Seven

const weightInput = prompt("Please enter your weight:");

let weight;
if (weightInput.includes("kgs")) {
  weight = parseFloat(weightInput.replace("kgs", "").trim());
} else if (weightInput.includes("kilograms")) {
  weight = parseFloat(weightInput.replace("kilograms", "").trim());
} else {
  weight = parseFloat(weightInput);
}

document.write(`Your weight is: ${weight} kgs`);

// Task eight

let guessGame = Math.floor(Math.random()*10)+1;
let userGuess = +prompt("Enter the user Guess Number")

if(guessGame == userGuess){
    alert("Congratulation")
}else{
    alert("Try again")
}

