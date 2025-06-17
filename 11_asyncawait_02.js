// dbfind -> id -> dbFind(id)

const waitPromise = (ms, maxValue) => {
	console.log('waitPromise', maxValue);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ random: Math.round(Math.random() * maxValue) });
		}, ms);
	});
};

const loadDataOrdered = async () => {
	console.time('start');

	const response1 = await waitPromise(300, 100); // 300ms reponse1 sonra
	console.log('random Number', response1);
	const response2 = await waitPromise(500, response1.random); // 500 response2 için promise başlar
	console.log('random Number', response2);
	console.timeEnd('start');
};

// loadDataOrdered();

const loadDataParalel = async () => {
	console.time('start1');

	const promise1 = waitPromise(300, 100);
	const promise2 = waitPromise(500, 100);

	const response1 = await promise1;
	console.log('random-1', response1);
	const response2 = await promise2;
	console.log('random-2', response2);

	console.timeEnd('start1');
};

// Not: eğer ilk promise ikinci promise değer gönderecek ise ilk promise çözümlenip değeri ikinci promise bırakmlı bu durumda loadDataOrdered gibi geliştirme yapmalıyız. toplam süre iki promise toplam süresi kadar olur. 800 ms

// Ama veriler birbirlerini belklemeyecek ise önce loadDataParalel koddaki gibi promiseler başlatılır. sonra await ile cevaplar resolve edilir. Toplam süre -> en uzun süren promise kadar.

// loadDataParalel();

const loadDataPromiseAll = async () => {
	console.time('s1');

	const loadDataPromiseAll = Promise.all([
		waitPromise(300, 100),
		waitPromise(500, 100),
	]);

	const response = await loadDataPromiseAll;
	console.log('response', response);

	console.timeEnd('s1');
};

loadDataPromiseAll();

// toplam 800ms ikisini toplamı olucak
