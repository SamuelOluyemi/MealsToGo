// var number1;
// var number2;
// console.log(number1);

// number1 = Math.floor((Math.random() * 10) + 1);
// number2 = Math.floor((Math.random() * 10) + 1);
// document.getElementById("number1").innerHTML = number1;
// document.getElementById("number2").innerHTML = number2;

// console.log(number1)

// var answer = number1 + number2;

// var checkAnswer = document.querySelector('input[type=text]');  //querySelector is used to return the first ellement that matches a specified css selector or selectors in a document//
// var value = checkAnswer.value;
// var btn = document.querySelector('input[type=button][value=check]');

// console.log(btn);

// btn.addEventListener('click', function () {
//     value = checkAnswer.value;
//     if (value == answer) {
//         alert('You are correct');
//     } else {
//         alert('You are incorrect, the answer was ' + answer);
//     }

//     document.querySelector('input[type=text]').value = "";
//     document.getElementById('number1').innerHTML = "";
//     document.getElementById('number2').innerHTML = "";
//     number1 = Math.floor((Math.random() * 10) + 1);
//     number2 = Math.floor((Math.random() * 10) + 1);
//     document.getElementById('number1').innerHTML = number1;
//     document.getElementById('number2').innerHTML = number2;

//     answer = number1 + number2;
// });


var firstNumber = parseInt(Math.random()*10);
var secondNumber = parseInt(Math.random()*10);
let total = firstNumber + secondNumber;
console.log(total)

let number1 = document.getElementById('number1');
number1.innerHTML = `<p>${firstNumber}<p>`;
console.log(number1)

let number2 = document.getElementById('number2');
number2.innerHTML = `<p>${secondNumber}<p>`
console.log(number2)

const checkBtn = document.querySelector("#check-btn");
console.log(checkBtn);

checkBtn.addEventListener("click", () => {
    let inputEl = document.querySelector("#input-el").value;
    inputEl = parseInt(inputEl); //inputEl = Number(inputEl);
    console.log(inputEl);

    if(inputEl === total){
        alert('Correct');
        window.location.reload()
    } else {
        alert('Sorry. Incorrect. The correct answer was ' + total + '.')
        window.location.reload()
    }
});