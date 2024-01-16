document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('res');
    const buttons = document.querySelectorAll('.btn button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (buttonValue === 'C') {
                resultInput.value = '';
            } else if (buttonValue === '←') {
                resultInput.value = resultInput.value.slice(0, -1);
            } else if (buttonValue === '=') {
                try {
                    const expression = resultInput.value.replace(/x/g, '*');
                    // Evaluate the expression
                    resultInput.value = eval(expression);
                } catch (error) {
                    resultInput.value = 'Error';
                }
            } else {
                resultInput.value += buttonValue;
            }
        });
    });
});
