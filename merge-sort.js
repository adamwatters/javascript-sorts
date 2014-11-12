;(function ()
{
  'use strict';
  
  console.log('merge-sort');

  var my_array = [5, 1, 7, 32, 8, 4, 0, 9, 11, 30, 23];

  function mergeSort(collection)
  {
    var result = [];

    if (collection.length > 1)
    {
      var middle = parseInt(collection.length / 2);

      var left = mergeSort(collection.slice(0, middle));
      var right = mergeSort(collection.slice(middle, collection.length));

      console.log('left', left);
      console.log('right', right);

      var i = 0;
      var j = 0;

      while (i < left.length || j < right.length)
      {
        if (i < left.length && j < right.length)
        {
          if (left[i] < right[j])
          {
            result.push(left[i]);
            i++;
          }
          else
          {
            result.push(right[j]);
            j++;
          }
        }
        else if (i < left.length)
        {
          result.push(left[i]);
          i++;
        }
        else
        {
          result.push(right[j]);
          j++;
        }
      }
      console.log('merged', result);
    }
    else {
      console.log('individual', collection[0]);
      result.push(collection[0]);
    }

    return result;
  }

  console.log(my_array);

  var my_mergesroted_array = mergeSort(my_array);

}());
