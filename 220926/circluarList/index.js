function Node(data) {
  this.data = data;

  this.next = undefined;
}
function CircularLinkList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}
CircularLinkList.prototype.insert = function (data) {
  if (!this.head) {
    this.head = this.tail = new Node(data);
    this.head.next = this.head;
  } else {
    this.tail.next = new Node(data);
    this.tail.next.next = this.head;
    this.tail = this.tail.next;
  }
  this.size++;
};
CircularLinkList.prototype.remove = function (data) {
  let curr = this.head;
  if (!curr) return; // 데이터가 하나도 없으면
  if (curr.data === data) {
    // 데이터가 하나 있으면
    this.head = this.head.next;
    this.tail.next = this.head;
    this.size--;
    return curr.data;
    // const tempNode = this.head;
    // this.head = undefined;
    // this.size--;
    // return tempNode;
  }
  while (curr !== this.tail) {
    if (curr.next.data === data) {
      const tempNode = curr.next;
      curr.next = tempNode.next;
      if (tempNode === this.tail) this.tail = curr;
      //   if (curr.next == this.head) this.tail = curr;
      --this.size;
      return curr.data;
    }
    curr = curr.next;
    // // 현재 헤드가 꼬리가 일때 까지 반복
    // if (curr.next.data === data) {
    //   // 현재 헤드가 꼬리가 아니면서 현재 헤드의 다음 데이터가 입력 받은 데이터면
    //   const tempNode = curr.next; // remove할 데이터노드를 임시 저장
    //   if (curr.next == this.tail) {
    //     // 현재 헤드의 다음 노드가 꼬리면
    //     curr.next = this.head; // 현재 헤드의 다음을 헤드로 재정의하고
    //     this.tail = this.head; // 꼬리도 현재 헤드로 재정의하고
    //     return tempNode.data; // 임시 저장한 데이터를 반환한다.
    //   } else {
    //     // 현재 헤드의 다음노드가 꼬리가 아니라면
    //     curr.next = tempNode.next; // 현재 헤드의 다음노드를 tempNode의 다음으로 재정의하고
    //     return tempNode.data; // tempNode의 데이터를 반환한다.
    //   }
    //   --this.size;
    // }
    // curr = curr.next; // 현재 헤드를 다음 노드의 헤드로 바꾸면서 확인
  }
};
CircularLinkList.prototype.toString = function () {
  if (!this.head) return "";
  // head가 없으면 빈 문자열을 반환한다.
  let curr = this.head;
  let tempStr = `${this.head.data}`;
  // 임시 문자열에 head에 data 정의
  while (curr != this.tail) {
    // curr가 tail이 아니면 실행
    tempStr += ",";
    // head의 data가 정의되었으니 한번 끊도록 ,를 추가
    tempStr += curr.next.data;
    // 임시 문자열에 다음 Node의 data를 추가
    curr = curr.next;
    // 현재 노드를 다음 노드로 정의
  }
  return tempStr;
  // 모든 문자열이 모인 tempStr
};

const circularLink = new CircularLinkList();
circularLink.insert(1);
circularLink.insert(2);
circularLink.insert(3);
circularLink.insert(4);
console.log(circularLink);
