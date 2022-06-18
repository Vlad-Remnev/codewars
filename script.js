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

function booleanToString(b){
    return b.toString()
}

console.log(true)

//clock milisec

function past(h, m, s){
    return (h*60*60*1000) + (m*60*1000) + (s*1000)
}

console.log(past(0,1,1));

//string to array

function stringToArray(string){
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
        } if (item[0] == item[1]) {
            sum +=1
        }
    })

    return sum
    
    // return games.reduce((acc, item) => {
    //     const arr = item.split(':');
    //     const sum = arr[0] > arr[1] ? 3 : 1;
    //     return acc + sum
    // },0)
}

console.log(points(['1:0','2:0','3:0','4:0','2:3','3:4','4:1','3:2','4:2','4:3']))

//countBy

function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n*x; i+=x) {
        z.push(i)
    }
    return z;
}

console.log(countBy(3 , 6))

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

function removeChar(str){
    return str.slice(1, -1)
};

console.log(removeChar('eloquent'))

//array of nums

function sumMix(x){
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

function noSpace(x){
    return x.replace(/\s+/g, '');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))