const inputNumber = document.querySelector("#number");
const button = document.querySelector("#button");

const caluculate = () => {
    const number = inputNumber.value.trim();
    const num = parseFloat(number);
    
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('hogehuga');
    } else if (num % 3 === 0) {
        console.log('hoge');        
    } else if (num % 5 === 0) {
        console.log('huga');
    } else if (num % 7 === 0) {
        console.log('github');
    } else {
        console.log(num);
    }
    
}

button.addEventListener('click', caluculate)