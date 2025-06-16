// Object

const person = { name: 'ali', age: 27 };
const { name, age } = person;
console.log('person-name', person.name);
console.log('name', name);

// Arrays

const numbers = [10, 20, 30];

const [first, middle, last] = numbers;
console.log('first', first);
console.log('last', last);

// functionlarda kullanılınca adı rest operator ... (fonsiyona dışarıdan gönderilen sayısız parametre)
// [... arr] -> spread operators -> dizinin içindeki elemanlara başka bir diziye kopyalamamızı diziye elemean eklememizi sağlayan modern bir teknik.
// console.log('lastItem-1', lastItem);
// console.log('lastItem-1', numbers[numbers.length - 1]);

const [firstItem, ...x] = numbers;
const lastItem = numbers.at(-1); // sonucu indeksi alma es6
const lastItem2 = numbers.pop();

console.log('firstItem-2', firstItem);
console.log('lastItem', lastItem);
console.log('lastItem-2', lastItem2);

// Rest Operators (Arrow function ile kullanımı)

const sum = (c, ...items) => {
	for (const item of items) {
		console.log('item', item);
	}

	console.log('c', c);
};

// Default params
const division = (a, b=0) => {
	console.log('a', a);
    console.log('b', b);
	return a / b;
};

sum(10, 20, 30, 46, 58); // C# params keyword denk gelir.
division(5);
