//1.array join and split
const fruits = ["apple","banana","cherry"];
const join = fruits.join(" and ");
console.log(join);

const split=join.split(",");
console.log(split);

//2.array destructing
const [a,b,c]=["apple","banana","cherry"];
console.log(a);
console.log(b);
console.log(c);

//3.array spreading
const [a1,b1,c1,...d] = fruits;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d);

//4.finding max and min
const arr=[1,2,3,4,5,6,7,8,9];
const max=Math.max(...arr);
const min=Math.min(...arr);
console.log(max);
console.log(min);

//5.flattening array
const arr1=[1,[2,[3,[4,5]]]];
const flat=arr1.flat(Infinity);
console.log(flat);

//6.check array elemnts
const hasApple = fruits.includes("apple");
const num1 = arr.every(num => num > 0);
const num2 = arr.some(num => num > 3);
console.log("Has Apple:", hasApple);
console.log("All Numbers Greater Than Zero:",num1);
console.log("Some Numbers Greater Than Three:", num2);

//7.array of object sorting 
const people = [
    {name:"john",age:20},
    {name:"jane",age:21},
    {name:"jim",age:19}
]
const sortedPeople = people.sort((a,b) => a.age - b.age);





