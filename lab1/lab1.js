let a = 5; //number
let name = "Name"; //string
let i = 0; // number
let double = 0.23; //number 
let result = 1/0; // number 
let answer = true; //boolen
let no = null; //null
console.log(a + ' ' + typeof(a));
console.log(name + ' ' + typeof(name));
console.log(i + ' ' + typeof(i));
console.log(double + ' ' + typeof(double));
console.log(result + ' ' + typeof(result));
console.log(answer + ' ' + typeof(answer));
console.log(no + ' ' + typeof(no));
let amountSq = (45/5) *Math.floor(21/5);
// 45/5 = 9   21/5 = 4   4*9 = 36

i = 2;
a = ++i;
let b = i++;
console.log(a == b);
console.log("");
console.log("Котик" > "котик");
console.log("Котик" > "китик");
console.log("Кот" > "Котик");
console.log("Привет" > "Пока");
console.log(73 > "53");
console.log(0 == false);
console.log(54 > true);
console.log(123 > false);
console.log(true < "3");
console.log(3 < "5mm");
console.log(8 > "-2");
console.log(34 == "34");
console.log(null == undefined);

let userName = prompt("Введите имя: ");
let baseName = "марина";
let confirmed = userName.toLowerCase().includes(baseName);
if(confirmed)
{
    alert("данные верны");
}
else
{
    alert("не верное имя");
}


let rus = true;
let math = true;
let eng = true;

if(rus && math && eng)
{
    console.log("сдал");
}
else if(!rus && !math && !eng)
{
    console.log("не сдал");
}
else
{
    console.log("пересдача");
}

console.log(" ");
console.log(true + true);
console.log(0 + "5");
console.log(5 + "mm");
console.log(8/Infinity);
console.log(9 * "\n9");
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 || 0);
let array = [];
for(let i = 0; i < 10; i ++)
{
    i % 2 == 0 ? array[i] = i + 2 : array[i] = i + 'mm'
}

console.log(array);

let arrDays = ["понедельник", "вторник", "средa", "четверг", "пятница", "суббота", "воскресенье"];
let numDay = prompt("Введите номер дня: ");
numDay >= 1 && numDay <= 7 ? alert(arrDays[numDay - 1]) : alert("неверный день");


numDay = prompt("Введите номер дня: ");
let weekDays = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье"
};
numDay >= 1 && numDay <= 7 ? alert(weekDays[numDay]) : alert("неверный день");

let parm1 = prompt("введите первый параметр");
alert(fun1(parm1, 1234));
function fun1(a, b, c = "asd")
{
    return a + '' + b + c;
}

function params(a, b)
{
    if(a == b)
        return a*4;
    else
        return a*b;
}
console.log(params(3, 4));
let paramsL = function(a, b)
{
    if(a == b)
        return a*4;
    else
        return a*b;
}
console.log(paramsL(5, 5));
let paramsV = (a, b) =>{
    if(a == b)
        return a*4;
    else
        return a*b;
}
console.log(paramsV(5, 10));