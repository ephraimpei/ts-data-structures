import { Node } from '../Node';
import { BinarySearchTree } from './index';

const bst = new BinarySearchTree(new Node(10));
bst.insert(new Node(5));
bst.insert(new Node(20));
bst.insert(new Node(4));
bst.insert(new Node(6));
bst.insert(new Node(1));
bst.insert(new Node(0));
bst.insert(new Node(-1));
bst.insert(new Node(7));
bst.insert(new Node(11));

bst.print();
console.log('====== IN ORDER TRAVERSAL =======');
bst.inOrderTraversal();
console.log('====== PRE ORDER TRAVERSAL =======');
bst.preOrderTraversal();
console.log('====== POST ORDER TRAVERSAL =======');
bst.postOrderTraversal();