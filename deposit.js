// step-1:add event Listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function(){
    // step-2:get the deposit amount form the deposit input field
    // For input field use. value to the the value inside the input field
    const depositField=document.getElementById("deposit-field")
    const depositAmount = depositField.value;
    // step-3: get the current deposit total
    //  For non-input(element other than input textarea) use innerText to get the text
    const deposittotalElement =document.getElementById("deposit-total");
    const depositTotal =deposittotalElement.innerText;
    deposittotalElement.innerText =depositAmount;
})
