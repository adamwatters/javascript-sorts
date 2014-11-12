
;(function(){

	'use strict';

	var my_array = [5, 1, 7, 32, 8, 4, 0, 9, 11, 30];

	var selectionSort = function(collection, startingPoint) {

		var smallest = startingPoint;
		for (var i = startingPoint; i < collection.length; i++) {
			if (collection[i] < collection[smallest]) {
				smallest = i;
			}
		}
		var first = collection[startingPoint];
		var second = collection[smallest];
		collection[startingPoint] = second;
		collection[smallest]= first;

		if (startingPoint + 1 < collection.length) {
			selectionSort(collection, startingPoint + 1);
		}
	}

	console.log(my_array);
	selectionSort(my_array, 0);
	console.log(my_array);
	
})()