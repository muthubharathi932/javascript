/* Javascript operators are symbols or keywords used to perform operations on values and variables.
They are the building blocks of the javascript expressions and can manipulate data in various ways.
There are various operators supported by Javascript.
They are ---> Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary, Comma, Unary, Relational, BigInt, String and Chaining Operators. */

/*#Arithmetic Operators
 +   Addition
 -   Subtraction
 *   Multiplication
 /   Division
 %   Modulus
 **  Exponentiation 
Used to perform mathematical operations*/
let a = 10
let b = 5
let c = a+b
let d = a-b
let e = a*b
let f = a/b
let g = a%b
let h = a**a
console.log(c,d,e,f,g,h) 

/*#Assignment Operators
 =   Assign a value to a variable
 +=  Add and Assign
 -=  Subtract and Assign
 *=  Multiply and Assign
 /=  Divided and Assign
 %=  Modulus and Assign
 **= Exponentiate and Assign
They can also perform operations like addition or multipication before assigning the value */
let _a = 5
c1 = _a
console.log(c1)

let x = 10
let y = 5
x += y 
console.log(x)

let x1 = 10
let y1 = 5
x1 -= y1
console.log(x1)

let x2 = 10
let y2 = 5
x2 *= y2
console.log(x2)

let x3 = 10
let y3 = 5
x3 /= y3
console.log(x3)

let x4 = 10
let y4 = 5
x4 %= y4
console.log(x4)

let x5 = 10
let y5 = 5
x5 **= x5
console.log(x5)

/*#Comparison Operators
 ==  Loose equal to (value only)
 === Strict equal to (value & type)
 !=  Not equal to (value only)
 !== Strict not equal to (value & type)
 >   Greater than
 <   Lesser than
 >=  Greater than or equal to
 <=  Lesser than or equal to
Used to compare two values and return a boolean */
let _a1 = 10
let _b1 = 10
let _c1 = 5
console.log(_a1 == _b1)
console.log(_a1 == _c1)
console.log(_a1 === _b1)
console.log(_a1 === _c1)
console.log(_a1 != _b1)
console.log(_a1 != _c1)
console.log(_a1 !== _b1)
console.log(_a1 !== _c1)
console.log(_a1 > _b1)
console.log(_a1 > _c1)
console.log(_a1 < _b1)
console.log(_a1 < _c1)
console.log(_a1 >= _b1)
console.log(_a1 >= _c1)
console.log(_a1 <= _b1)
console.log(_a1 <= _c1)

/*#Logical Operators
 &&  AND(Both the condition should be true)
 ||  OR(Any one condition is true)
 !=  NOT(True)
These are mainly used to perform the logical operations that determine the equality or difference between the values */
let _a2 = true, _b2 = false
console.log(_a2 && _b2)
console.log(_a2 || _b2)
console.log(_a2 != _b2)
//&& ---> returns true if both operands are true
//|| ---> returns true if at least one operand is true
//!= ---> negates the boolean value

/*#Ternary Operators
It is a shorthand for conditional statements. It takes three operands.
condition? expression1 : expression2  (evaluates expression1 if the condition is true, otherwise evaluates expression2)*/
let myage = 27
let age1 = (myage >= 20)? "Eligible" : "Not Eligible"
let age2 = (myage <= 20)? "Eligible" : "Not Eligible"
console.log(age1, age2)
//syntax : condition? "true" : "false"

/*#Unary Operators
Unary operators operate on a single opened (eg: Increment, Decrement)
 +   plus operator
 -   minus operator
 ++  increments the value by 1
 --  decrements the value by 1
 typeof operator
 delete operator
 void operator
If the operand is a string that represents a valid number, it will be converted to a number. Otherwise, it will evaluate to NaN(Not a Number) */
let m = "10"
let n = "15"
let p = 20
let q = 20
let r = +m
let s = -n
let t = ++p
let u = --q
console.log(r,s)
console.log(t)
console.log(u)

let v = "Subash"
let w = ++v
console.log(w)
console.log(typeof w)

let _x1 = 18
let _y2 = "Virat Kohli"
let _z3 = true
let _x = [18,17,"AB de Villiers"]
let _y = {Name : "AB de Villiers", Team : "South Africa", Jersey_no : 17}
console.log(typeof _x1)
console.log(typeof _y2)
console.log(typeof _z3)
console.log(typeof _x)
console.log(typeof _y)

let player = { 
    name : "Virat Kohli",
    team : "India",
    club : "RCB",
    city : "delhi"
}
console.log(player)
delete player.city
console.log(player)

function myfun(){
    return void 0
}
console.log(myfun())

/*#BigInt Operators
It allow calculations with numbers beyond the safe integer range */
let abc = 123456789n
let def = 987654321n
console.log(abc + def)

/*#String Operators
It Include concatenation(+) and concatenation assignment(+=) used to join strings or combine strings with other data types */
let efg = "virat"
let hij = " kohli"
let klm = (efg + hij)
console.log(klm)
efg += hij
console.log(efg)
