// Write your JavaScript here
var btn = document.getElementById('calculate-change');
//var dollarsOutput = document.getElementById("dollars-output");

function handleClickEvent(e){
    //console.log('running');
    //var outputElement = document.getElementById('')
    var amountChange;
    var elementArray = [ 'dollars', 'quarters', 'dimes', 'nickels', 'pennies'];
    var amounts = [100, 25, 10, 5, 1];
    var amountReceived = parseFloat(document.getElementById("amount-received").value);
    var amountDue = parseFloat(document.getElementById("amount-due").value);
    //parseFloat converts text to decimal of the .value.
    var changeDue = (amountReceived - amountDue) * 100;
    
    for (var i = 0; i < elementArray.length; i++){
        if (amounts[i] != 1) {
            document.getElementById(elementArray[i] + '-output').innerHTML = Math.floor(changeDue / amounts[i]);
            changeDue %= amounts[i];    
        } else {
            document.getElementById(elementArray[i] + '-output').innerHTML = Math.round(changeDue);
        }
    }
}

btn.addEventListener("click", handleClickEvent);