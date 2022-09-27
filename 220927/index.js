class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  insert(data, index) {
    if (index === undefined) this.children.push(new TreeNode(data));
    else if (index > -1) this.children[index].push(new TreeNode(data));
  }
  insertNode(node) {
    this.children.push(node);
  }
}
const testTree = new TreeNode(1);
testTree.insert(2);
testTree.insert(3);
testTree.insertNode(new TreeNode(5));
const testTree2 = new TreeNode(6);
testTree2.insert(testTree);
console.log(testTree);
console.log(testTree2);

class BinaryNode {
  // 이진트리용 노드
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  // 이진 검색 트리
  constructor(data) {
    this.root = null;
  }
  insert(data) {
    if (!this.root) {
      this.root = new BinaryNode(data);
      return;
    }
    let node = this.root;
    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new BinaryNode(data);
          return;
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new BinaryNode(data);
          return;
        }
      } else return;
    }
  }
  remove(data, node = this.root) {
    // if (!this.root) return;
    // if (node === data) {
    //   if (data - node.left <= data - node.right) {
    //     this.root = node.left;
    //     node.left = node.left.left;
    //   } else {
    //     this.root = node.right;
    //     node.right = node.left.left;
    //   }
    // } else if (node.left === data) {
    // } else if (node.right === data) {
    // } else return;
    if (!this.root) return;
    if (node.data > data) {
      //node.left, 지우려는 데이터가 현재 노드의 데이터보다 작다
      if (node.left) {
        // 현재 노드의 왼쪽 노드가 있으면
        node.left = this.remove(data, node.left);
      }
    } else if (node.data < data) {
      //node.right, 지우려는 데이터가 현재 노드의 데이터보다 크다
      if (node.right) {
        // 현재 노드의 오른쪽 노드가 있으면
        node.right = this.remove(data, node.right);
      }
    } else {
      if (!node.left && !node.right) {
        // left, right 모두 없을 때
        // 하위 노드가 아예 없다.
        if (node === this.root) this.root = undefined;
        return undefined;
      } else if (!node.left) {
        // 왼쪽노드가 없다. => 오른쪽 노드만 있다.
        if (node === this.root) this.root = node.right;
        return node.right;
      } else if (!node.right) {
        // 오른쪽 노드가 없다. => 왼쪽 노드만 있다.
        if (node === this.root) this.root = node.left;
        return node.left;
      } else {
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = this.remove(tempNode.data, node.right);
      }
    }
    return node;
    // 마지막에 현재 노드를 반환해준다.
    // 재귀 함수를 위해서.
  }
}
const testSearch = new BinarySearchTree();
testSearch.insert(8);
testSearch.insert(4);
testSearch.insert(12);
testSearch.insert(2);
testSearch.insert(6);
testSearch.insert(10);
testSearch.insert(14);
testSearch.insert(1);
testSearch.insert(3);
testSearch.insert(5);
testSearch.insert(7);
testSearch.insert(9);
testSearch.insert(11);
testSearch.insert(13);
testSearch.insert(15);
testSearch.remove(1);
console.log(testSearch);

function solution(x) {
  let answer = 0;
  let origiNum = x;

  while (x) {
    answer += x % 10;
    x /= 10;
  }
  if (origiNum % parseInt(answer) == 0) return true;
  else return false;
}
console.log(solution(10));
