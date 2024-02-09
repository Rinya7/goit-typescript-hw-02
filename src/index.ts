//Завдання 1

let age: number = 50;
let named: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown;
let callback = (a: number): number => {
  return 100 + a;
};

//Завдання 2

let anything: any = -20;
anything = "Text";
anything = {};

//Завдання 3

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

//Завдання 4

let person: [string, number] = ["Max", 21];

//Завдання 5

type union = string | number;
type literal = "enable" | "disable";

//Завдання 6

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//Завдання 7
enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: Days): boolean {
  if (day === "Saturday" || day === "Sunday") {
    return true;
  } else {
    return false;
  }
}

//Завдання 8

type Gender = "male" | "female";
let myGender: Gender;

//Завдання 9

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt?: Date;
    updateAt?: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

//Generic

//Завдання 1

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

//Завдання 2

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): Pick<AllType, T> {
  return {
    ...top,
    ...bottom,
  };
}

//Завдання 3

function merge<A extends object, B extends object>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}

//Завдання 4

interface Props {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Pagare extends Component<Props> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

//Завдання 5

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

//Завдання 6

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
