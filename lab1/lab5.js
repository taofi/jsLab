function makeCounter(){
    let currentCount = 1;
    return function(){
        return currentCount ++; // Хранит ссылку на  лексическое окружение makeCounter  
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
let counter2 = makeCounter(); // новое лексическое окружение currentCount = 1
console.log(counter2());
console.log('');
let counter1 = makeCounter(); //разное лексическое окружение
let counter12 = makeCounter(); 
console.log(counter1());
console.log(counter1());
console.log(counter12());
console.log(counter12());

function funV(a, b, c){
    return a * b * c;
}

function curry(f){
    return function(a){
        return function(b){
            return function(c){
                return f(a, b, c);
            }
        }
    }
}
let curryFun = curry(funV);
let oneConst = curryFun(4);
console.log(oneConst(5)(6));
console.log(oneConst(7)(8));


function* moveGenerator(startX, startY) {
    let x = startX;
    let y = startY;

    while (true) {
        let direction = yield { x, y }; // Возвращает текущие координаты

        switch (direction) {
            case 'left':
                x -= 10;
                break;
            case 'right':
                x += 10;
                break;
            case 'up':
                y -= 10;
                break;
            case 'down':
                y += 10;
                break;
        }
    }
}

const mover = moveGenerator(0, 0); // Начальные координаты объекта
mover.next(); // Инициализация генератора

function getUserDirection() {
    const direction = prompt("Введите направление (left, right, up, down):");
    if (['left', 'right', 'up', 'down'].includes(direction)) {
        const coords = mover.next(direction).value;
        console.log(`Новые координаты: x=${coords.x}, y=${coords.y}`);
        getUserDirection();
    } 
}

getUserDirection();


var xVar= 9;
for (let key in window) {
    console.log(key, window[key]);
}

window.xVar = 33;
console.log(xVar);
