/* A JavaScript String is a sequence of characters, typically used to represent text.
In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), 
so a single character string is used when we need a character.
Like Java and Python, strings in JavaScript are immutable. */

//#String Methods

//#IndexOf
let a = "Badminton is originally developed in india"
console.log(a.indexOf ("d"))
console.log(a.indexOf ('o'))
console.log(a.indexOf ('D'))
console.log(a.lastIndexOf ("a"))

//#Length of a string
console.log(a.length)

//#Includes
//#The includes() method returns true if a string contains a specified string. Otherwise, it returns false.
console.log(a.includes(""))
console.log(a.includes("t"))
console.log(a.includes("T"))

//#ToUppercase
//toUpperCase() converts all the characters present in the String to upper case and returns a new String with all characters in upper case.
//This method accepts single parameter stringVariable string that you want to convert in upper case
console.log(a.toUpperCase())

//#ToLowercase
//toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase
console.log(a.toLowerCase())

//#charAt
//charAt() returns the character at the specified index. String in JavaScript has zero-based indexing.
console.log(a.charAt(3))
console.log(a.charAt(4))
console.log(a.charAt(5))
console.log(a.charAt(6))

//#Slice
//slice() extracts a part of the string based on the given stating-index and ending-index and returns a new string.
console.log(a.slice(3, 7))
console.log(a.slice(37, 42))
console.log(a.slice(-5))
console.log(a.slice(-18))

//#Substring
//substring() returns the part of the given string from the start index to the end index. Indexing starts from zero (0).
//Negative index doesnot support
console.log(a.substring(13, 23))
console.log(a.substring(0, 9))
console.log(a.substring(3, 7))

//#Replace
//replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
console.log(a.replace("originally", "found"))
console.log(a.replace("found", "originally"))

//#ReplaceAll
//replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. 
//The original string is left unchanged after this operation.
console.log(a.replaceAll("developed", "found"))
console.log(a.replaceAll("found", "developed"))

//#Split
//split() splits the string into an array of sub-strings. This method returns an array
//This method accepts a single parameter character on which you want to split the string
console.log(a.split("i"))
console.log(a.split("a"))

//#Trim
//trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces.
//This method is called on a String object. This method doesn’t accept any parameter.
let b = "Badminton is originally developed in india"
console.log(b.trim(" "))

//#TrimStart
//trimStart() removes whitespace from the beginning of a string.
//The value of the string is not modified in any manner, including any whitespace present after the string.
let c = "   badminton is originally developed in india   "
console.log(c.trimStart(" "))

//#TrimEnd
//trimEnd() removes white space from the end of a string.
//The value of the string is not modified in any manner, including any white-space present before the string.
console.log(c.trimEnd(" "))

//#StartsWith
//Check whether the given string starts with the characters of the specified string or not.
let d = "badminton is originally developed in india"
console.log(d.startsWith("b"))
console.log(d.startsWith("B"))

//#EndsWith
//Whether the given string ends with the characters of the specified string or not.
console.log(d.endsWith("a"))
console.log(d.endsWith("A"))

//#Concatenation
//Join two or more strings together in JavaScript.
let e = ". it is developed in mid 19th century"
console.log(d.concat(e))

//#Repeat
//Build a new string containing a specified number of copies of the string.
let f = "virat kohli is regarded as GOAT of the cricket "
console.log(f.repeat(5))

//#Match
//Search a string for a match against any regular expression.
console.log(f.match("G"))
console.log(f.match("O"))
console.log(f.match("A"))
console.log(f.match("T"))

//#Search
//Search for a match in between regular expressions and a given string object.
console.log(f.search("v"))
console.log(f.search("i"))
console.log(f.search("r"))
console.log(f.search("a"))
console.log(f.search("t"))