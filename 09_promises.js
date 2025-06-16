const a = 10; // JS çalıştırır.
// Not: Senkron kod daha önce tetiklenir.

// async çalışır
const promise = new Promise((resolve, reject) => {
	resolve({ id: 1, name: 'test' });
}); // Browser -> Micro Task Queue -> Event Looping mekanizma ile sonuç JS aktarılıyor.

promise
	.then((data) => {
		console.log('data', data);
	})
	.catch((err) => {
		console.log('err', err);
	});

console.log('a', a);

// data -> {id:1}
// a -> 10

// sıralı işlem mantığı

const promise2 = new Promise((resolve, reject) => {
	resolve('promise2');
});

const promise3 = new Promise((resolve, reject) => {
	resolve('promise3');
});

const promise4 = new Promise((resolve, reject) => {
	resolve('promise4');
});

// Promise Chain -> zinciri bozan birşey tüm response bozar. reject döner.

// promise2
// 	.then((data1) => {
// 		console.log('data1', data1); // promise1 den döner
// 		return promise3;
// 	})
// 	.then((data2) => {
// 		console.log('data2', data2); // promise1 den döner
// 		return promise4;
// 	})
// 	.then((data3) => {
// 		console.log('data3', data3); // promise1 den döner
// 	})
// 	.catch((err) => {
// 		console.log('herhangi birisinde hata meydana geldi');
// 	});

// iç içe promise yapısı oldu.
// promise2
// 	.then((data) => {
// 		console.log('data1.1', data);
// 		promise3
// 			.then((data2) => {
// 				console.log('data2.1', data2);
// 				promise4
// 					.then((data3) => {
// 						console.log('data3.1', data3);
// 					})
// 					.catch((err) => {
// 						console.log('promise4-err');
// 					});
// 			})
// 			.catch((err) => {
// 				console.log('promise3-err');
// 			});
// 	})
// 	.catch((err) => {
// 		console.log('promise2-err');
// 	});

// bir tane hata varsa reject olur.
Promise.all([promise2, promise3, promise4])
	.then((data) => {
		console.log('data', data); // [data1,data2,data3]
	})
	.catch((err) => {
		console.log('err', err);
	});
