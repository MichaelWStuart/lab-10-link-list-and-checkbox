'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('testing linked list methods', () => {

  describe('testing add node method', () => {
    it('should return 15 as new head value', () => {
      let head = new SLL(15);
      head.appendNode(new SLL(30));
      expect(head.value).toEqual(15);
    });
    it('should return key value node', () => {
      let head = new SLL('test');
      head.appendNode(new SLL('next node'));
      head.appendNode(new SLL('node to test'));
      let arrayOfKeys =  Object.keys(head.next);
      expect(arrayOfKeys[0]).toEqual('value');
    });
  });

  describe('testing reverse node method', () => {
    it('should reverse list and return 30 for first value', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(10));
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head = head.reverse();
      expect(head.value).toEqual(30);
    });
    it('should reverse list and return 40 for the next value', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head.appendNode(new SLL(40));
      head.appendNode(new SLL(50));
      head = head.reverse();
      expect(head.next.next.next.value).toEqual(20);
    });
  });
});
