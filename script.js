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

function clearDisplay(){
    const clearBtn = document.getElementById("clear-btn")
    const display = document.getElementById("display")
    clearBtn.addEventListener("click", ()=>{
        display.innerText = "";
    })
}

clearDisplay();