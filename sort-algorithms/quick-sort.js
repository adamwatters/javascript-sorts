var publicQuickSort = function(original_array){

  var script = [];
 
  var my_array = original_array.slice();

	var quickSort = function(collection, start, end) {

		//console.log("start", start, "end", end);

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

				script.push({a: compareIndex, b: pivotIndex, flag: pivotIndex});
				script.push({a: compareIndex, b: pivotIndex-1, flag: pivotIndex});

				collection[pivotIndex] = first;
				//console.log("move", first, "to index", pivotIndex);

				collection[compareIndex] = second;
				//console.log("move", second, "to index", compareIndex);

				collection[pivotIndex - 1] = third;
				//console.log("move", third, "to index", pivotIndex -1);

				pivotIndex -= 1; 
			} else {
				script.push({a: compareIndex, b: compareIndex, flag: pivotIndex});
				compareIndex += 1;
			}
		}

		quickSort(collection, start, pivotIndex -1);
		quickSort(collection, pivotIndex + 1, end);

	};

	console.log(my_array);
	quickSort(my_array, 0, my_array.length -1);
	return {data: original_array, script: script};

};