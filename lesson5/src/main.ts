//Arrays

let users = ["sts", "2", "qwr"];
let ids = [2, 4, 5];
let mixed = ["a", 25, true];

type User = {
  name: string;
  id: number;
  isVerified?: boolean;
};

let usersArr: User[] = [];

usersArr[0] = { name: "ole", id: 9292 };

// Tuple
type Tuple = [string, number, boolean];
let myArr: Tuple = ["ole", 29, true];

//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArr;
};

type UserId = stringOrNumber;

// Literal Type
let myName: "Ole";
let userName: "Ole" | "Mole" | "Gole";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};
const substract = (a: number, b: number): number => {
  return a - b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (c, d) => {
  return c * d;
};

// optional parameters
// with type guards
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === "undefined") {
    return a + b;
  }
  return a + b + c;
};

const sumAll = (a: number, b: number, c = 1): number => {
  return a + b + c;
};

// Rest parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

// Never
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";

  return createError("This should never happen");
};

////////////////////////////////////////////////////// Type Assertion or Type Casting
////////////////////////////////////////////////////
// Sometimes you will have information about the type of a value that TypeScript can`t know about
// DOM els

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

// The DOM
const myImg = document.querySelector("img")!;
const img = document.getElementById("img") as HTMLImageElement;

img.src;
myImg.src;
