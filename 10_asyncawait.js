const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('data1');
	}, 5000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('data2');
	}, 3000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('data3');
	}, 7000);
});

const api1 = fetch('https://jsonplaceholder.typicode.com/users');
const api2 = fetch('https://jsonplaceholder.typicode.com/todos');

const loadData = async () => {
	console.log('loadData');

	try {
		console.time('start');

		const data1 = await promise1; // 8ms
		console.log('data1', data1);
		const data2 = await promise2; // 5ms
		console.log('data2', data2);
		const data3 = await promise3; // 7ms
		console.log('data3', data3);
		console.timeEnd('start');

		return 'data';
	} catch (error) {
		// her hangi bir reject durumunda buraya düşer
	}
};

loadData();

// console.time('s1');
// console.time('s2');
// console.time('s3');

const load = async () => {
	console.time('s1');
	const data1 = await api1;
	console.log('d1', data1);
	console.timeEnd('s1');
};

const load2 = async () => {
	console.time('s2');
	const d2 = await api2;
	console.log('d2', d2);
	console.timeEnd('s2');
};

load2();
load();
