import { Tree } from "../collections/tree";

const executeDfsPostOrderExample = () => {
  const tree = new Tree(10);
  const node0 = tree.addToLeftOf(tree.root, "+");
  const node1 = tree.addToLeftOf(node0, 3);
  const node2 = tree.addToLeftOf(node1, "+");
  const node3 = tree.addToLeftOf(node2, 2);
  const node4 = tree.addToLeftOf(node3, "+");
  const node5 = tree.addToLeftOf(node4, 1);

  const node6 = tree.addToRightOf(tree.root, "+");
  const node7 = tree.addToRightOf(node6, 5);
  const node8 = tree.addToRightOf(node7, "+");
  const node9 = tree.addToRightOf(node8, 6);
  const node10 = tree.addToRightOf(node9, "+");
  const node11 = tree.addToRightOf(node10, 7);

  const dfsPreOrderIterator = tree.createIterator("dfs-post-order");
  dfsPreOrderIterator.startIteration();
  const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult();
  console.log("Resultado Post-Orden Primero en profundidad");
  console.log(dfsPreOrderResult);
};
export default executeDfsPostOrderExample