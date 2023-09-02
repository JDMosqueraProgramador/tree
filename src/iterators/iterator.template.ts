import { IterableTree } from "../collections/collection";
import { Node } from "../collections/node";
import { Iterator } from "./iterator";

export abstract class IteratorTemplate<T> implements Iterator<T> {
  currentNode: Node<T> | null;
  result: T[];
  
  constructor(private tree: IterableTree<T>) {
    this.currentNode = tree.root;
    this.result = [];
  }

  startIteration() {
    this.executeIteration(this.currentNode);
  }

  abstract executeIteration(root: Node<T> | null): void;

  getIterationResult(): T[] {
    return this.result;
  }
}