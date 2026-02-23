const addStudent = <x extends { name: string; age: number }>(student: x) => {
  return student;
};

// amra set kroe dite pari je minium kichu value lagbei

const sutudent1 = {
  name: "abul",
  age: 11,
  location: "barisal",
};

const sutudent2 = {
  name: "tulu",
  age: 33,
  location: "Patuakhali",
  isMarrid: true,
};

console.log(addStudent(sutudent2));
