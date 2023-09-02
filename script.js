const calculatorBody = document.querySelector(".calculator-body");
const calculatorButtons = calculatorBody.querySelectorAll("button");
const operatorButtons = document.querySelectorAll(".operator-btn");
const calculateButton = document.getElementById("calculate-btn");
const display = document.getElementById("display");

let displayValue = "";

calculateButton.addEventListener("click", ()=>{
    operate(parseUserInput()[0],parseUserInput()[1],parseUserInput()[2])
    // console.log(displayValue)
    console.log(parseUserInput())
    display.innerText = operate(parseUserInput()[0],parseUserInput()[1],parseUserInput()[2]);
    displayValue = "";

});



document.getElementById("delete-btn").addEventListener("click", () =>{
    console.log(displayValue);
})


function parseUserInput(){
    let splitUserInput = displayValue.split(/([\+\-\*\/])/, 3);
    return splitUserInput;
}

function displayNumbers(){
    calculatorButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            if(button.className === "number-btn"){
                
                displayValue = displayValue + button.innerText; 
                display.innerText = displayValue
            }
        })
    })

    operatorButtons.forEach(operatorBtn =>{
        operatorBtn.addEventListener("click", () =>{
            displayValue = displayValue + operatorBtn.innerText;
            display.innerText = displayValue

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

function operate(firstNum, operator, secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    if(operator === "+"){
        console.log(firstNum+secondNum);
        return firstNum+secondNum
    }
    else if(operator === "-"){
        console.log(firstNum-secondNum);
        return firstNum-secondNum;
    }
    else if(operator === "*"){
        console.log(firstNum*secondNum);
        return firstNum*secondNum;
    }
    else if(operator === "/"){
        console.log(firstNum/secondNum);
        return firstNum/secondNum;
    }
}



function main(){
    operate();
    displayNumbers();
    clearDisplay();
}

main();