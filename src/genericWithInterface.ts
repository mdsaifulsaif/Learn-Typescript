interface student<T, M = null> {
  name: string;
  age: number;
  isActive: boolean;
  friends: {
    name: string;
    location: string;
  };
  favColor: T;
  isMarrid?: M;
}

const student: student<
  {
    color1: string;
    totalColor: number;
  },
  { marrid: true; name: string }
> = {
  name: "siful",
  age: 22,
  isActive: true,
  friends: {
    name: "safi",
    location: "dhaka",
  },
  favColor: {
    color1: "stind",
    totalColor: 33,
  },
  isMarrid: {
    marrid: true,
    name: "lalal",
  },
};

const student1: student<{
  isPhone: boolean;
  brand: string;
}> = {
  name: "siful",
  age: 22,
  isActive: true,
  friends: {
    name: "safi",
    location: "dhaka",
  },
  favColor: {
    isPhone: true,
    brand: "sumsung",
  },
};
