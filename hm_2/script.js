let bool = Boolean("abc")
console.log(bool)
console.log(typeof(bool))

let bool_2 = Boolean(10)
console.log(bool_2)
console.log(typeof(bool_2))


let num = Number('3570')
console.log(num)
console.log(typeof(num))


let bool_3 = Boolean(null)
console.log(bool_3)
console.log(typeof(bool_3))


let bool_4 = Boolean(undefined)
console.log(bool_4)
console.log(typeof(bool_4))


const user = {
    name: ' Petryk',
    surname : 'Pyatockin',
    age : 200,
    parents : {
        name : "Vasyl and Olena",
        age : 90,
        isMarried : true,
        car : {
            mark : 'toyota',
            model : 'mark 3',
            year : 1999
        }
    }
}

console.log(user.name , user.parents.age , user.parents.car.mark , user.parents.car.year)

const list = [true, 'abc' , undefined , [false, null , 180 , ['dosdosdo' , true , false]]]

console.log(list[3][2] , list[3][3][0] , list[3][3][2])

age = prompt('Enter your age')

if (age >= 1 && age <= 12) {
    console.log('you are a child')
} else if(age > 12 && age <= 18) {
    console.log('You are teenager')
} else if(age > 18 && age <=60){
    console.log('You are adult')
} else if (age > 60) {
    console.log('you are so old')
} else {
    console.log("error")
}

name = prompt('enter your name')

if (name == 'Admin') {
    console.log('I have full acess')
} else if (name == 'Student') {
    console.log('I am student')
} else if (name == 'Teacher') {
    console.log('I am teacher')
} else if (name == 'Young') {
    console.log('I am young and ready to party')
} else {
    console.log('You entered your own name')
}