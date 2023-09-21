let arr1 = [1, [1, 2, [3, 4]], [2, 4]];
let arr2 = [4, [2, 3, [3, 4]], [1, 4]];
function flatten(arr){
return arr.reduce(function(newArr, current){
    //console.log(current);
    return newArr.concat(Array.isArray(current) ? flatten(current): current);
}, []);
}
console.log(flatten([arr1, arr2]));


function calculate(arr){
    return arr.reduce(function(sum, current){
        return sum + (Array.isArray(current) ? calculate(current): current);
    }, 0);
}
console.log(calculate(arr1));


let arrStudents = [
    {
        name: "Oleg",
        age: 16,
        groupId: 1,
    },
    {
        name: "Stas",
        age: 19,
        groupId: 2,
    },
    {
        name: "Egor",
        age: 30,
        groupId: 2,
    },
    {
        name: "Olga",
        age: 19,
        groupId: 4,
    },
    {
        name: "Anna",
        age: 23,
        groupId: 1,
    },
    {
        name: "Vlad",
        age: 17,
        groupId: 3,
    },
    {
        name: "Alena",
        age: 22,
        groupId: 3,
    }
]

let newObj = arrStudents.reduce((objStudents, current) => {
    if(current.age >= 17){
        if(!objStudents[current.groupId]){
            objStudents[current.groupId] = [];
        }
        objStudents[current.groupId].push(current);
    }
    return objStudents;
}, {})
console.log(newObj);
function getStrCode(str){
    let newStr = '';
    for(let i = 0; i < str.length; i ++)
        newStr = newStr + str.charCodeAt(i);
    return newStr;
}

let total1 = getStrCode("ABC");
let total2 = getStrCode("ABC").replace('7','1');

console.log(parseInt(total1) - parseInt(total2));

function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {e: 5};

console.log(mergeObjects(obj1, obj2, obj3)); 

function builtPyramid(n){
    let pyramidArr = [];
    for(let i = n - 1; i >= 0 ; i --){
        let str = " ".repeat(i) + "*".repeat((n - i) * 2 - 1);
        pyramidArr.push(str);
    }
    return pyramidArr;
}

let pyramid = builtPyramid(8);
pyramid.forEach(element => {
    console.log(element);
});
