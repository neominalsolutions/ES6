// const m = require('./06_module_exports.js');
// console.log('today', m.utils.getToday());

// Not: Bir dosyada birden fazla export tanımlı ise importları {package1,package2} alabiliriz.


import { Utils,A } from './06_module_exports.js';
import * as aModule from './06_module_exports.js'; // * tüm dosyayı getir. as aModule alias name


// bir dosyada birden fazla import varsa module olarak tek bir isimden ulaşma şekli
console.log(aModule.Utils.getToday());
console.log(new aModule.A());


console.log(Utils.getToday());
console.log('A',new A());

