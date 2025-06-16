// ekleme kopyalama değer güncelleme gibi durumların modern
const user = { name: 'ali', email: 'test' };

// ... new görevi görür. yeni bir instance üretir. react virtual dom üzerinde state değişimi için önemli.
const user2 = { ...user, name: 'mustafa' }; // nesnin name alanını güncelledik.
const user3 = { ...user, age: 14 }; // eğer ilgili prop yoksa prop açıcaktır

console.log('user2', user2);
console.log('user3', user3);

// Diziler ile kullanımı
// 1 kopyalama amaçlı
const n1 = [1, 2, 3];
const n2 = [3, 4, 5];
const n3 = [...n1, ...n2]; // iki diziyi birleştirme yap.
console.log('n3', n3);
const n4 = [...n1, 15]; // append ettik
const n5 = [25, ...n1]; // prepend ettik.
console.log('n4', n4);
console.log('n5', n5);

// Object Array push

const persons = [
	{ name: 'ali', surname: 'tan' },
	{ name: 'mustafa', surname: 'can' },
];
const persons2 = [...persons, { name: 'hande', surname: 'tan' }];
console.log('persons2', persons2);

// Not: JS de dizilerde bir object type'dır. Spread operatörü her dizinin kendine ait referansı ile çalışır.

// Neden böyle yazıyoruz
const n10 = [10, 40, 50];
n10.push(50);

const n20 = n10;
n20.push(30);

console.log('n10', n10);
console.log('n20', n20);

// dizilerin referansları birbirlerine karışmasın diye map operatörü ile yepyeni bir dizi referansı oluşturulur
// ES6+ map function -> React da map function ekranda verileri listelemek için kullandığımız bir teknik.

const n30 = n10.map((x) => x); // map ile dizinin referansı koparılır başka bir diziye yeni referanse değerler kopyalnıyor.
n30.push(40);
console.log('n10', n10);
console.log('n30', n30);
const n40 = n10.map((x) => x * 5);
console.log('n40', n40);

const users = [{ name: 'mustafa', name: 'can', name: 'hasan' }];

const users2 = users.map((x) => x.name.toUpperCase());
console.log('users2', users2);

users.findIndex((x) => x.name.startsWith('m')); // firstOrDefault
users.filter((x) => x.name.includes('a')); // içerisinde a geçenler

// reduce functions
// c# daki action, function delegate yapısına benzer, aggregate yapısına benzer.
const total = n30.reduce((t, value) => t + value, 0);
console.log('total', total);
