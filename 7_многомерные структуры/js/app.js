'use strict'

/* Многомерные массивы и объекты в JavaScript */

/* Задача 1⋕js.Pm.Md.MS.1
Дан следующий массив работников:
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран сумму зарплат первого и второго работников. */
//решение
/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
]; */
/* console.log(employees[0]['salary'] + employees[1]['salary']); */ // 700
//способ 2
/* let result = 0;
for (let i = 0; i < 2; i++){
	result += employees[i]['salary'];
}
console.log(result); */ // 700

/* Задача 2⋕js.Pm.Md.MS.2
Дан следующий объект со студентами:
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
Выведите на экран элемент 'Вася' и элемент 'Лена'. */
/* let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students['boys'][1] + ', ' + students['girls'][2]);  */ // Вася, Лена