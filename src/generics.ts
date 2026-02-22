type GenericsArray<value> = Array<value>;

const numbers: GenericsArray<number> = [1, 2, 3, 4];

const friends: GenericsArray<string> = ["kamal", "jamal"];

const isAdmin: GenericsArray<boolean> = [true, false];

type GenericsNum<num1, num2> = [num1, num2];

const nums: GenericsNum<number, number> = [4, 4];

console.log(numbers);
