import { Tree } from '../Tree';

export class MaxHeap extends Tree {
  public insert: (node: Node) => void;
  public extractMin: () => void;
}