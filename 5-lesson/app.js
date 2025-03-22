// const obj1 = {
//   key1: "value1",
//   key2: "valu2",
// };
// const obj2 = new Object();
// console.log(obj1.key1);
// console.log(obj1["key1"]);
// obj1.key1 = 1000
// obj1.key3 = 2000
// delete obj1.key3
// console.log(obj1);

// console.log(objeckt.size?.length);// so'roq agar bolsa
// for (const key in object) {
//     object[key]
// }
// const obj1 = obj2 //1 adress

// const obj1 = Object.assign({}, box) // boshqa adress
//assign ({}, box) boxni {} ga qo'shib obj1 ga olib beradi
//Objet.assign(obj1, box)

// const box3 = {...box1} //more used destucture

// const player = {
//   aboutPlayer() {
//     console.log(`info ${this.key}`); // this player objectga ulanadi
//   },
//   aboutPlayer2: () => {
//     console.log(`info ${this.key}`); // this arrowda not work
//   },
//   aboutPlayer3() {
//     function inner() {
//       console.log(`info ${this.key}`); // innerda ths window global
//     }
//     return inner;
//   },
//   aboutPlayer4() {
//     const arrow = () => {
//       console.log(`info ${this.key}`); //arrowda this yuq uzidan yuqoridan oladi
//     };
//     return arrow;
//   },
// };
// const newP = { ...player };

// const car = {
//   marka: "Nissan",
//   model: "R35",
//   year: 2035,
//   speed: 500,
//   color: "TrueBlack",
// };

// if (car.km) {
//   console.log(tur);
// } else {
//   console.log(false);
// }
// for (const key in car) {
//   if (isFinite(car[key])) {
//     console.log(`number ${key}`);
//   } else {
//     console.log(key);
//   }
// }

// const xodimlar = {
//     kim1: 23,
//     kim2: 20,
//     kim3: 17
// }
// let sum = 0, count = 0
// for (const key in xodimlar) {
//     sum+=xodimlar[key]
//     count ++
// }
// console.log(sum/count);

// const product = {
//   nomi: "nimadur",
//   miqdori: 50,
//   narxi: 100,
//   productInfo() {
//     return `${this.nomi}, ${this.miqdori}, ${this.narxi}`;
//   },
//   get Info(){
//     return this.nomi
//   },
//   set Info(newN){
//     this.nomi = newN
//   },
//   get pricec(){
//     return this.narxi
//   },
//   set pricec(prs){
//     this.narxi = prs
//   }
// };
// console.log(product.productInfo())

// function setPrice(product, price) {
//     product["narxi"] = price
// }
// setPrice(product, 10000)
// console.log(product);
// console.log(product.Info);
// product.Info = 'new'

// const tovar = {...product}
// tovar.pricec = 20000
// console.log(tovar.productInfo());
