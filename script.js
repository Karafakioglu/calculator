const calculatorBody = document.querySelector(".calculator-body");
const calculatorButtons = calculatorBody.querySelectorAll("button");
let displayValue = "";

// document.getElementById("delete-btn").addEventListener("click", () =>{
//     console.log(displayValue);
// })


function displayNumbers(){
    calculatorButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            if(button.className === "number-btn"){
                
                displayValue = displayValue + button.innerText; 
                document.getElementById("display").innerText = displayValue
            }
        })
    })
}

function clearDisplay(){
    const clearBtn = document.getElementById("clear-btn")
    const display = document.getElementById("display")
    clearBtn.addEventListener("click", ()=>{
        display.innerText = "";
        displayValue = "";
    })
}

function operate(operator, firstNum, secondNum){
    if(operator === "+"){
        return firstNum+secondNum
    }
    else if(operator === "-"){
        return firstNum-secondNum;
    }
    else if(operator === "*"){
        return firstNum*secondNum;
    }
    else if(operator === "/"){
        return firstNum/secondNum;
    }
}


function main(){
    operate();
    displayNumbers();
    clearDisplay();
}

main();