'use strict'

// Перебор многомерных массивов в JavaScript
/* Задача 1
Дан двухмерный массив с числами:
let arr = [[1, 2, 3], [4, 5], [6]];
С помощью вложенных циклов найдите сумму элементов этого массива. */
/* let arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;
for (let subArr of arr){
	for (let elem of subArr){
		result += elem
	}
}
console.log(result); */ // 21

/* Задача 2⋕
Дан трехмерный массив с числами:
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива. */
/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result = 0;
for (let subArr of arr){
	for (let elem of subArr){
		for (let arrResult of elem){
			result += arrResult
		}
	}
}
console.log(result); */ //36

// Перебор через обычный for
// Задача 3
// Решите предыдущие две задачи через цикл for.

// 1)
/* let arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;
for (let i = 0; i < arr.length; i++){
	for (let j = 0; j < arr[i].length; j++){
		result += arr[i][j]
	}
}
console.log(result); */ //21

// 2)
/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result = 0;
for (let i = 0; i < arr.length; i++){
	for (let j = 0; j < arr[i].length; j++){
		for (let k = 0; k < arr[i][j].length; k++){
			result += arr[i][j][k];
		}
	}
}
console.log(result); */ // 36