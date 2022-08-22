// function for getting a player name from the player display and setting it on the list item.
function playerSelection(name, button){
    const getPlayerName = document.getElementById(name);
    const playerName = getPlayerName.innerText;

    const nameList = document.getElementById('player-name-list');
    const creatListItem = document.createElement('li');
 
    // list item validation and calculation section.
    if(nameList.children.length < 5){
        creatListItem.innerText = playerName;
        nameList.appendChild(creatListItem);
    }else{
        return alert('You cannot select more then 5 players')
    };

    // selected button disable after clicked.
    const selectedButton = document.getElementById(button);
    selectedButton.setAttribute('disabled', true);
    selectedButton.style.backgroundColor = '#778899';
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
