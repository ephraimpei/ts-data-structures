import { Node } from './index';

describe('Node class', () => {
  let node: Node;

  describe('instantiation', () => {
    describe('when constructor param is not specified', () => {
      it('throws an error', () => {
        expect(() => {
          node = new Node('');
        }).toThrow(new TypeError('node value must be specified'));
      });
    });

    it('sets the value instance variable', () => {
      node = new Node(5);
      expect(node.value).toEqual(5);
    });

    it('sets the adjacent instance variable to an empty array', () => {
      node = new Node('a');
      expect(node.adjacent instanceof Array).toBe(true);
      expect(node.adjacent.length).toEqual(0);
    });
  });
});