// Создайте функцию, которая принимает число, а возвращает число - его факториал. Для числа 5 факториал равен 1*2*3*4*5.

let fact = parseInt(prompt('Факториал какого числа посчитаем?'));
let x = 1;

let factCount = function(fact) {
    for (let i=1; i<=fact; i++) {
        x = x * i;
        console.log('i=' +i+ ' x=' +x);
    }
    return x;
}

alert('Факториал ' + fact + ' равен: ' + factCount(fact));