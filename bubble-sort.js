;(function ()
{
  'use strict';

  console.log('bubble-sort');

  var my_array = [5, 1, 7, 32, 8, 4, 0, 9, 11, 30];

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
        collection[index] = second;
        collection[index + 1] = first;

        goAgain = true;
      }

      index++;
    }

    if (goAgain)
      bubbleSort(collection);

    return collection;
  }

  console.log(my_array);

  bubbleSort(my_array);

  console.log(my_array);

}());
