export class Node {
  public value: string | number;
  public children: Node[];
  private leftChild: Node;
  private rightChild: Node;
  private parentNode: Node;

  constructor(value: string | number) {
    if (!value && (value !== 0)) {
      throw new TypeError('node value must be specified');
    }

    this.value = value;
    this.children = [];
  }

  get parent(): Node {
    return this.parentNode;
  }

  set parent(node: Node) {
    this.parentNode = node;
  }

  get left(): Node {
    return this.leftChild;
  }

  set left(node: Node) {
    if (!node) {
      return;
    }

    this.children.push(node);
    this.leftChild = node;
    node.parent = this;
  }

  get right(): Node {
    return this.rightChild;
  }

  set right(node: Node) {
    if (!node) {
      return;
    }

    this.children.push(node);
    this.rightChild = node;
    node.parent = this;
  }
}