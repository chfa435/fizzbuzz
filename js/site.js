 //Step ONE (GET = controller, accepts a request)
 //First get the fizz and the buzz values from the user
 function getValues() {
     let fizzValue = document.getElementById("fizzValue").value;
     let buzzValue = document.getElementById("buzzValue").value;

     //check if the user entered numbers
     fizzValue = parseInt(fizzValue);
     buzzValue = parseInt(buzzValue);

     if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
         //Call display values and pass fizz and buzz to the function
         //calculate fizzbuzz
         let fizzBuzzValues = fizzBuzzA(fizzValue, buzzValue);
         
         //display the values
         displayValues(fbValues);

     } else {
         alert("you must enter integers!");
     }

 }

//business logic layer (LOGIC LAYER - Model)

function fizzBuzzA(fizz, buzz) {

    //create an array
    let fbValues = [];

    for (let i = 1; i <= 100; i++ ) {

        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push('FizzBuzz');
        } else if (i % fizz == 0 ) {
            fbValues.push('Fizz');
        } else if (i % buzz == 0 ) {
            fbValues.push('Buzz');
        } else {
            fbValues.push(i);
        }
    }

    return fbValues;
}

function fizzBuzzB(fizz, buzz){
    let fbValues = [];

    let isFizz = false;
    let isBuzz = false;

    for (let i = 0; i < 101 ; i++){
        
       isFizz = (i%fizz == 0);
       isBuzz = (i%buzz == 0);
    
       switch(true){
           case isFizz && isBuzz:{
               fbValues.push('FizzBuzz');
               break;
           }
           case isFizz: {
               fbValues.push('Fizz');
               break;
           }
           case isBuzz: {
                fbValues.push('Buzz');
                break;
           }
           default: {
               fbValues.push(i);
               break;
           }
       }
    }

    return fbValues;
}

function fizzBuzzC(fizz, buzz){
    let fbValues = [];

    for (let i = 0; i < 101; i++) { 
        let value = ( (i%fizz == 0 ?  'Fizz' : '') +( i%buzz == 0 ? 'Buzz'  : '')  || i  );
        fbValues.push = (value);
    }
}

 //Final Step (DISPLAY = view)
 function displayValues(fbValues) {
     //Fizz = 3
     //Buzz = 5

     //display a list of numbers from 1 to 100


     //get the results div from teh page
     let element = document.getElementById("results");

     //reset the display
     element.innerHTML = "";

     for(let index = 0; index < fbValues.length; index++){

        let item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = fbValues[index];

        if (fbValues[index] == 'Fizz') {
            item.classList.add("fizz");
        }
        else if (fbValues[index] == 'Buzz') {
            item.classList.add("buzz");
        }
        else if (fbValues[index] == 'FizzBuzz') {
            item.classList.add("fizzbuzz");
        }

        element.appendChild(item);

     }
    }