export class Node<T> {

  public left: Node<T> | null;
  public right: Node<T> | null;

  constructor(public value: T) {
    this.left = null;
    this.right = null;
  }
}