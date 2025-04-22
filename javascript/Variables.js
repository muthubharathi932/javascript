/* Variables are case sensitive eg. a and A are different
Only letters, digits, underscore and $ are allowed to use a variable (even space is not allowed)
Only a letter, underscore or $ should be a 1st character of a variable
Reserved words (keywords) cannot be called as a variables
Variables types ----> Var, Let and Const*/

//#Var type
var a = 10;
console.log(a)
var a = 20;
console.log(a)  // Var can be redeclared and updated (function or global scope variable)

//#Let type
let $a1 = 30;
 $a1 = 31;
console.log($a1) // Let cannot be redeclared but can be updated (block scope variable)

//#Const type
const _123 = 15;
console.log(_123) // Const cannot be redeclared or updated (block scope variable)

