export class BinaryNode {
  public value: string | number;
  public children: BinaryNode[];
  private leftChild: BinaryNode;
  private rightChild: BinaryNode;
  private parentNode: BinaryNode;

  constructor(value: string | number) {
    if (!value && (value !== 0)) {
      throw new TypeError('node value must be specified');
    }

    this.value = value;
    this.children = [];
  }

  get parent(): BinaryNode {
    return this.parentNode;
  }

  set parent(node: BinaryNode) {
    this.parentNode = node;
  }

  get left(): BinaryNode {
    return this.leftChild;
  }

  set left(node: BinaryNode) {
    if (!node) {
      return;
    }

    this.children.push(node);
    this.leftChild = node;
    node.parent = this;
  }

  get right(): BinaryNode {
    return this.rightChild;
  }

  set right(node: BinaryNode) {
    if (!node) {
      return;
    }

    this.children.push(node);
    this.rightChild = node;
    node.parent = this;
  }
}