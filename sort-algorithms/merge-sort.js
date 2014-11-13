var publicMergeSort = function(){

  var script = [];

  var my_array = original_array.slice();

  function mergeSort(collection, startindex)
  {
    var result = [];

    if (collection.length > 1)
    {
      var middle = parseInt(collection.length / 2);

      var left = mergeSort(collection.slice(0, middle), 0);
      var right = mergeSort(collection.slice(middle, collection.length), middle);

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

  var my_mergesroted_array = mergeSort(my_array, 0);

};
