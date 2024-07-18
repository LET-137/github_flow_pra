const inputNumber = document.querySelector("#number");
const button = document.querySelector("#button");

const caluculate = () => {
    const number = inputNumber.value.trim();
    const num = parseFloat(number);
    const result = num % 3
    
    if (result === 0 ) {
        const result5 = num % 5
        if (result5 === 0 ) {
            console.log('hogehuga');
        }
        console.log('hoge');
    } else {
        const result5 = num % 5
        if (result5 === 0) {
            console.log('huga');
        } else {
            console.log(num);
        }
    }
}

button.addEventListener('click', caluculate)