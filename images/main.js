console.log('hi is my js ');
function addeven(value) {
if(value % 2 === 0) {
    return "this is even"
}else {
    return 'this is odd'
}
}
return value % 2 ==0 ? "even" : "odd";
console.log(addeven(3));
function musab(v) {
  if(v % 2 === 0) {
    return "this is even"
  }else {
    return "this is not Even"
  }
}
console.log(musab(3))
////////////////////////////////////////////////////////////////////////////////////////////////
function sumpostive (arr) {
    let initvalue = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > 0) {
            initvalue += arr[i];
        }
    }
    return initvalue
}
console.log(sumpostive([1, -3, 2, -4, 8]));
function sumNumers(arr) {
    return arr.filter((x) => x > 0).reduce((acc, cur) => acc + cur , 0)
}
console.log(sumNumers([-1, -2, 3, 4]));

////////////////////////////////////////////////////////////////////////////////////////////
function sumwithout(array) {
    if(array == null) return 0;
    let maxnum = Math.max(...array);
    let minnum = Math.min(...array);
    let arrfilter = array.filter((x) => x !== maxnum && x !== minnum) ;
    let newaray = arrfilter.reduce((acc, curnnt) => acc + curnnt, 0)
    // console.log(arrfilter);
    console.log(newaray);
}
sumwithout([2, 4, 1, 20, 5, 11])
////////////////////////////////////////////// /////////////////////////////////////////////////
function repeatstring(number, str) {
    let newstrang = ''
    for(let i =0; i<number; i++) {
        newstrang += str
    }
    return newstrang;
}
console.log(repeatstring(6, "  He "));
// anther answer
function repeat(num, str) {
    return str.repeat(num)
}
console.log(repeat(4, " ali "));
////////////////////////////////////////////////////////////////////////////////////////////
function digtal(n) {
return n.toString().split("").map((m) => Number(m)).reverse()
}
console.log(digtal(23456789));

/////////////////////////////////////////////////////////////////////////////////////////////
function countsheep(countofsheep) {
let counter = 0;
countofsheep.map((m) => {
    if(m === true) counter++
});
return counter;
}
/////////////////////////////////////////////////////////////////////////////////////////////
function getpostive(number) {
return -number;
}
console.log(getpostive(-8));
function pastive(num) {
    return -num;
}
///////////////////////////////////////////////////////////////////////////
function makenagative(num) {
return num > 0 ? -num : num;
}
function make(number) {
    if(number > 0) {
        return -number;
    }else {
        number;
    }
}
console.log(makenagative(6));
//////////////////////////////////////////////////////////////////////////////
function findNeedel(array) {
for(let i = 0; i<array.length; i++) {
    if(array[i] === "musab") {
        return " hi iam developer " + i;
//  anther soluation function in the code array.indexof("musab")
    }
}
}
console.log(findNeedel(["ali", "eissa", "musab", "adam"]));
/////////////////////////////////////////////////////////////////////////////////
function countpostivenumernagtive(input) {
let postivearray = [];
let nagtivenum = 0
for(let i =0; i<input.length; i++) {
    if(input[i] > 0) {
        postivearray.push(input[i])
    }else { 
        nagtivenum += input[i]
    }
}
return [postivearray.length, nagtivenum];
}
console.log(countpostivenumernagtive([1,2,3,-1,-2,-3]));
// anthor souluation with filter
function countpostivenumernagtive(input) {
    let postivearray = input.filter((x) => x > 0).length;
    // postivearray = input.filter((x) => x > 0).length
    let nagtivenum = input.filter((m) => m < 0).reduce((acc, cur) => acc + cur, 0)
    return[postivearray, nagtivenum]
}
console.log(countpostivenumernagtive([1,2,3,4,5,-1,-2,-5]));
////////////////////////////////////////////////////////////////////////////////////////
function dublechar(str) {
// return str.split('').map((m) => m.repeat(2)).join('')
return str.split('').map((m) => m.repeat(2)).join('')
}
console.log(dublechar("musab"))
//////////////////////////////////////////////////////////////////////////////////////////
function basicop(opration, value1, value2) {
if(opration == '+') return value1 + value2
if(opration == '-') return value1 - value2
if(opration == '*') return value1 * value2
if(opration == '/') return value1 / value2
}
//Anthor Soual
function caluc(opration, val1, val2) {
    if(opration == '+') return val1 + val2
    if(opration == '-') return val1 - val2
    if(opration == '*') return val1 * val2
    if(opration == '/') return val1 / val2
}
console.log(basicop("*", 3,4));
// anthor bulid function eval search
/////////////////////////////////////////////////////////////////////////////////////
function tosqureroot(array) {
let newarray = []
for (let i = 0; i < array.length; i++) {
  if(Number.isInteger(Math.sqrt(array[i]))) {
    newarray.push(Math.sqrt(array[i]))
  } else {
    newarray.push(array[i] * array[i])
  }  
}
return newarray
}
console.log(tosqureroot([4, 3, 9, 7, 2]));
////////////////////////////////////////////////////////////////////////////////////
function countx(x, n) {
let newarray = []
for (let i = 1; i <= n; i++) {
    newarray.push(x * i) 
}
return newarray
}
console.log(countx(2, 5));
//////////////////////////////////////////////////////////////////////////////////////
function nospace(x) {
    return x.split(" ").join(" ")
}
console.log(nospace("hello"));
//////////////////////////////////////////////////////////////
function invert(array) {
    let newaray = []
    for(let i = 0; i <array.length; i++) {
        newaray.push(array[i] * -1)
    }
    return newaray;
}
console.log(invert([-1, -2, 3, 4]));
function invers(arr) {
    return arr.map((x) => x * -1)
}
console.log(invers([-1, -2, 3]));
/////////////////////////////////////////////////////////////
function bool(bool) {
if(bool == true) {
    return "yes"
} else {
    return "No"
}
}
return bool ? "yes" : "No"
console.log(bool(true));
///////////////////////////////////////////////////////////////////////
function reverse (strang){
return strang.split(' ').reverse().join(" ")
}
console.log(reverse("Hello world"));
///////////////////////////////////////////////////////////////////////
function numbertostrang(num) {
    return num.toString();
}
console.log(numbertostrang(1223));
//////////////////////////////////////////////////////////////
function find(array) {
let sum = 0;
for(let i =0; i<array.length; i++) {
    sum += array[i];
    // let final = sum / array[i].length
}
let final = sum / array.length;
return final;
return array.reduce((acc, curnnt,) => acc + curnnt ,0) / array.length
}

console.log(find([1, 2, 3, 4]));
////////////////////////////////////////////////////////////////////////
function stringTonumber(str) {
    // return Number(str)
    return +str ;
}
console.log(stringTonumber("12345678"));
/////////////////////////////////////////////////////////////////
function monkycount(n) {
    let newarray = [];
    for(let i = 1; i<= n; i++) {
        newarray.push(i)
    }
    return newarray
}
console.log(monkycount(4));
///////////////////////////////////////////////////////////////
function great(language) {
    let languages = {
        english: "wellcome"
    }
    if(languages.hasOwnProperty(language)){
        return languages[language]
    }
}
console.log(great("english"));
///////////////////////////////////////////////////////////////////////////////
function smash(word) {
return word.join(' ')
}
console.log(smash(["my", "musab", "abdallah", "alnour"  ]));
//////////////////////////////////////////////////////////////////////
function swithone(number) {
    switch(number) {
    case 0 : return "zero";
    break;
    case 1 : return "one";
    break;
    case 2 : return "two";
    break;case 1 : return "one";
    break;
    case 3 : return "three";
    break;
    case 4 : return "four";
    break;
    case 5 : return "five";
    break;
    default: return "wrong number"
}
}
// console.log(swithone(3));
console.log(swithone(50));
///////////////////////////////////////////////////////////////////////////
function bounsTime(salary, bouns) {
    if(bouns == true) {
        return salary *  10
    } else {
        return salary
    }
}
console.log(bounsTime(30, true));
/////////////////////////////////////////////////////////////////////////////
function remove(string) {
    return string.replace("!", "")
}
console.log(remove(" hi this is my string !"))
///////////////////////////////////////////////////////////////////////////
function aryplayBanjo(name) {   
    if(name.charAt(0) === 'R' || name.charAt(0) === 'r') {
        return `${name} play Banjo`
    }else {
        return `${name} are Not playing Banjo`
    }
}
console.log(aryplayBanjo("ali"));
///////////////////////////////////////////////////////////////////////////////

function removeEveryother(arr) {
    let  newaray = [];
    for( let i = 0; i< arr.length; i++) {
        if(i % 2 === 0) {
            newaray.push(arr[i]);
        }
    }
    return newaray;
}
console.log(removeEveryother(["keep", "remove", "keep", "remove"]));
///////////////////////////////////////////////////////////////////////////
function carCost(day) {
let price = 40 * day
if(day < 3) return price;
if(day >= 7) {
    return price - 50;
}else {
    return price - 20;
}
}
console.log(carCost(7))
/////////////////////////////////////////////////////////////////////////////////
function xor(a, b) {
    return a === b ? false : true;
}
console.log(xor(true, false));
/////////////////////////////////////////////////////////////////////////////
function firstnon(arr) {
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] - 1 !== arr[i - 1]) return arr[i]
    }
    return null;
}
console.log(firstnon([1,2,3, 4, 6, 7, 8]));
////////////////////////////////////////////////////////////////////////////////
class kata {
    static getvalue(width, height, length) {
           return width * height * length;
    }
}
console.log(kata.getvalue(10, 10, 10));
//////////////////////////////////////////////////////////////////////
function todcimalpalce(n) {
    return Number(n.toFixed(2))
}
console.log(todcimalpalce(123.345));
/////////////////////////////////////////////////////////////////////////////
function formatmoney(amount) {
return `$${amount.toFixed(2)}`
}
console.log(formatmoney(3.1));
/////////////////////////////////////////////////////////////
function position(letter) {
const alphpet = 'abcdefghijklmnopqrstuvwxyz';
for( let i = 0; i<alphpet.length; i++) {
    if(alphpet[i] === letter) {
        return `position of alphpet : ${i + 1}`
    }
}
// another soultion
return alphpet.indexOf(letter) + 1
}
console.log(position('y'));
//////////////////////////////////////////////////////////////////////
function lovefun(flower1,flower2) {
return flower1 % 2 !== flower2 % 2;
}
console.log(lovefun(2, 7));
////////////////////////////////////////////////////////////////////////
function noborangzero(n) {
    let stringpram = String(n)
    while(stringpram.endsWith(0)) {
        stringpram = stringpram.slice(0, stringpram.length - 1)
    }
    return Number(stringpram);
}
console.log(noborangzero(1230000000000000));
//////////////////////////////////////////////////////////////////////////
function getavarge(marks) {
    let sum = 0;
    let avarge;
    for(let i = 0; i<marks.length; i++) {
     sum += marks[i];
    }
    avarge = sum / marks.length;
    return Math.floor(avarge);
}
console.log(getavarge([2, 4, 6, 8, 10]));
///////////////////////////////////////////////////////////////////////////
function shortcut(string) {
const valwls = ['a', 'i', 'u', 'e', 'o']
let result = [];
for( let i = 0; i<string.length; i++) {
    if(!valwls.includes(string[i])) {
        result.push(string[i])
    }
}
return result.join('')
}
console.log(shortcut('musab'));
/////////////////////////////////////////////////////////////////////////////////
function removemarks(s) {
    return s.replace(/[!]/g ,"");
    // another soul
    return s.split().filter((e) => e !== '!').join('')
}
console.log(removemarks('!! hell!o !wor!ld !!'));
//////////////////////////////////////////////////////////////////////////////////
function sulation(str) {
let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
result += str[i]
}
return result;
return str.split("").reverse().join("")
}
console.log(sulation('musab'));
//////////////////////////////////////////////////////////
function test() {
    console.log('Hello woled');
}
test();
/////////////////////////////////////////////////////////////////
function grow(x) {
    let result = 1;
    for(let i = 0; i<x.length; i++) {
result *= x[i]
    }
    return result;
return x.reduce((acc, cuu) => acc * cuu)
}
console.log(grow([3, 2, 5,]));
//////////////////////////////////////////////////////////////////////
function ispaindrom(x) {
 return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}
console.log(ispaindrom("madam")); return true
console.log(ispaindrom("Hello")); folse
//////////////////////////////////////////////////////////////////////
var sumation = function (sum) {
     let result = 0;
     for(let i = 0; i<= sum; i++) {
        result += i;
     }
     return result;
}
console.log(sumation(8));
////////////////////////////////////////////////////////////////////
function printarray(array) {
    return array.join(",");
}
console.log(printarray(["H","e", "l", "l", "o"]));
////////////////////////////////////////////////////////////////////////////
 function removeele(str) {
    return str.slice(1 , -1);
 }
 console.log(removeele("hello"));
 ///////////////////////////////////////////////////////////////////////////
 function sqauesum(number) {
return number.map((n) => n * n).reduce((acc, curunt) => acc + curunt)
 }
 console.log(sqauesum([1, 2, 2]));
//  function musab(num) {
//     return num.map((n)=>  n* n).reduce((curnnt, acc) => curnnt * acc)
//  }
//  console.log(musab(1, 2, 3, 4))
///////////////////////////////////////////////////////////////////////////
function findsmallint (n) {
    return Math.min(...n);
}
console.log(findsmallint([1, 2, 3,4]));
/////////////////////////////////////////////////////////////////////////////////
function divin(n, x, y) {
if(n % x === 0 && n % y === 0) {
    return true
} else {
    return false;
}
}
console.log(divin(3, 1, 3));
console.log(divin(8, 2, 9));
//////////////////////////////////////////////////////////////////////////////////////////
function maps(x) {
    return x.map((n) => n * 2)
}
console.log(maps([2, 3, 4]));
// function one(x) {
//     x.map((n) =>  n * 2)
// }
// console.log(one(3, 34, 5))
/////////////////////////////////////////////////////////////////////////////////////////
function fakebin(x) {
    return x.split('').map((n) => n < '5' ? '0' : 1).join('')
}
console.log(fakebin('12345678987654321'));
function sum(number) {
    if(number.length < 0) {
        return 0
    }
    return number.reduce((acc, curr) => acc + curr)
}
console.log(sum([2, 3, 5, -1]));
//////////////////////////////////////////////////////////////
function multiplay(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(multiplay(3));
// function muli(n) {
//     if(n % 2 == 0) {
//         return n * 8
//     }else {
//         return n * 9
//     }
// }
/////////////////////////////////////////////////////////////////////////
function makeupercase(str) {
    return str.toUpperCase()
}
console.log(makeupercase("musab"));
// function up(test) {
//     return test.toUpperCase()
// }
// console.log(test("hello world"))
////////////////////////////////////////////////////////////////////////////
function arrayplusearray(arr1, arr2) {
return arr1.concat(arr2).reduce((acc, cuu) => acc + cuu);
}
console.log(arrayplusearray([1, 2, 3], [3, 4, 5]));

//////////////////////////////////////////////////////////////////////////
// function fast(ar1, ar2) {
//     return ar1.concat(ar2).reduce((acc, curent) => acc + curunt)
// }
// console.log(fast)
function summix(x) {
    return x.map((n) => Number(n)).reduce((acc, curnt) => acc + curnt)
}
console.log(summix([2, 3, 4,'9', '2']));
//////////////////////////////////////////////////
function fesat(beast, dish) {
    let letters = beast[0] + beast[beast.length - 1];
    let dishletters = dish[0] + dish[dish.length - 1];
    if(letters === dishletters) {
        return true;
    }else {
        return false;
    }
}
console.log(fesat("gera bule heron", "garcliv noon"));
//////////////////////////////////////////////////////////////////////////////////////
function updatelight(curent) {
let arraylight = ['green', 'yellow', 'red'];
if(arraylight.indexOf(curent) === 2) {
    return 'green'
}else {
    return arraylight[arraylight.indexOf(curent) + 1];
}
}
console.log(updatelight('red'));
/////////////////////////////////////////////////////////////////////////////////////
function setalarm(employe, vaction) {
    return employe && !vaction;
}
console.log(setalarm(true, false));
////////////////////////////////////////////////////////////////////////////////////////////
let quaterof = (match) => {
    return match < 4 ? 1 : match < 7 ? 2 : match < 10 ? 3 : 4;
}
console.log(quaterof(2));
/////////////////////////////////////////////////////////////////////////
function addlength(str) {
return str.split(' ').map((Element) => Element + ' ' + Element.length)
}
console.log(addlength('apple pan'));
/////////////////////////////////////////////////////////////////////
function howmanylight(name = 'ahmed')  {
return name === 'zach' ? 18 : 0;
}
console.log(howmanylight('adam'));
/////////////////////////////////////////////////////////////////////////
function twiceold(dadyearsold, sonyearsold) {
    return dadyearsold - (sonyearsold * 2);
}
console.log(twiceold(36, 7));
///////////////////////////////////////////////////////////////////////////////
function hopecount(n) {
    return n >= 10 ? 'great': 'keep'
}
console.log(hopecount(10));
function reversewords(str) {
    return str.split('').reverse().join('')
}
console.log(reversewords('hello world'));
////////////////////////////////////////////////////////////////////
function bmi(height, weight) {
// 73 revation
}
////////////////////////////////////////////////////////////////////
function divin(numbers, divin) {
    return numbers.filter((n) => n % divin === 0);
}
console.log(divin([1, 2, 3, 4, 5, 6], 2));
///////////////////////////////////////////////////////////
function powerooftwo(n) {
    return Array(n + 1).fill(0).map((n , i) => n + i ).map((n)=> Math.pow(2, n));
}
console.log(powerooftwo(4));
function sumstr(a, b) {
   return (Number(a) + Number(b)).toString();
}
console.log(sumstr('4', '5'));
//////////////////////////////////
function twosort(s) {
    return s.sort()[0].split('').join('***')
}
console.log(twosort(['bitcoin']));
////////////////////////////////////////////
function expeissionmatters(a, b, c) {
return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    c * (a + b)
)
}
console.log(expeissionmatters(3, 5, 7));
//////////////////////////////////////////////////////////////
function goosfillter(birds) {

}
function between(a, b) {
    return Array(b - a + 1).fill(a).map((n, i) => n + i);
}
console.log(between(1, 6 ));
///////////////////////////////////////////////////////////////////
function str(size) {
    let result = ''
    for(let i = 1; i <= size; i++) {
        if(i % 2 === 0) {
result+= '0'
        }
        else {
            result += '1'
        }
    }
    return result;
}
console.log(str(6));
///////////////////////////////////////////////////////////////////////////////////////

function one(integer, limit) {
    let finallarray = [];
    for(let i = 1; i <= limit; i++) {
        let multiplay = integer * i;
        if(multiplay === limit) {
            finallarray.push(multiplay);
            break;
        } else {
            finallarray.push(multiplay)
        }

    }
    return finallarray;
}

console.log(one(5, 25));
////////////////////////////////////////////////////////////////////////////////
function billbord(name, price = 30) {
    let result = 0;
    for(let i = 0; i<= name.length; i++) {
        result += price
    }
    return result;
}    
console.log(billbord('ali'));
function sayhello(name, city, stats) {
    return ` hello ${name.join('')} ! well come to ${city} ${stats}`
}
console.log(sayhello(['musab', 'abdallah'], 'omdurman' , 'happy'));
/////////////////////////////////////////////////////////////////////////////////
function strang(strang) {
    if(!strang || strang.length < 3) return;
    let splitstr = strang.split(" ");
    let newarr = [];
    for(let i = 1; i<=splitstr.length - 1; i++) {
        newarr.push(splitstr[i])
    }
    return newarr;
}
console.log(strang('ahmed, mona, ali, musab , ehab'));