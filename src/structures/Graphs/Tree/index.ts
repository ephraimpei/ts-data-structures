import { Node } from '../Node';

export class Tree {
  public root: Node;
  private visited: Set<Node>;

  constructor(root: Node) {
    if (!root) {
      throw new TypeError('Must be instantiated with a root node');
    }

    this.root = root;
  }
}