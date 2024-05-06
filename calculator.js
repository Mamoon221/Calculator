
const display = document.querySelector('.display');


const buttons = document.querySelectorAll('.btn');


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {

    const value = buttons[i].textContent;


    switch (value) {
      case 'AC':
        display.textContent = '0';
        break;
      case 'DEL':
        display.textContent = display.textContent.slice(0, -1);
        break;
      case '%':
        display.textContent = parseFloat(display.textContent) / 100;
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        display.textContent += ` ${value} `;
        break;
      case '=':
        display.textContent = eval(display.textContent);
        break;
      default:
        if (display.textContent === '0') {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
        break;
    }
  });
}
