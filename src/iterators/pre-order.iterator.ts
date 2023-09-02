import { IterableTree } from "../collections/collection";
import { Node } from "../collections/node";
import { IteratorTemplate } from "./iterator.template";

export class PreOrderIterator<T> extends IteratorTemplate<T> {
  constructor(tree: IterableTree<T>) {
    super(tree);
  }

  executeIteration(root: Node<T> | null): void {
    this.getPreOrder(root);
  }

  getPreOrder(root: Node<T> | null){
    if(root !== null) {
      this.result.push(root.value);
      this.getPreOrder(root.left);
      this.getPreOrder(root.right);
    }
  }
}