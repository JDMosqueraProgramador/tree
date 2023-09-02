import { IterableTree } from "./collection";
import { Iterator } from "../iterators/iterator";
import { Node } from "./node";
import { InOrderIterator } from "../iterators/in-order.iterator";
import { PostOrderIterator } from "../iterators/post-order.iterator";
import { DfsPreOrder } from "../iterators/dfs-pre-order.iterator";
import { DfsPostOrder } from "../iterators/dfs-post-order.iterator";

export type NodeType = number | string;

export class Tree implements IterableTree<NodeType> {
  root: Node<NodeType>;
  currentNode: Node<NodeType> | null;
  collections: IterableTree<NodeType>[] | null;

  constructor(startValue: NodeType) {
    this.root = new Node(startValue);
  }

  #addToSide(rootNode: Node<NodeType>, value: NodeType, side: "left" | "right") {
    const newNode = new Node(value);
    if(rootNode[side] !== null) newNode[side] = rootNode[side];
    rootNode[side] = newNode;

    return newNode;
  }

  addToLeftOf(rootNode: Node<NodeType>, value: NodeType) {
    return this.#addToSide(rootNode, value, "left");
  }

  addToRightOf(rootNode: Node<NodeType>, value: NodeType) {
    return this.#addToSide(rootNode, value, "right");
  }

  createIterator(
    type: 
    'in-order' 
    | 'pre-order' 
    | 'post-order' 
    | 'dfs-pre-order' 
    | 'dfs-post-order'
  ): Iterator<NodeType> {
    const iterators = {
      "pre-order": new InOrderIterator(this),
      "in-order": new InOrderIterator(this),
      "post-order": new PostOrderIterator(this),
      'dfs-pre-order': new DfsPreOrder(this),
      'dfs-post-order': new DfsPostOrder(this),
    }

    return iterators[type];
  }
}