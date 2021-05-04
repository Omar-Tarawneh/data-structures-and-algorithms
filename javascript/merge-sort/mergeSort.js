const mergeSort = (arr) => {
  if (!arr.length) {
    return null;
  }
  let l = arr.length;
  let mid = Math.ceil(l / 2);
  if (l > 1) {
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  }
};

module.exports = mergeSort;
