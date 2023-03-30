// Exercise 1

function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus2 = plus(2);
    
console.log(plus2(2)); 
console.log(plus2(5));

const plus100 = plus(100);

console.log(plus100(100));
console.log(plus100(5));


let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
// Exercise 2 ForEach