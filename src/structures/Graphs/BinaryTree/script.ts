import { Node } from '../Node';
import { BinarySearchTree } from './index';

const bst = new BinarySearchTree(new Node(10));
console.log('====== INSERT =======');
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

console.log('====== DELETE (not working 100%) =======');
bst.delete(5);
bst.print();

console.log('====== IS COMPLETE =======');
console.log('====== IS FULL =======');
const fullBst = new BinarySearchTree(new Node(10));
fullBst.insert(new Node(5));
fullBst.insert(new Node(20));
fullBst.insert(new Node(3));
fullBst.insert(new Node(7));
fullBst.insert(new Node(18));
fullBst.insert(new Node(30));
console.log(fullBst.isFull()); // should be true
const notFullBst = new BinarySearchTree(new Node(10));
notFullBst.insert(new Node(5));
notFullBst.insert(new Node(12));
notFullBst.insert(new Node(20));
notFullBst.insert(new Node(3));
notFullBst.insert(new Node(7));
notFullBst.insert(new Node(9));
notFullBst.insert(new Node(18));
console.log(notFullBst.isFull()); // should be false
console.log('====== IS PERFECT =======');