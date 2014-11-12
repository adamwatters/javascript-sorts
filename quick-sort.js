;(function(){ 
	var wiki_array = [3, 7 , 8, 5 ,2 , 1, 9, 5 , 4];
	var my_array = [5, 1, 7, 32, 8, 4, 0, 9, 11, 30];

	var quickSort = function(collection, start, end) {

		console.log("start", start, "end", end);

		if (end - start < 1) {
			return
		}

		var pivotIndex = end;
		var compareIndex = start;

		while (compareIndex < pivotIndex) { 

			if (collection[compareIndex] >= collection[pivotIndex]) {
				var first = collection[compareIndex];
				var second = collection[pivotIndex -1];
				var third = collection[pivotIndex];

				collection[pivotIndex] = first;
				console.log("move", first, "to index", pivotIndex);
				collection[compareIndex] = second;
				console.log("move", second, "to index", compareIndex);
				collection[pivotIndex - 1] = third;
				console.log("move", third, "to index", pivotIndex -1);

				pivotIndex -= 1; 
			} else {
				compareIndex += 1;
			}
		}

		quickSort(collection, start, pivotIndex -1);
		quickSort(collection, pivotIndex + 1, end);

	};

	quickSort(my_array, 0, my_array.length -1);
	console.log(my_array);

})()