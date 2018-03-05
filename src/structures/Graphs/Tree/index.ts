import { Node } from '../Node';

export class Tree {
  public root: Node;

  constructor(root: Node) {
    if (!root) {
      throw new TypeError('Must be instantiated with a root node');
    }

    this.root = root;
  }

  // Tree attributes
  public isComplete: () => boolean;
  public isFull: () => boolean;
  public isPerfect: () => boolean;
  public isBalanced: () => boolean;

  // Tree traversals
  public inOrderTraversal: (node: Node) => void;
  public preOrderTraversal: (node: Node) => void;
  public postOrderTraversal: (node: Node) => void;

  // public breadthFirstSearch(node: Node) {

  // }

  // public depthFirstSearch(node: Node) {

  // }
}