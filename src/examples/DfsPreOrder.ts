import { Tree } from "../collections/tree";
const executeDfsPreOrderExample = () => {
  const tree3 = new Tree(10);
  const nnnode0 = tree3.addToLeftOf(tree3.root, 5);
  const nnnode1 = tree3.addToLeftOf(nnnode0, 3);
  const nnnode2 = tree3.addToRightOf(nnnode0, 7);

  const nnnode6 = tree3.addToRightOf(tree3.root, 15);
  const nnnode7 = tree3.addToRightOf(nnnode6, 19);
  const nnnode8 = tree3.addToRightOf(nnnode7, 23);

  const dfsPreOrderIterator = tree3.createIterator("dfs-pre-order");
  dfsPreOrderIterator.startIteration();
  const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult();
  console.log("Resultado Pre-Orden Primero en profundidad");
  console.log(dfsPreOrderResult);
};
export default executeDfsPreOrderExample