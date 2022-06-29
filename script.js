// функция очистки массива от букв и отрицательных чисел

function filter_list(l) {
    let newArr = []
    l.filter(item => {
        if (typeof item === "number" && item >= 0) {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(filter_list([22, 33, 'dsfdsf', 'asd', '123', -1]))

// banjo

function areYouPlayingBanjo(name) {
    const newName = name.toLowerCase().split('');
    if (newName[0] == 'r') {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))


//true/false to str

function booleanToString(b) {
    return b.toString()
}

console.log(true)

//clock milisec

function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
}

console.log(past(0, 1, 1));

//string to array

function stringToArray(string) {
    return string.split(' ')
}

console.log(stringToArray("I love arrays they are my favorite"))

//count points


function points(games) {
    let sum = 0;
    let newArr = [];
    games.forEach(item => newArr.push(item.split(':')));
    newArr.forEach(item => {
        if (item[0] > item[1]) {
            sum += 3
        }
        if (item[0] == item[1]) {
            sum += 1
        }
    })

    return sum

    // return games.reduce((acc, item) => {
    //     const arr = item.split(':');
    //     const sum = arr[0] > arr[1] ? 3 : 1;
    //     return acc + sum
    // },0)
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:3', '3:4', '4:1', '3:2', '4:2', '4:3']))

//countBy

function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n * x; i += x) {
        z.push(i)
    }
    return z;
}

console.log(countBy(3, 6))

//betterThanAverage

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, item) => {
        return acc + item / classPoints.length
    }, 0);
    if (sum < yourPoints) {
        return true
    } else {
        return false
    }
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

//count cards

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;

    }

    let holdBet = 'Hold'

    if (count < 0) {
        return count + holdBet
    } else {
        holdBet = 'Bet'
        return count + holdBet
    }
}

//recursion

function sum(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}

console.log(sum([2, 3, 4], 1))

//math min/max random

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//multi ternary

function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
}

checkSign(10);

//recursion (fill array with min & max given)

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

//remove fisrt/last letter

function removeChar(str) {
    return str.slice(1, -1)
};

console.log(removeChar('eloquent'))

//array of nums

function sumMix(x) {
    // let sum = 0
    // x.map(item => sum+= +item)
    // return sum
    return x.reduce(function (prev, item) {
        return prev + +item
    }, 0)
}

console.log(sumMix([0, 1, 2, 3]))

//upper string

function upperStr(str) {
    let newArr = str.split(' ')
    return newArr.map(item => item.charAt(0).toUpperCase() + item.slice(1))
}

console.log(upperStr("How can mirrors be real if our eyes aren't real"))

//middle of the word

function getMiddle(s) {
    let pos
    let length

    if (s.length % 2 == 1) {
        pos = s.length / 2;
        length = 1
    } else {
        pos = s.length / 2 - 1
        length = 2
    }

    return s.substring(pos, pos + length)
}

console.log(getMiddle("testing"))
console.log(getMiddle("test"))

//delete spaces

function noSpace(x) {
    return x.replace(/\s+/g, '');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

//odd/even func

function oddOrEven(array) {
    let sum = 0
    array.forEach(item => sum += item)
    return sum % 2 == 0 ? "odd" : "even"
}


console.log(oddOrEven([0]))

function reverseWords(str) {
    let newArr = str.split(' ').map(item => item.split('').reverse().join(''));
    return newArr.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))


function digitize(n) {
    let newArr = JSON.stringify(n).split('').reverse();
    return newArr.map(item => +item)
}

console.log(digitize(35231))

function invert(array) {
    return array.map(item => -item)
}

console.log(invert([1, 2, 3, 4, 5]))

function sumTwoSmallestNumbers(numbers) {
    const newArr = numbers.sort((a, b) => b - a)
    return newArr[newArr.length - 1] + newArr[newArr.length - 2]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}

console.log(basicOp('+', 4, 7))

function repeatStr(n, s) {
    let sum = ''
    for (let i = 0; i < n; i++) {
        sum += s
    }
    return sum;
}

console.log(repeatStr(3, "*"))

function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}

console.log(boolToWord(true))

function getSum(a, b) {
    let result = 0;
    const start = a < b ? a : b;
    const end = a > b ? a : b;
    for (let i = start; i <= end; i++) {
        result += i
    }
    return result
}

console.log(getSum(0, -1))

function hero(bullets, dragons) {
    return bullets / dragons >= 2 ? true : false
}

console.log(hero(11, 5))

function solution(str, ending) {
    let res = true;
    // for (let i = str.length - 1; i > str.length - ending.length - 1; i--) {
    //     if (ending[i] === str[i])
    // }
    for (let i = 1; i <= ending.length; i++) {
        if (!(ending[ending.length - i] === str[str.length - i])) {
            res = false
        }
    }
    return res
}

console.log(solution('sumo', 'omo'))

function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0);

}

console.log(lovefunc(1, 4))

function smash(words) {
    let result = ''
    words.forEach(item => result += `${item} `)
    return result.trim()
};

function removeSmallest(numbers) {
    if (numbers.length) {
        let newArr = [...numbers];
        let newRes = [...numbers];
        newArr.sort((a, b) => b - a);
        newRes.splice(newRes.indexOf(newArr[newArr.length - 1]), 1)
        return newRes
    }
    return numbers
}

console.log(removeSmallest([5, 3, 2, 1, 4, 1]))

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Danie'))

function litres(time) {
    return Math.floor(time / 2);
}

console.log(litres(12.3))

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}

console.log(even_or_odd(2))

function sum(numbers) {
    let sum = 0;
    numbers.map(item => sum += item)
    return sum
}

console.log(sum([1, 5.2, 4, 0, -1]))

function descendingOrder(n) {
    return +n.toString().split('').sort((a, b) => b - a).join('')
}

console.log(descendingOrder(1021))

function countSheeps(arrayOfSheep) {
    let newArr = arrayOfSheep.filter(item => item)
    return newArr.length
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]))

function findNeedle(haystack) {
    let haystackPosition = haystack.indexOf('needle') + 1
    return `found the needle at position ${haystackPosition}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

var min = function (list) {
    let min = list.sort((a, b) => b - a)
    return min[min.length - 1];
}

var max = function (list) {
    let max = list.sort((a, b) => b - a)
    return max[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))

function check(a, x) {
    return a.includes(x)
}

console.log(check([66, 101], 66))

var countSheep = function (num) {
    let str = ''
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    return str
}

console.log(countSheep(3))

function alphabetPosition(text) {
    let alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }
    return text.toLowerCase().split('').map((item) => alphabet[item]).filter((item) => item).join(' ')
}

console.log(alphabetPosition("The narwhal bacons at midnight."))

var number = function (busStops) {
    // let sum = 0;
    // let oth = 0;
    // for (let i = 0; i < busStops.length; i++) {
    //     for (let j = 1; j < busStops[i].length; j++) {
    //         sum += busStops[i][0];
    //         oth += busStops[i][1]
    // }}
    // return sum - oth
    return busStops.reduce((acc, [item1, item2]) => acc + item1 - item2 , 0)
}

console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))

function findShort(s){
    let res = s.split(' ').reduce((a, b) => a.length <= b.length ? a : b)
    return res.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function squareSum(numbers){
    return numbers.reduce((acc, item) => acc + Math.pow(item, 2))
}

console.log(squareSum([1,2]))

function rentalCarCost(d) {
    let cost = 40;
    if (d < 3) {
        return cost * d
    } else if (d < 7) {
        return (cost * d) - 20
    } else {
        return (cost * d) - 50
    }
}

console.log(rentalCarCost(1))
console.log(rentalCarCost(8))

//binary search

function search (arr, key) {
    const sortedArr = arr.sort((a, b) => a - b)
    let start = 0;
    let end = sortedArr.length - 1;
    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArr[middle] === key) {
            return middle
        } else if (sortedArr[middle] < key) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return -1
}

console.log(search([1, 6, 3, 4, 5, 2, 7, 8, 10, 9], 8))