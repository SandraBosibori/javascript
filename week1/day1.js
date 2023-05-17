//The program should:
//Prompt the user to enter the length and width of the rectangle.
//Calculate the area and perimeter of the rectangle using the length and width entered by the user.

let num1 = prompt("enter length")
let num2 = prompt("enter width")

function perimeter(a,b){
    let perimeter= 2 * (parseInt(a)+parseInt(b))
    console.log(perimeter)
    
}
perimeter(parseInt(num1),parseInt(num2))

function area(a,b){
  let area=a*b
    console.log(area)      
}
area(parseInt(num1),parseInt(num2))