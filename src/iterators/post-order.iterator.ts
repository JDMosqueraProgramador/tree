import { IterableTree } from "../collections/collection";
import { Node } from "../collections/node";
import { IteratorTemplate } from "./iterator.template";

export class PostOrderIterator<T> extends IteratorTemplate<T> {
  constructor(tree: IterableTree<T>) {
    super(tree);
  }

  executeIteration(root: Node<T> | null): void {
    this.getPostOrder(root);
  }

  getPostOrder(root: Node<T> | null){
    if(root !== null) {
      this.getPostOrder(root.left);
      this.getPostOrder(root.right);
      this.result.push(root.value);
    }
  }
}