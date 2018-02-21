import { StackOrQueueApi } from '../../abstract/stack-queue';

/**
 * Stack class - basic stack data structure
 */
export class Stack implements StackOrQueueApi {
  private items: any[];

  constructor(items: any[] = []) {
    this.items = items;
  }

  /**
   * peek - public method to check top of the stack
   */
  public peek(): any {
    if (this.isEmpty()) {
      return;
    }

    return this.items[this.items.length - 1];
  }

  /**
   * push - public method to push item into stack
   */
  public push(item: any): any {
    if (!item) {
      return;
    }

    this.items.push(item);
    return item;
  }

  /**
   * pop - public method to pop item from the stack
   */
  public pop(): any {
    if (this.isEmpty()) {
      return;
    }

    return this.items.pop();
  }

  /**
   * pop - public method to check if stack is empty
   */
  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * getItems - public method to get reference of items
   * note: this is a reference, NOT a copy
   */
  public getItems(): any[] {
    return this.items;
  }
}