//  use type als
type User = {
  name: string;
  phone: number;
};

type userRole = {
  role: string;
};

type userWithRole = User & userRole;

const user: userWithRole = {
  name: "saiful",
  phone: 9909909,
  role: "admin",
};

// use interface
interface StudentInfo {
  location: string;
  class: number;
}

interface StudentWtihName extends StudentInfo {
  fullname: string;
}

const student: StudentWtihName = {
  location: "dhaka",
  class: 5,
  fullname: "sifullll",
};

// console.log(student);

type nums = string[];

type addT = (num: number, num2: number) => number;

const add: addT = (num, num2) => {
  return num + num2;
};

console.log(add(2, 2));

const nums = ["1", "2", "3"];
