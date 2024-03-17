// const resultDisplay = document.getElementById('result');
//         const operandDisplay = document.getElementById('operande');
//         let operand = '0';
//         let total = 0;
//         let operatorPrev = '';

//         function updateDisplay() {
//             operandDisplay.textContent = operand;
//             resultDisplay.textContent = total;
//         }

//         document.querySelectorAll('.button').forEach(button => {
//             button.addEventListener('click', () => {
//                 const input = button.textContent;

//                 if (input === 'AC') {
//                     operand = '0';
//                     total = 0;
//                     operatorPrev = '';
//                 } else if (input === '=') {
//                     if (operatorPrev === '+') {
//                         total += parseFloat(operand);
//                     } else if (operatorPrev === '-') {
//                         total -= parseFloat(operand);
//                     } else if (operatorPrev === '*') {
//                         total *= parseFloat(operand);
//                     } else if (operatorPrev === '/') {
//                         total /= parseFloat(operand);
//                     } else {
//                         total = parseFloat(operand);
//                     }
//                     operand = total.toString();
//                     operatorPrev = '=';
//                 } else if (input === '+' || input === '-' || input === '*' || input === '/') {
//                     if (operatorPrev === '+') {
//                         total += parseFloat(operand);
//                     } else if (operatorPrev === '-') {
//                         total -= parseFloat(operand);
//                     } else if (operatorPrev === '*') {
//                         total *= parseFloat(operand);
//                     } else if (operatorPrev === '/') {
//                         total /= parseFloat(operand);
//                     } else {
//                         total = parseFloat(operand);
//                     }
//                     operand = '0';
//                     operatorPrev = input;
//                 } else if (input === '.') {
//                     if (!operand.includes('.')) {
//                         operand += '.';
//                     }
//                 } else if (button.classList.contains('backspace')) {
//                     operand = operand.slice(0, -1);
//                     if (operand === '') {
//                         operand = '0';
//                     }
//                 } else {
//                     if (operand === '0' && operatorPrev === '=') {
//                         operand = '0';
//                         total = 0;
//                         operatorPrev = '';
//                     }
//                     if (operand === '0') {
//                         operand = '';
//                     }
//                     operand += input;
//                 }

//                 updateDisplay();
//             });
//         });