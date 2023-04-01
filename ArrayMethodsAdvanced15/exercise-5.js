function sortPeopleByAge(people) {
  return people.sort((a, b) => a.age-b.age);
  // return people.sort((a, b) => b.age-a.age);
}

const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)

// let arr = [123,4,25.4,5263];
// // let sortedArr = arr.sort((a,b) => a-b);
// function sortedArr(a, b){
//   x=a-b;
//   y=b-a;
//   return x,y; //first variable will be chosen
// }
// arr.sort(sortedArr);
// console.log(arr);