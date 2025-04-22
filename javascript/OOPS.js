//Encapsulation
class water_melon {
   fruit(){
   console.log("Fresh")
   }}
const quality = new water_melon
quality.fruit()


//Abstraction
class orange {
   constructor(){
   console.log("Fresh")
   }
Fruit(){
   console.log("Rotten")
   }
}
const Quality = new orange



//Abstraction using the keyword parameters
class mango {
   constructor(variety){
   this.variety = variety
   console.log("Fresh and variety is" + this.variety)
   }
Fruit1(){
   console.log("Rotten")
   }
}
const Quality1 = new mango(" Alphonso")


//Abstraction using the two constructor
class berry {
   constructor(variety){
      this.variety = variety
      console.log("berry, which is" + this.variety)
   }
   nuts(){
      console.log("Almond")
   }
   dry_fruits(){
      console.log("grapes")
   }
   }
class Berry extends berry{
   constructor(Variety){
   super(Variety)
   console.log("Berry, which is" + Variety)
   }
   nuts(){
      console.log("Cashew")
   }
   dry_fruits(){
      console.log("raisin")
   }
}
const eatables = new berry(" Blueberry")
eatables.dry_fruits()
eatables.nuts()
const eatables1 = new Berry(" strawberry")
eatables1.dry_fruits();
eatables1.nuts()


//Inheritance
class banana{
   constructor(){
      console.log("Fresh")
   }
   red_banana(){
      console.log("Good Condition")
   }
}
class Banana extends banana{
   yellow_banana(){
      console.log("good condition")
   }
}
const Quality2 = new banana
Quality2.red_banana()
const Quality3 = new Banana
Quality3.yellow_banana()


//Polymorphism
class apple{
   constructor(){
      console.log("Fresh")
   }
   red_apple(){
      console.log("Good Condition")
   }
}
class Apple extends apple{
   red_apple(){
      console.log("GoOd CoNdItIoN")
   }
   green_apple(){
      console.log("good condition")
   }
}
const Quality4 = new apple
Quality4.red_apple()
const Quality5 = new Apple
Quality5.red_apple()
Quality5.green_apple()

