function playerSelection(name){
    const playerName = document.getElementById(name);
    const getPlayerName = playerName.innerText;
    console.log(getPlayerName);

    const nameList = document.getElementById('player-name-list');
    const creatListItem = document.createElement('li');
    
    if(nameList.children.length < 5){
        creatListItem.innerText = getPlayerName;
        nameList.appendChild(creatListItem);
    }else{
        return alert('You cannot select more then 5 players')
    };

    console.log(nameList.children.length)

};

// function for getting value from input field. 
function getInputFieldValue(inputElement){
    const getInputField = document.getElementById(inputElement);
    const getInputFieldStringValue = getInputField.value;
    const inputFieldNumericValue = parseFloat(getInputFieldStringValue);
    getInputField.value = '';
    return inputFieldNumericValue;
};

// function for getting value from amount display text field.
function getTextFieldValue(textElement){
    const getTextField = document.getElementById(textElement);
    const getTextFieldStringValue = getTextField.innerText;
    const textFieldNumericValue = parseFloat(getTextFieldStringValue);
    return textFieldNumericValue;
};

// function for setting string value on amount display text field.
function setTextFieldValue(textElement, value){
    const getTextField = document.getElementById(textElement);
    getTextField.innerText = value;
};
