function add(num1: number, num2: number) {
  return num1 + num2;
}

function min(num3: number, num4: number) {
  return num3 - num4;
}

add(1, 1);
min(5, 6);

type MixType = {
  [key: string]: string | number;
};

const userInfo: MixType = {
  name: "Ivan",
  age: 33,
  sex: "man",
  1: "go",
};

const bookDetails: MixType = {
  name: "Ivan Petrov",
  pages: 300,
  date: "1/02/2023",
  rating: 8,
};

function reverse<K>(items: K[]): K[] {
  return items.reverse();
}

const numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers);
const words = reverse<string>(["1", "2", "3", "4", "5"]);
console.log(words);
