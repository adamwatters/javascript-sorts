var publicMergeSort = function(){

  var script = [];

  var original_array = [];
        for(var i = 0; i < 5; i++) {
          original_array.push(Math.floor(Math.random() * 255));
        }
        original_array = [3, 5, 2, 1];

  var my_array = original_array.slice();

  function mergeSort(collection, startindex)
  {
    var result = [];

    if (collection.length > 1)
    {
      var middle = parseInt(collection.length / 2);

      var left = mergeSort(collection.slice(0, middle), 0 + startindex);
      var right = mergeSort(collection.slice(middle, collection.length), middle + startindex);

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
            console.log('pushing', startindex + i + j);
            i++;
          }
          else
          {
            result.push(right[j]);
            console.log('pushing', startindex + j + i);
            j++;
          }
        }
        else if (i < left.length)
        {
          result.push(left[i]);
          console.log('pushing', startindex + i + j);
          i++;
        }
        else
        {
          result.push(right[j]);
          console.log('pushing', startindex + j + i);
          j++;
        }
      }
      console.log('merged', result, startindex);
    }
    else {
      console.log('individual', collection[0], startindex);
      result.push(collection[0]);
    }

    return result;
  }

  console.log(my_array);

  console.log(mergeSort(my_array, 0));

};

publicMergeSort();
