// const ve let
console.log('deneme');

var a = 10;

if (a >= 10) {
	var a = 20;
}

console.log('a', a); // 10 değil 20 çıktısı aldık. var ile tanımlı değişkenler if scope içerisinde ezildi. Not: var kullanmayalım

let b = 20;

if (b >= 20) {
	let b = 30;
	console.log('b1', b); // 30
}
console.log('b2', b); // 20 -> let if scope içerisinde değeri ezmedi dedik. var yerine let kullanılım

// const ile let arasında fark
const z = 30;
// z = 30; const ifadelere değer bir kez atanabilir let gibi değer güncellenemez dedik.

// Complex type değişkenler const kullanımı (Object,Array, Regex, Function)
// Primative Types -> number, string, boolean

const car = { name: 'Toyota', year: 2025 }; // literal object
car.year = 2024;
console.log('car', car);

// car = { name: 'Mercedes', year: 2023 }; // const assignment error;
