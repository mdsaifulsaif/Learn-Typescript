const genericforFunction = <T>(value: T) => [value];

const string = (value: string) => {
  return [];
};

genericforFunction("hello world");
genericforFunction(2);

// tuple
const crateTupeWithArray = (params1: string, params2: string) => {
  return [params1, params2];
};

const createTupleWithGeneric = <x, y>(params1: x, params2: y) => {
  return [params1, params2];
};

const result1 = createTupleWithGeneric("abul", "kabul");
const result2 = createTupleWithGeneric(3, "kabul");
const result3 = createTupleWithGeneric(
  { name: "hello", age: "saiful" },
  "kabul",
);
