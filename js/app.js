// calculate button's working section 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const nameList = document.getElementById('player-name-list');
    const nameListLength = nameList.children.length;
console.log(nameListLength)
    const playerCostInputFieldValue = getInputFieldValue('perPlayerCostInputField');
    const totalPlayercost = playerCostInputFieldValue * nameListLength;

    console.log(totalPlayercost)

    setTextFieldValue('player-expenses-display', totalPlayercost);
});

// calculate total button's working section
document.getElementById('calculate-total-btn').addEventListener('click', function(){

})