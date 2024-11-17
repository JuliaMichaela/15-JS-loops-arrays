let numbers = [];

for(let i = -10; i<=10; i++) {
    numbers.push(Number(i));
}

document.getElementById('array').innerHTML = 'Массив : ' + numbers;

let positiveNumbers = [];
for (let i = 0;i<numbers.length; i++){
    let number = numbers[i];
    if (number>0){
        positiveNumbers.push(number ** 2 );
    }
}

positiveNumbers.sort((a, b) => b - a);

document.getElementById('newArray').innerHTML = 'Отсортивованный массив: ' + positiveNumbers;
console.log(positiveNumbers);
