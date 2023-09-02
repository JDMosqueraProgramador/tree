import { IterableTree } from "../collections/collection";
import { Node } from "../collections/node";
import { IteratorTemplate } from "./iterator.template";

export class DfsPostOrder<T> extends IteratorTemplate<T> {
  constructor(tree: IterableTree<T>) {
    super(tree);
  }

  executeIteration(root: Node<T> | null): void {
    this.getDfsPreOrder(root);
  }

  getDfsPreOrder(root: Node<T> | null){
    if(root !== null) {
      this.getDfsPreOrder(root.left);
      this.getDfsPreOrder(root.right);
      this.result.push(root.value);
    }
  }
}