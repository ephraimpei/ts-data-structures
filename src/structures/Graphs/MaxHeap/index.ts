import { Tree } from '../Tree';

export class MinHeap extends Tree {
  public insert: (node: Node) => void;
  public extractMin: () => void;
}