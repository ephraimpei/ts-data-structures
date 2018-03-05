export abstract class StackApi {
  public abstract peek(): any;
  public abstract push(item: any): any;
  public abstract pop(): any;
  public abstract isEmpty(): boolean;
}

export abstract class QueueApi {
  public abstract peek(): any;
  public abstract enqueue(item: any): any;
  public abstract dequeue(): any;
  public abstract isEmpty(): boolean;
}