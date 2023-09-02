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