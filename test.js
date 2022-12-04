
const calculator = () =>{
    let num1 = 0;
    let num2 = 0;
    let result = 0;
    let operator = '';
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.value;
            if(value === 'C'){
                display.value = '';
            }else if(value === '='){
                num2 = parseFloat(display.value);
                if(operator === '+'){
                    result = num1 + num2;
                }else if(operator === '-'){
                    result = num1 - num2;
                }else if(operator === '*'){
                    result = num1 * num2;
                }else if(operator === '/'){
                    result = num1 / num2;
                }
                display.value = result;
            }else if(value === '+' || value === '-' || value === '*' || value === '/'){
                num1 = parseFloat(display.value);
                operator = value;
                display.value = '';
            }else{
                display.value += value;
            }
        });
    });
}