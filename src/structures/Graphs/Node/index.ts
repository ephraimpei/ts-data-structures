import { Queue } from '../../Queue';
import { guidGenerator } from '../../../utils/generate-random-id';

export const depthFirstSearch = (
  source: Node, dest: Node, visitedSet?: Set<string>
): boolean => {
  const visited = visitedSet || new Set();

  if (visited.has(source.id)) {
    return false;
  }

  visited.add(source.id);

  if (source.id === dest.id) {
    return true;
  }

  for (const node of source.adjacent) {
    if (depthFirstSearch(node, dest, visited)) {
      return true;
    }
  }

  return false;
};

export const breadthFirstSearch = (source: Node, dest: Node): boolean => {
  const queue = new Queue([source]);
  const visited = new Set([source.id]);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node.id === dest.id) {
      return true;
    }

    visited.add(node.id);

    for (const adj of node.adjacent) {
      if (!visited.has(adj.id)) {
        queue.enqueue(adj);
      }
    }
  }

  return false;
};

export const setPath = (source: Node, dest: Node) => {
  if (!source.adjacent.find(n => n.id === dest.id)) {
    source.adjacent.push(dest);
  }
};

export class Node {
  public value: string | number;
  public adjacent: Node[];
  public id: string;

  constructor(value: string | number) {
    if (!value && (value !== 0)) {
      throw new TypeError('node value must be specified');
    }

    this.id = guidGenerator();
    this.value = value;
    this.adjacent = [];
  }
}