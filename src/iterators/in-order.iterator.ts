import { IterableTree } from "../collections/collection";
import { Node } from "../collections/node";
import { IteratorTemplate } from "./iterator.template";

export class InOrderIterator<T> extends IteratorTemplate<T> {  
  constructor(tree: IterableTree<T>) {
    super(tree);
  }

  executeIteration(root: Node<T> | null): void {
    this.getInOrder(root);
  }

  getInOrder(root: Node<T> | null){
    if(root !== null) {
      this.getInOrder(root.left);
      this.result.push(root.value);
      this.getInOrder(root.right);
    }
  }
}