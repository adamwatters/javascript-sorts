var publicSelectionSort = function(){

	'use strict';

	var script = [];
  	var original_array = [];

	for(var i = 0; i < 30; i++) {
    	original_array.push(Math.floor(Math.random() * 100));
  	}

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

	selectionSort(my_array, 0);
	console.log(my_array);
	return {data: original_array, script: script};

};
