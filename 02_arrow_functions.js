// es2015 default function

function sum(num1, num2) {
	return num1 + num2;
}

console.log('toplam1 ', sum(10, 20)); // Toplam 30 // NAN Not A Number

console.log('toplam3 ', sum()); // NAN undefined + undefined + undefined

console.log('toplam4 ', sum('10', 20, '50')); // Toplam output 102050

// es6+ arrow functions
// undefined tipi değişeken değer ataması yapılmamış demek.
function sum(num1, num2, num3) {
	console.log('sum2');
	console.log('num3', num3);

	console.log(10 + 20 + undefined);

	return num1 + num2 + num3;
}

console.log('toplam2 ', sum(10, 20, 30)); // Toplam 50

// Not: console.log('toplam4 ', sum('10', 20, '50')); // Toplam output 102050  kodun bu davranışı göstermemesi için aslında yazılması gereken formatı açğıda tanımlıyalım

function sum(num1, num2, num3) {
	console.log('sum3');

	if (typeof num1 === 'string')
		// '10' -> 10
		num1 = parseInt(num1);

	if (typeof num2 === 'string')
		// '10' -> 10
		num2 = parseInt(num2);

	if (typeof num3 === 'string')
		// '10' -> 10
		num3 = parseInt(num3);

	// NAN hatalarından kurtulmamızı sağlar

	if (num1 === undefined) {
		num1 = 0;
	}

	if (num2 == undefined) {
		num2 = 0;
	}

	if (num3 == undefined) {
		num3 = 0;
	}

	return num1 + num2 + num3;
}

const r = sum('10', 20, '50'); // 80
console.log('r', r);

// Arrow Function ile olayı nasıl çözüyoruz

const sum1 = (a, b) => a + b;
const sum2 = (a, b, c) => a + b + c;
const sum3 = (a, b) => {
	if (typeof a === 'string')
		// '10' -> 10
		a = parseInt(a);

	if (typeof b === 'string')
		// '10' -> 10
		b = parseInt(b);

	return a + b;
};

sum1('10', 20); // 1020
sum2(10, 20, 30); // 60
sum3(5,'15'); // 20


