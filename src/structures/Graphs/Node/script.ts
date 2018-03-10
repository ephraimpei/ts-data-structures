import { Node, setPath, depthFirstSearch, breadthFirstSearch } from './index';

const root = new Node(10);
const nodeA = new Node(5);
const nodeB = new Node(20);
const nodeC = new Node(40);
const nodeD = new Node('whatever');

setPath(root, nodeA);
setPath(root, nodeB);

setPath(nodeA, nodeC);
setPath(nodeA, nodeD);

setPath(nodeB, nodeC);

console.log(depthFirstSearch(root, nodeD)); // should be true
console.log(depthFirstSearch(nodeB, nodeD)); // should be false

console.log(breadthFirstSearch(root, nodeD)); // should be true
console.log(breadthFirstSearch(nodeB, nodeD)); // should be false