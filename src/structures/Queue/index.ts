import { Stack } from '../Stack';

/**
 * Queue abstract class
 */
export abstract class QueueApi {
  public abstract peek(): any;
  public abstract enqueue(item: any): any;
  public abstract dequeue(): any;
  public abstract isEmpty(): boolean;
}

/**
 * Queue class - basic queue data structure implemented with two stacks
 */
export class Queue implements QueueApi {
  private newest: Stack;
  private oldest: Stack;

  constructor(items: any[] = []) {
    this.oldest = new Stack();
    this.newest = new Stack(items);
  }

  /**
   * _transfer - private method to transfer items from newest stack  to oldest stack
   */
  private _transfer(source: Stack, target: Stack): void {
    if (source.isEmpty()) {
      return;
    }

    target.push(source.pop());

    this._transfer(source, target);
  }

  /**
   * peek - public method to check top of the queue
   */
  public peek(): any {
    if (this.oldest.isEmpty()) {
      this._transfer(this.newest, this.oldest);
    }

    return this.oldest.peek();
  }

  /**
   * enqueue - public method to enqueue an item
   */
  public enqueue(item: any): any {
    if (!item) {
      return;
    }

    this.newest.push(item);
    return item;
  }

  /**
   * dequeue - public method to dequeue an item
   */
  public dequeue(): any {
    if (this.oldest.isEmpty()) {
      this._transfer(this.newest, this.oldest);
    }

    return this.oldest.pop();
  }

  /**
   * isEmpty - public method to check if the queue is empty
   */
  public isEmpty(): boolean {
    return this.oldest.isEmpty() && this.newest.isEmpty();
  }
}