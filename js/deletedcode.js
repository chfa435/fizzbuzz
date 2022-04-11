
     //write a FOR loop to display from 1 to 100
     for (let i = 1; i <= 100; i++) {

        let item = document.createElement("div");
        item.classList.add("col");


   //test if they are divisible by fizz and buzz
   //if true replace the current number with 'FizzBuzz'
        if (i % 3 == 0 && i % 5 == 0) {
           item.classList.add("fizzbuzz"); 
           item.innerHTML = 'FizzBuzz ';
        } 
        //test if they are ONLY divisible by fizz
        //if true replace current number with 'FIZZ'        
        else if (i % 3 == 0) {
           item.classList.add("fizz");  
           item.innerHTML = 'Fizz';
        } 
        
       //test if they are ONLY divisible by buzz
        //if true replace current number with 'BUZZ'
        else if (i % 5 == 0) {
           item.classList.add("buzz"); 
            item.innerHTML = 'Buzz';
        } 

//Finally just print the number
        else {
            item.innerHTML = i
        }

        element.appendChild(item);

    }
}