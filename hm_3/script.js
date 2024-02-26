// loop even
for (let a = 2; a <= 20; a += 2){
    console.log (a)
}

// array

console.log('-------------')

let arr = ['pomegranate' , 'black' , 18] 

for (let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i] , typeof arr[i])
}


// comparison
let a = Number(prompt("Enter first number to compare"))

let b = Number(prompt("Enter second number to compare"))

// a > b ? console.log(a) : console.log(b)

if (a > b) {
    console.log(a)
}else {
    console.log(b)
}

// loop odd

console.log('-------------')

for (let b = 1; b <= 15;b += 2){
    if (b %2 !== 0){
        console.log(b)
    }else {
        console.log('error')
    }
}

//array even
console.log('-------------')

let arr_2 =  [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (let a = 1; a <=arr_2.length - 1; a += 2){
    console.log(arr_2[a] )
}

//array odd
console.log('-------------')

for (let a = 0; a <=arr_2.length - 1; a += 2){
    console.log(arr_2[a])
}


//sum of elements
console.log('-------------')
console.log('Sum of the elements of array')

sum = 0

let sum_arr = [1, 2, 4, 2, 3, 55, 66, 777, 12]

for (let i = 0; i <= sum_arr.length - 1; i++){
    sum += sum_arr[i]
    console.log(sum_arr[i] )
}

console.log(sum)

//multiply elemets of array
console.log('-------------')

multiply = 1

let mul_arr = [1, 2, 4, 2, 3, 5, 6, 7, 1]

for (let i = 0; i <= mul_arr.length -1; i++){

    multiply = multiply * mul_arr[i]
    console.log(mul_arr[i])
}

console.log(multiply)

// name and number

name = prompt('Enter your name')
number = Number(prompt('enter passcode'))

if (name == 'Admin' && number > 100){
    console.log('Good job')
} else if(name == 'System' && number == 10){
    console.log('Admin job')
} else if (name == 'World' && number > 200){
    console.log('Good world')
} else if (name == 'Smth' && number < 0){
    console.log('minus num')
}

// switch case

name_2 = prompt('Enter your name')

switch (name_2){
    case ('Admin') : console.log('I have full acess')
    break
    case ('Student') : console.log('I am student')
    break
    case ('Teacher') : console.log('I am teacher')
    break
    case ('Young') : console.log('I am young and ready to party')
    break
    default : console.log('you entered your own name')
}