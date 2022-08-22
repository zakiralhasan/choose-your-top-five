// calculate button's working section 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const nameList = document.getElementById('player-name-list');
    const nameListLength = nameList.children.length;
    const playerCostInputFieldValue = getInputFieldValue('per-player-cost-input-iield');

// input value validation and calculation section
    if(isNaN(playerCostInputFieldValue)){
        return alert('Please enter numeric value');
    }else if(playerCostInputFieldValue >= 0){
        const totalPlayercost = playerCostInputFieldValue * nameListLength;
        setTextFieldValue('player-expenses-display', totalPlayercost);
    }else{
        return alert('Please enter a positive number');
    };
});

// calculate total button's working section
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const totalPlayercost = getTextFieldValue('player-expenses-display');
    const managerCostInputFieldValue = getInputFieldValue('manager-cost-input-field');
    const coachCostInputFieldValue = getInputFieldValue('coach-cost-input-field');

// input value validation and calculation section 
    if(isNaN(managerCostInputFieldValue && coachCostInputFieldValue)){
        return alert('Please enter numeric value')
    }else if(managerCostInputFieldValue >= 0 && coachCostInputFieldValue >= 0){
        const totalCost =totalPlayercost + managerCostInputFieldValue + coachCostInputFieldValue;
        setTextFieldValue('total-cost-display-field', totalCost);
    }else{
        return alert('Please enter a positive number');
    };
});
