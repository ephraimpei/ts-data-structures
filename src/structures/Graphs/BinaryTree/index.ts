import { Node } from '../Node';
import { Tree } from '../Tree';

const checkValidNode = (node: Node) => {
  if (typeof node.value !== 'number') {
    throw new TypeError('Node value must be a number');
  }
};

const nodeOutput = (node: Node | null) => `${node ? node.value : ' '}`;

const printNode = (node: Node) => console.log(nodeOutput(node));

const fullTreeVisit = (fullTreeIndicator: { full: boolean }) => (node: Node) => {
  if (node.children.length === 1) {
    fullTreeIndicator.full = false;
  }
};

/**
 * BinarySearchTree - BST implementation extending from Tree constructor
 */
export class BinarySearchTree extends Tree {
  /**
   * render - draw a tree in the console
   * NOTE: DO NOT USE !!! It's pretty broken...
   */
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

  /**
   * print - output the tree to console (in order of depth)
   * for debugging purposes only
   */
  public print = () => {
    const output = {
      depth: 0,
      nodes: [this.root.value]
    };

    let nodes = [this.root];

    while (nodes.length > 0) {
      console.log(output);
      const newNodes: Node[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const currNode = nodes[i];

        if (currNode.left) {
          newNodes.push(currNode.left);
        }

        if (currNode.right) {
          newNodes.push(currNode.right);
        }
      }

      nodes = [...newNodes];
      output.depth += 1;
      output.nodes = [...newNodes.map(n => n.value)];
    }
  }

  /**
   * inOrderTraversal - visit left branch, current node, then right branch
   */
  public inOrderTraversal = (node: Node = this.root, visit: Function = printNode) => {
    if (node) {
      if (node.left) {
        this.inOrderTraversal(node.left, visit);
      }
      visit(node);
      if (node.right) {
        this.inOrderTraversal(node.right, visit);
      }
    }
  }

  /**
   * preOrderTraverl - visit current node, left branch, then right branch
   */
  public preOrderTraversal = (node: Node = this.root, visit: Function = printNode) => {
    if (node) {
      visit(node);
      if (node.left) {
        this.preOrderTraversal(node.left, visit);
      }
      if (node.right) {
        this.preOrderTraversal(node.right, visit);
      }
    }
  }

  /**
   * postOrderTraversal - visit left branch, right branch, then current node
   */
  public postOrderTraversal = (node: Node = this.root, visit: Function = printNode) => {
    if (node) {
      if (node.left) {
        this.postOrderTraversal(node.left, visit);
      }
      if (node.right) {
        this.postOrderTraversal(node.right, visit);
      }
      visit(node);
    }
  }

  /**
   * insert - insert a node into the tree
   */
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

  /**
   * delete - delete a node from the tree
   * NOTE: incomplete, a bit buggy
   */
  public delete = (
    value: string | number, curr: Node = this.root
  ): string | number | null => {
    if (value === curr.value) {
      if (curr.right) {
        curr.left.right = curr.right;
      }

      if (curr.left) {
        if (curr.parent.value < value) { // right branch
          curr.parent.right = curr.left;
        } else { // left branch
          curr.parent.left = curr.left;
        }
      }

      return value;
    }

    if (value < curr.value) {
      this.delete(value, curr.left);
    } else {
      this.delete(value, curr.right);
    }

    return null;
  }

  /**
   * isComplete - true if every level is fully filled
   * exception: last level is filled at least from left to right
   */
  public isComplete = (): boolean => {
    return true;
  }

  /**
   * isFull - true if every node has either zero or two children
   */
  public isFull = (node: Node = this.root): boolean => {
    const fullTreeIndicator = { full: true };

    this.preOrderTraversal(node, fullTreeVisit(fullTreeIndicator));

    return fullTreeIndicator.full;
  }

  /**
   * isPerfect - true if both full and complete
   */
  public isPerfect = (): boolean => {
    return this.isComplete() && this.isFull();
  }
}