let num1 = prompt("enter length")
let num2 = prompt("enter width")

function perimeter(a,b){
    let perimeter= 2 * (parseInt(a)+parseInt(b))
    console.log(perimeter)
    
}
perimeter(num1,num2)

function area(a,b){
  let area=a*b
    console.log(area)      
}
area(num1,num2)