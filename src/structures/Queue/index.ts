import { StackOrQueueApi } from '../../abstract/stack-queue';
import { Stack } from '../Stack';

/**
 * Queue class - basic queue data structure implemented with two stacks
 */
export class Queue implements StackOrQueueApi {
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
   * push - public method to push item into the queue
   */
  public push(item: any): any {
    if (!item) {
      return;
    }

    this.newest.push(item);
    return item;
  }

  /**
   * pop - public method to pop first item in the queue
   */
  public pop(): any {
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