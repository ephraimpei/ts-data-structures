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

    it('sets the children instance variable to an empty array', () => {
      node = new Node('a');
      expect(node.children instanceof Array).toBe(true);
      expect(node.children.length).toEqual(0);
    });
  });
});