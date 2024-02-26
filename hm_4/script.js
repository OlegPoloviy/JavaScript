// Even loops

for (let i = 20 ; i <= 32 ; i += 2){
    console.log(i)
}

//for of
console.log('--------')
console.log('For of loop')

let list = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

for (let el of list){
    console.log(el)
}

//for in
console.log('--------')
console.log('For in loop')

for (let i in list){
    console.log(i , list[i])
}

//while
console.log('-------')
console.log('While loop')

let a = 20

while (a <= 32) {
    console.log(a)
    a += 2
}

// do while
console.log('-------')
console.log('do while')

let i = 20

do {
    i += 2
    console.log(i)

} while (i <= 32)

// Array
console.log('-------')
console.log('Array')

let arr = ['Pomergranade' , 'black' ,'Oleg',113 , 18 ]

for (let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i] , typeof arr[i])
}

console.log('for of')

for (let i of arr) {
    console.log(i, typeof i)
}

console.log('for in')

for (let i in arr) {
    console.log(arr[i] , typeof i)
}

console.log('while') 

let b = 0

while (b < arr.length - 1) {
  console.log(arr[b], typeof arr[b]);
  b++
}

console.log('do while')

let c = 0

do {
    console.log(arr[c] , typeof arr[c])
    c++
} while (c < arr.length - 1)


// odd  loop
console.log('-------')
console.log('odd loops')

for (let i =17 ; i <= 39 ; i += 2 ){
    console.log(i)
}

console.log('-------')
let d = 17

while (d < 39){
    console.log(d)
    d += 2
}

console.log('-------')

let f = 17

do {
    console.log(f)
    f += 2
} while (f < 39)

// even array
console.log('----------')
let arr_2 =  [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (let i = 0; i <= arr_2.length - 1; i += 2) {
    console.log(i,arr_2[i])
}

console.log('while loop')

let l = 0

while (l < arr_2.length -1){
    console.log(l , arr_2[l])
    l += 2
}

let l_2 = 0

console.log('do while')

do {
    console.log(l_2 , arr_2[l_2])
    l_2 += 2
}while(l_2 < arr_2.length - 1)

// odd array
console.log('----------')

for (let i = 1; i <= arr_2.length -1 ; i += 2 ){
    console.log(i,arr_2[i])
}

console.log('while loop')

let l_3 = 1

while (l_3 <= arr_2.length - 1) {
    console.log(l_3 , arr_2[l_3])
    l_3 += 2
}

console.log('do while loop') 

l_4 = 1

do{
    console.log(l_4 , arr_2[l_4])
    l_4 += 2
}while(l_4 < arr_2.length)

//sum array

console.log('-----------')

let sum_ar = [1, 2, 4, 2, 3, 55, 66, 777, 12]

let sum = 0

for (let i = 0; i <= sum_ar.length -1; i++){
    sum += sum_ar[i]
    console.log(i , sum_ar[i])
}

console.log('Sum of elements = ' , sum)

console.log('for in')

let sum_2 = 0

for(let i in sum_ar){
    sum_2 += sum_ar[i]
    console.log(i, sum_ar[i])
}

console.log('sum using for in loop = ', sum_2)

console.log('for of loop')

let sum_3 = 0

for (let el of sum_ar){
    sum_3 += el
    console.log(el)
}

console.log('sum using for of loop = ', sum_3)

console.log('while')

let sum_4 = 0
let step = -1

while (step < sum_ar.length -1) {
    console.log(sum_ar[step])
    step ++
    sum_4 += sum_ar[step]
   

}

console.log('sum using while loop = ',sum_4)