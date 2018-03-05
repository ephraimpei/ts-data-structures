export class Node {
  public value: string | number;
  public children: Node[];
  public left: Node;
  public right: Node;

  constructor(value: string | number) {
    if (!value && (value !== 0)) {
      throw new TypeError('node value must be specified');
    }

    this.value = value;
    this.children = [];
  }
}