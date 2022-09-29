// //valの変数宣言
// var val1 = "変数";
// console.log(val1);

// val1 = "変数を上書き";
// console.log(val1);

// var val1 = "変数";

// //letの変数宣言
// let val2 = "変数";
// console.log(val2);

// val2 = "変数を上書き";
// console.log(val2);

// let val2 = "変数";

// const val3 = "変数";
// console.log(val3);

// //val3 = "変数を上書き";
// const val3 = "変数を上書き";

// const val4 = {
//   name: "jyake",
//   age: 28
// };

// val4.name = "jya";
// val4.address = "jya";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("mok");
// console.log(val5);

// const name = "jake";
// const age = 28;

// const message1 = "私の名前は" + name + "年齢は" + age;
// console.log(message1);
// const message2 = `私の名前は${name} ,年齢は${age}`;
// console.log(message2);

/**
 * 従来
 */
// function func1(str) {
//   return str;
// }
// console.log(func1("従来"));

/**
 * アロー関数
 */
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("アロー関数"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(4, 2));

// const myProfile = {
//   name: "jake",
//   age: 28
// };

// // const message1 = `名前は${myProfile.name}で年は${myProfile.age}`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}で年は${age}`;
// console.log(message2);

// const myProfile3 = ["jyake", 28];
// // const message3 = `名前は${myProfile3[0]}で年は${myProfile3[1]}`;
// // console.log(message3);

// const [name, age] = myProfile3;
// const message4 = `名前は${name}で年は${age}`;
// console.log(message4);

// const sayHello = (name = "guest") => console.log(`こんにちは${name}`);
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);

// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
