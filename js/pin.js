
// random numbers
function getPin(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('pin not 3 digit found', pin)
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})

// calculator
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)){
        if (number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const reamainingDigits = digits.join('');
            typedNumberField.value = reamainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

// verify pin
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currectPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSucessMessage = document.getElementById('correct');
    const pinIncorrectMessage = document.getElementById('incorrect');

    if (typedNumber === currectPin){
        pinSucessMessage.style.display = 'block';
        pinIncorrectMessage.style.display = 'none';
    }
    else{
        pinIncorrectMessage.style.display = 'block';
        pinSucessMessage.style.display = 'none';
    }
})