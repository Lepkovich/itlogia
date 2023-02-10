// Создайте любую страницу минимум из 10 разных элементов и минимум с 3 уровнями вложенности.
// Попробуйте найти каждый элемент с помощью querySelector.

console.log(document.querySelector('header'));
console.log(document.querySelector('header>div'));
console.log(document.querySelector('header>div>div'));
console.log(document.querySelector('header>div>div:nth-child(2)'));
console.log(document.querySelector('header>div>div:nth-child(2)>ul'));
console.log(document.querySelector('header>div>div:nth-child(2)>ul>li'));
console.log(document.querySelector('header>div>div:nth-child(2)>ul>li:nth-child(2)'));
console.log(document.querySelector('header>div>div:nth-child(2)>ul>li:nth-child(3)'));

console.log(document.querySelector('.catalog'));
console.log(document.querySelector('.catalog-items'));
console.log(document.querySelector('.catalog-item'));
console.log(document.querySelector('.catalog-item:nth-child(2)'));
console.log(document.querySelector('.catalog-item:nth-child(3)'));
console.log(document.querySelector('.catalog-item:nth-child(4)'));


document.querySelector('h1').innerText = 'Измененный главный заголовок';
console.log(document.querySelector('#portfolio'));
console.log(document.querySelector('#about-us'));
