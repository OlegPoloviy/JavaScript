const string = "some random text"
console.log(string)
const number = 12
console.log(number)
const bool = true
console.log(bool)
const nl = null
console.log(nl)
const un = undefined
console.log(un)
const sym = Symbol("symbol")
console.log(sym)
const bgInt = BigInt(14982343242934623496824329463242394632842365784275823746328745234832745312985432894536578643)
console.log(bgInt)
const obj = {
    a : 10,
    b : true,
    c :'abc',
}
console.log(obj)

document.write('<hr>')

document.write('<h1>H1 header</h1>')
document.write('<h2>H2 header</h2>')
document.write('<h3>H3 header</h3>')
document.write('<h4>H4 header</h4>')
document.write('<h5>H5 header</h5>')
document.write('<h6>H6 header</h6>')

alert('First homework with JS')
document.write('<hr>')

const question = confirm('Are you a human?')
document.write(question)

document.write('<hr>')
const a = prompt("enter first number to multiply")
const b = prompt("enter second number to multiply")
const c = a * b
document.write(c)