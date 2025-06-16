// Not: ES6 ve sonrası standartları ts destekler
// Typescript çıkışı strong typed javascript

export const sum = (a: number, b: number): number => {
	return a + b;
};

export const sum2 = (a: number, b: number, c: number): number => {
	return a + b;
};

// Geliştirme yaparken hataları yakalıyp type safe çalışmamızı sağlar.

// sum(10,'5');
// sum(10);
// sum('2','5');
// let c:string =  sum(40,50);
//sum();
sum(40, 5); // 45

let age: number;
// age = '25';
age = 25;

// typeof operatörden kurutulduk, undefined tipinden kurtulduk, NaN dan kurtukduk.



