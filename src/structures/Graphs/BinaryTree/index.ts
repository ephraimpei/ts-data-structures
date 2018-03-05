import { Node } from '../Node';
import { Tree } from '../Tree';

const checkValidNode = (node: Node) => {
  if (typeof node.value !== 'number') {
    throw new TypeError('Node value must be a number');
  }
};

const nodeOutput = (node: Node | null) => `${node ? node.value : ' '}`;

/**
 * BinarySearchTree - BST implementation extending from Tree constructor
 */
export class BinarySearchTree extends Tree {
  public render = () => {
    const termCols = process.stdout.columns || 10;
    let start = Math.floor(termCols / 2);
    let depth = 0;
    let currNodes = [this.root];
    let output = '';

    while (currNodes.length > 0) {
      output += new Array(start).fill(' ').join('');
      let outputDirection = new Array(
        start - Math.round(nodeOutput.length / 2)
      ).fill(' ').join('');

      const size = nodeOutput(currNodes[0]).length;
      const nextNodes = [];

      for (let i = 0; i < currNodes.length; i++) {
        const node = currNodes[i];
        output += (i === 0 ? '' : '   ') + nodeOutput(node);

        if (node && (node.left || node.right)) {
          outputDirection += node.left ? '/ ' : ' ';
          outputDirection += node.right ? ' \\' : ' ';

          nextNodes.push(node.left);
          nextNodes.push(node.right);
        }
      }

      if (nextNodes.length > 0) {
        output += `\n${outputDirection}\n`;
      }

      currNodes = [...nextNodes];
      depth += 1;
      start -= (depth * size);
    }

    console.log(output);
  }

  // Operations
  public insert = (node: Node, curr: Node = this.root) => {
    checkValidNode(node);

    if (node.value < curr.value) {
      if (curr.left) {
        this.insert(node, curr.left);
      } else {
        curr.left = node;
        return;
      }
    } else {
      if (curr.right) {
        this.insert(node, curr.right);
      } else {
        curr.right = node;
        return;
      }
    }
  }
}

export class MinHeap extends Tree {
  public insert: (node: Node) => void;
  public extractMin: () => void;
}

export class MaxHeap extends Tree {
  public insert: (node: Node) => void;
  public extractMin: () => void;
}
