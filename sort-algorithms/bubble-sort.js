var publicBubbleSort = function(original_array){

  var script = [];

  var my_array = original_array.slice();

  function bubbleSort (collection)
  {
    var goAgain = false;
    var index = 0;

    while (index < collection.length - 1)
    {
      var first = collection[index];
      var second = collection[index + 1];

      if (second < first)
      {
        //push frame of swap (index to neighbor)
        script.push({a: index,b: index + 1});
        collection[index] = second;
        collection[index + 1] = first;

        goAgain = true;
      } else {
        //push frame with no action (index to index)
        script.push({a: index, b: index});
      }
      index++;
    }

    if (goAgain)
      bubbleSort(collection);

    return collection;
  }

  console.log(my_array);
  bubbleSort(my_array);

  return {data: original_array, script: script};

}