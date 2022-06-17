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