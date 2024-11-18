// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

let veggie = 'carrot';
console.log({ veggie });  // object shorthand can "label" output
veggie = 'onion';
console.log({ veggie });

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

const animals = ['tiger', 'panda', 'raccoon'];
console.log({ animals });
animals.push('opossum');  // we can push even though animals is const!
console.log({ animals });

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

const dog = { name: 'Sprinkles', age: 3 };
console.log({ dog });
dog.isFriendly = true;  // following JS naming style
console.log({ dog });

// JS also has a Map type, though plain objects tend to be used more frequently
const dogMap = new Map([['name', 'Sprinkles'], ['age', 3]]);
console.log({ dogMap });
dogMap.set('isFriendly', true);  // must use set and get, not . or [] notation
console.log({ dogMap });

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

const num = 5;
for (let i = 0; i < num; ++i) {
  console.log(i);
}

// for animal in animals:
//    print(animal)

for (const animal of animals) {  // NOTE: `of` not `in`
  console.log(animal);
}

for (const i in animals) {  // NOTE: `in` not `of`
  console.log(i);
}

// for k, v in dog.items():
//    print(f"{k}: {v}")

for (const k in dog) {
  console.log(`${k}: ${dog[k]}`);
}

// there's a helper that can give us `items`-like functionality on objects
for (const [k, v] of Object.entries(dog)) {
  console.log(`${k}: ${v}`);
}

// for the Map version
for (const k of dogMap.keys()) {
  console.log(`${k}: ${dogMap.get(k)}`);
}

for (const pair of dogMap) {
  console.log(`${pair[0]}: ${pair[1]}`);
}

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
// function fizzbuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else {
//     return num;
//   }
// }

// console.log(fizzbuzz(15));

//
// ES6 way: Function Expression
const fizzbuzz = function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

console.log(fizzbuzz(15));
console.log(fizzbuzz(5));
console.log(fizzbuzz(3));
console.log(fizzbuzz(8));

//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  toString() {
    return `${this.name} is a ${this.species}`;
  }
}

const a = new Animal('sloth', 'Flash');
console.log({ a });
console.log(`a: ${a}`);

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Dog extends Animal {
  constructor(name, trick) {
    super('dog', name);
    this.trick = trick;
  }

  toString() {
    return `${super.toString()} that can ${this.trick}`;
  }
}

const d = new Dog('Fido', 'roll over');
console.log({ d });
console.log(`d: ${d}`);
