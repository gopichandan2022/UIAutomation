const AdharNumber = "Xyz123" //once a const variable is declair we cannot change a value 
console.log(AdharNumber)

//let  execuit the inner function

/*function counter (){
 for(let i=0;i<=5;i++){
    console.log(i)
 }

}  //Initializing 
counter ()  //declar */

// var execuit the outsinde of the inner function

function counter (){
    for(var i=0;i<=5;i++){
       console.log(i)
    }
    console.log(i)
   }  //Initializing 
   counter ()  //declar 
