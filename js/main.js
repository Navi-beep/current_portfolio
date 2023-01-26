//let entry = prompt("Say hello there");
//if (entry == null || entry == "") {
 ///   alert("User left the chat.");
///} else {
 //alert("Hello there General Kenobi!");
//}


//var button = document.querySelector('button');

//button.onmouseover = 
//function changeColor() {
//    button.style.background = 'black';
    
//}

let x = 0
let y = 0
let z = 0 

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
  }


//array sum

function sum41(arr1,arr2) {

}

sum41([1,2,3],[3,4,5])

function sum42(arr1,arr2) {
  let sumOne = 0 
  for(let i =0; i < arr1.length; i += 1) {
    sumOne += arr1[i]
  }

  let sumTwo = 0 
  for(let i =0; i < arr2.length; i += 1) {
    sumTwo += arr2[i]
  }

  return sumOne + sumTwo

}

console.log(sum42([5,2,3,4],[1,2,3]))