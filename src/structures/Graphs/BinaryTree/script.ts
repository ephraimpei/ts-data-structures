import { BinaryNode } from '../BinaryNode';
import { BinarySearchTree } from './index';

const bst = new BinarySearchTree(new BinaryNode(10));
console.log('====== INSERT =======');
bst.insert(new BinaryNode(5));
bst.insert(new BinaryNode(20));
bst.insert(new BinaryNode(4));
bst.insert(new BinaryNode(6));
bst.insert(new BinaryNode(1));
bst.insert(new BinaryNode(0));
bst.insert(new BinaryNode(-1));
bst.insert(new BinaryNode(7));
bst.insert(new BinaryNode(11));
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
const isCompleteBst = new BinarySearchTree(new BinaryNode(10));
isCompleteBst.insert(new BinaryNode(5));
isCompleteBst.insert(new BinaryNode(3));
isCompleteBst.insert(new BinaryNode(7));
isCompleteBst.insert(new BinaryNode(20));
isCompleteBst.insert(new BinaryNode(18));
console.log(isCompleteBst.isComplete()); // should be true
const isNotCompleteBst = new BinarySearchTree(new BinaryNode(10));
isNotCompleteBst.insert(new BinaryNode(5));
isNotCompleteBst.insert(new BinaryNode(3));
isNotCompleteBst.insert(new BinaryNode(20));
isNotCompleteBst.insert(new BinaryNode(18));
console.log(isNotCompleteBst.isComplete()); // should be false
console.log('====== IS FULL =======');
const fullBst = new BinarySearchTree(new BinaryNode(10));
fullBst.insert(new BinaryNode(5));
fullBst.insert(new BinaryNode(20));
fullBst.insert(new BinaryNode(3));
fullBst.insert(new BinaryNode(7));
fullBst.insert(new BinaryNode(18));
fullBst.insert(new BinaryNode(30));
console.log(fullBst.isFull()); // should be true
const notFullBst = new BinarySearchTree(new BinaryNode(10));
notFullBst.insert(new BinaryNode(5));
notFullBst.insert(new BinaryNode(12));
notFullBst.insert(new BinaryNode(20));
notFullBst.insert(new BinaryNode(3));
notFullBst.insert(new BinaryNode(7));
notFullBst.insert(new BinaryNode(9));
notFullBst.insert(new BinaryNode(18));
console.log(notFullBst.isFull()); // should be false
console.log('====== IS PERFECT =======');
isCompleteBst.insert(new BinaryNode(30));
console.log(isCompleteBst.isPerfect()); // should be true;
fullBst.insert(new BinaryNode(31));
console.log(fullBst.isPerfect()); // should be false;