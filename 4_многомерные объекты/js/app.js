'use strict'

/* Многомерные объекты в JavaScript */

/* Задача 1
Дан следующий объект:
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
Найдите сумму элементов приведенного объекта. */
//способ 1
/* let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
console.log(obj.key1['key1'] + obj.key1['key2'] + obj.key1['key3'] + obj.key2['key1'] + obj.key2['key2'] + obj.key2['key3'] + obj.key3['key1'] + obj.key3['key2'] + obj.key3['key3']); */ //45

//способ 2
/* let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let result = 0;
for (let i = 1; i < 4; i++){
	for(let j = 1; j < 4; j++){
		result += obj['key' + i]['key' + j];
	}
}
console.log(result); */ // 45

/* Задача 2⋕js.Pm.Md.MO.2
Дан следующий объект:
Выведите на экран элемент 'b2' и элемент 'c1'.
*/
/* let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj[2][1] + ' ' + obj[3][1]); */ // b1 c1

/* Задача 3⋕js.Pm.Md.MO.3
Дан следующий объект:
Найдите сумму всех элементов-чисел.
 */
/* let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
} */

/* const sum = val =>
  val instanceof Object
    ? Object.values(val).reduce((acc, n) => acc + sum(n), 0)
    : val;
console.log(sum(obj)); */
