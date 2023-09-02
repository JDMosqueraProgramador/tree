import { Node } from "../collections/node";

export interface Iterator<T> {
  startIteration(): void;
  getIterationResult(): T[];
}