'use strict';

module.exports = class SLL {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendNode(node) {
    if (!(node instanceof SLL)) return null;
    if (!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback) {
    let current = this;
    while (current) {
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle() {
    let slow, fast;
    slow = fast = this;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse(){
    let result = null;
    let temp = [];
    let current = this;
    while (current) {
      temp.push(current);
      current = current.next;
    }
    result = temp.pop() || [];
    current = result;

    while(current) {
      current.next = temp.pop();
      current = current.next;
    }
    return result;
  }
};
