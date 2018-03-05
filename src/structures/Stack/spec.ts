import { Stack } from './index';

describe('Stack class', () => {
  let stack: Stack;
  let returnValue: any;

  describe('instantiation', () => {
    it('sets empty items array instance variable if no param', () => {
      stack = new Stack();
      expect(stack['items'] instanceof Array).toBe(true);
      expect(stack['items'].length).toEqual(0);
    });

    it('sets items array instance variable correctly if items are passed', () => {
      stack = new Stack(['a', 'b', 'c']);
      expect(stack['items'] instanceof Array).toBe(true);
      expect(stack['items'].length).toEqual(3);
    });
  });

  describe('#peek', () => {
    describe('when the stack is empty', () => {
      it('returns undefined', () => {
        stack = new Stack();
        returnValue = stack.peek();
        expect(returnValue).toBe(undefined);
      });
    });

    it('returns the top item in the stack if it is NOT empty', () => {
      stack = new Stack([1, 2, 3]);
      returnValue = stack.peek();
      expect(returnValue).toEqual(3);
    });
  });

  describe('#push', () => {
    beforeEach(() => {
      stack = new Stack();
    });

    describe('when there isn\'t a valid item param', () => {
      it('items array remain unchanged and returns undefined', () => {
        returnValue = stack.push(undefined);
        expect(stack['items'].length).toEqual(0);
        expect(returnValue).toBe(undefined);
      });
    });

    it('pushes the item param into the items array and returns the pushed item', () => {
      returnValue = stack.push(123);
      expect(stack['items'].length).toEqual(1);
      expect(returnValue).toBe(123);
    });
  });

  describe('#pop', () => {
    describe('when the stack is empty', () => {
      it('items array remain unchanged and returns undefined', () => {
        stack = new Stack();
        returnValue = stack.pop();
        expect(stack['items'].length).toEqual(0);
        expect(returnValue).toBe(undefined);
      });
    });

    it('pops the items array and returns the popped item', () => {
      stack = new Stack([123]);
      returnValue = stack.pop();
      expect(stack['items'].length).toEqual(0);
      expect(returnValue).toBe(123);
    });
  });

  describe('#isEmpty', () => {
    it('returns true if stack is empty', () => {
      stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });

    it('returns false if stack is NOT empty', () => {
      stack = new Stack(['hello', 'friend']);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('#getItems', () => {
    it('returns a pass by reference to the items instance', () => {
      const items = ['sup', 'wit', 'it'];
      stack = new Stack(items);
      expect(stack.getItems()).toEqual(items);
    });
  });
});