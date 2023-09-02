import { Iterator } from "../iterators/iterator";
import { Node } from "./node";

export interface IterableTree<T> {
  root: Node<T> | null;
  createIterator(type: 'in-order' | 'pre-order' | 'post-order' | 'level-order'): Iterator<T>;
}