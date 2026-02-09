const kgToGram = (input: string | number) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return ` tis is string ${Number(value) * 1000}`;
  }
};

const result1 = kgToGram(1) as number;
const result2 = kgToGram("2 kz") as string;
// console.log(result2);

let userData: any;
(userData as string) = "saiful islam";
(userData as number) = 99;
console.log(userData);
