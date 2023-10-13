function addToValue(value){
    document.querySelector("#display").value += value;
}

function clearDisplay(){
    document.querySelector("#display").value = "";
}

function calcResult(){
    const display = document.querySelector("#display");
    try{
    display.value = eval(display.value);
    }
    catch (error){
        display.value = "ERROR"
    }
}

function delLastChar(){
    const display = document.querySelector("#display");
    display.value = display.value.slice(0,-1);
}

// console.log(eval("3 + 8"));