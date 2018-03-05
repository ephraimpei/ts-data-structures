export class Node {
  public value: string | number;
  public children: Node[];

  constructor(value: string | number) {
    if (!value) {
      throw new TypeError('node value must be specified');
    }

    this.value = value;
    this.children = [];
  }
}
