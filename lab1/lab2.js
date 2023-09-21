function basicOperation (operatino, value1, value2){
    if(operatino == '+')
        return value1 + value2;
    else if(operatino == '-')
        return value1 - value2;
    else if(operatino == '*')
        return value1 * value2;
    else if(operatino == '/')
        return value1 / value2;
    else
        return null;
}

console.log(basicOperation('+', 3, 5));
console.log(basicOperation('-', 10, 5));
console.log(basicOperation('*', 8, 5));
console.log(basicOperation('/', 20, 5));
console.log(basicOperation('', 3, 5));

function sumCube(n){
    let s = 0;
    for(let i = 1; i <= n; i ++){
        s = s + i*i*i;
    }
    return s;
}

console.log(sumCube(3));

function average(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
}
let arr = [4, 2, 3, 4, 5, 6];
console.log(average(arr));

function reverseEng(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i --){
        if(str[i] >= 'A' && str[i] <= 'z')
        newStr = newStr + str[i];
    }
    return newStr
}

console.log(reverseEng("abcdef34УК"));

function repeatStr(n, str){
    let newStr = '';
    while(n > 0){
        newStr = newStr +  str;
        n--;
    }
    return newStr;
}
console.log(repeatStr(3, "asd"));

function uniqueStr(arr1, arr2){
    let arr3 = [];
    let isUniq;
    for(let i = 0; i < arr1.length; i ++)
    {
        isUniq = true;
        for(let j = 0; j < arr2.length; j ++)
        {
            if(arr1[i] == arr2[j])
            {
                isUniq = false;
                break;
            }
        }
        if(isUniq)
        arr3.push(arr1[i]);
    }
    return arr3;
}

let arrStr1 = ["asd", "ffsa", "2sdas", "2asd", "asldjb"];
let arrStr2 = ["fgay", "asd", "2husdj", "2asd", "sdhyujn"];

console.log(uniqueStr(arrStr1, arrStr2));