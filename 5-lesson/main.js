//1
// const doira = {
//   radius: 0,
//   get Rad() {
//     return this.radius;
//   },
//   set Rad(r) {
//     this.radius = r;
//   },
//   findArea() {
//     return 3.14 * this.radius ** 2;
//   },
// };

// doira.Rad = 5; // html dan promp kiritiladigan qilaymi ?
// console.log(doira.Rad);
// console.log(doira.findArea());

//2
// const colors = {
//     InvertKeyValue(obj) {
//         let inverted = {};
//         for (const key in obj) {
//             inverted[obj[key]] = key;
//         }
//         return inverted;
//     }
// };
// console.log(colors.InvertKeyValue({red: "qizil", green: "yashil"}));

//3
// const data = {
//   a: 3,
//   b: 5,
//   c: 4,
//   d: 7,
//   e: 5,
//   f: 5,
// };

// function maxx(data) {
//   const req = {};
//   let maxCount = 0;
//   let maxValue = null;
//   for (const key in data) {
//     let val = data[key];
//     req[val] = (req[val] || 0) + 1;
//     if (req[val] > maxCount) {
//       maxCount = req[val];
//       maxValue = val;
//     }
//   }
//   return maxValue;
// }

// console.log(maxx(data));

//4
// function flattenObject(obj, parentKey = "", result = {}) {
//   for (const key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       flattenObject(obj[key], `${parentKey}${key}.`, result);
//     } else {
//       result[`${parentKey}${key}`] = obj[key];
//     }
//   }
//   return result;
// }
// const data = {
//   user: {
//     name: "Ali",
//     address: {
//       city: "Tashkent",
//       zip: "100100",
//     },
//   },
// };
// console.log(flattenObject(data));

//5
// function deepEqual(objA, objB) {
//   if (objA === objB) return true;
//   if (
//     typeof objA !== "object" ||
//     typeof objB !== "object" ||
//     objA === null ||
//     objB === null
//   )
//     return false;
//   const keysA = Object.keys(objA);
//   const keysB = Object.keys(objB);
//   if (keysA.length !== keysB.length) return false;
//   for (const key of keysA) {
//     if (!deepEqual(objA[key], objB[key])) return false;
//   }
//   return true;
// }
// const objA = { a: 1, b: { c: 2 } };
// const objB = { a: 1, b: { c: 2 } };
// console.log(deepEqual(objA, objB));
