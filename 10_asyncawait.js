// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('data1');
// 	}, 5000);
// });
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('data2');
// 	}, 3000);
// });

// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('data3');
// 	}, 7000);
// });

const api1 = fetch('https://jsonplaceholder.typicode.com/users');
const api2 = fetch('https://jsonplaceholder.typicode.com/todos');

// asenkron function
// const loadData = async () => {
// 	try {
// 		console.time('start');

// 		const data1 = await promise1; // 8ms
// 		console.log('data1', data1);
// 		const data2 = await promise2; // 5ms
// 		const data3 = await promise3; // 7ms

// 		console.timeEnd('start');

// 		return 'data';
// 	} catch (error) {
// 		// her hangi bir reject durumunda buraya düşer
// 	}
// };

// console.time('s1');
// console.time('s2');
// console.time('s3');

const load = async () => {
	console.time('s1');
	await api1;
	console.timeEnd('s1');
};

load();

const load2 = async () => {
	console.time('s2');
	await api2;
	console.timeEnd('s2');
};

load2();

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json);

// toplam 7ms de işlemler biter.

// async function loadDate2() {

// }

// loadData().then((data) => {
// 	console.log('data', data);
// });

// loadData()
// 	.then((data) => {
// 		console.log('res', data);
// 	})
// 	.catch((err) => {
// 		console.log('err', err);
// 	});
