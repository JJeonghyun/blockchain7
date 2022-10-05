const heapArr = [];

function swap(idx1, idx2) {
  const temp = heapArr[idx1];
  heapArr[idx1] = heapArr[idx2];
  heapArr[idx2] = temp;
}

function heapInsert(item) {
  heapArr.push(item);
  let nowIdx = heapArr.length - 1;
  while (true) {
    if (nowIdx < 1) return heapArr.length;
    const parentIdx = parseInt((nowIdx - 1) / 2);
    if (heapArr[parentIdx] > heapArr[nowIdx]) {
      // if (heapArr[parentIdx] * -1 > heapArr[nowIdx]*-1) {
      swap(parentIdx, nowIdx);
      nowIdx = parentIdx;
    } else {
      break;
    }
  }
  return heapArr.length;
}

function heapRemove() {
  const temp = heapArr.shift();
  heapArr.unshift(heapArr.pop());
  let nowIdx = 0;
  while (true) {
    const leftChild = nowIdx * 2 + 1,
      rightChild = nowIdx * 2 + 2;
    if (
      heapArr[nowIdx] > heapArr[leftChild] ||
      heapArr[nowIdx] > heapArr[rightChild]
    ) {
      if (heapArr[leftChild > heapArr[rightChild]]) {
        swap(nowIdx, rightChild);
        nowIdx = rightChild;
      } else {
        swap(nowIdx, leftChild);
        nowIdx = leftChild;
      }
    } else {
      break;
    }
  }
  return temp;
}

heapInsert(29);
heapInsert(3);
heapInsert(20);
heapInsert(5);
heapInsert(2);
heapInsert(8);
heapInsert(18);
heapInsert(12);
heapInsert(1);
console.log(heapArr);
heapRemove();
console.log(heapArr);
