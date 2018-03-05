export class Node {
  public value: string | number;
  public children: Node[];
  private leftChild: Node;
  private rightChild: Node;

  constructor(value: string | number) {
    if (!value && (value !== 0)) {
      throw new TypeError('node value must be specified');
    }

    this.value = value;
    this.children = [];
  }

  get left(): Node {
    return this.leftChild;
  }

  set left(node: Node) {
    this.children.push(node);
    this.leftChild = node;
  }

  get right(): Node {
    return this.rightChild;
  }

  set right(node: Node) {
    this.children.push(node);
    this.rightChild = node;
  }
}