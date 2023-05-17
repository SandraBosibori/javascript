let num1=prompt("enter value of a")
let num2=prompt("enter value of b")
let operator=prompt("enter operator")
function calculator(a,b,c){
    if(c==="+"){
        console.log(a+b)
    }
    else if(c==="-"){
        console.log(a-b)
    }
    else if(c==="*"){
        console.log(a*b)
    }
    else if(c==="/"){
        console.log(a/b)
    }
    else if(c==="%"){
        console.log(a%b)
    }
    else console.log(a**2)
        
}
calculator(parseInt(num1),parseInt(num2),operator)





