var publicSelectionSort = function(original_array){

	'use strict';

	var script = [];
  
  	var my_array = original_array.slice();

	var selectionSort = function(collection, startingPoint) {

		var smallest = startingPoint;
		for (var i = startingPoint; i < collection.length; i++) {
			if (collection[i] < collection[smallest]) {
				smallest = i;
			}
			script.push({a: i,b: i});
		}
		var first = collection[startingPoint];
		var second = collection[smallest];
		collection[startingPoint] = second;
		collection[smallest]= first;

		script.push({a: startingPoint,b: smallest});

		if (startingPoint + 1 < collection.length) {
			selectionSort(collection, startingPoint + 1);
		}
	}

	console.log(my_array);
	selectionSort(my_array, 0);
	return {data: original_array, script: script};

};
