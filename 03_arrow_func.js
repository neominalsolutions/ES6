// Not: ES6 ve sonrası standartları ts destekler
// Typescript çıkışı strong typed javascript
var sum = function (a, b) {
	return a + b;
};
var sum2 = function (a, b, c) {
	return a + b;
};
// Geliştirme yaparken hataları yakalıyp type safe çalışmamızı sağlar.
// sum(10,'5');
// sum(10);
// sum('2','5');
// let c:string =  sum(40,50);
//sum();
console.log(sum(40, 5)); // 45
var age;
// age = '25';
age = 25;
// typeof operatörden kurutulduk, undefined tipinden kurtulduk, NaN dan kurtukduk.
