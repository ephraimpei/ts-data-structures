export abstract class StackOrQueueApi {
  public abstract peek(): any;
  public abstract push(item: any): any;
  public abstract pop(): any;
  public abstract isEmpty(): boolean;
}