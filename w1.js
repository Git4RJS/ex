//1.
const arr = [0, 5, 4, 2, 8]
function tinhTong(arr) {
    let i = 0,sum=0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(tinhTong(arr));


//2.
const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 },
]

function getNameArr(inputArr,key_name) {
    let Result = [], i = 0;
    while (i < inputArr.length) {
        Result.push(inputArr[i][key_name]);
        i++;
    }
    return Result;
}
console.log(getNameArr(person,"name"));

//3.
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']
var arr3 = arr1.concat(arr2.filter(value => !arr1.includes(value)));
console.log(arr3);


