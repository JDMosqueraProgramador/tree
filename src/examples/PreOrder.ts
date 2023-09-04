import { Tree } from "../collections/tree";

const executePreOrderExample = () => {
  const tree = new Tree(28);
  const nnnode0 = tree.addToLeftOf(tree.root, 5);
  const nnnode1 = tree.addToLeftOf(nnnode0, 3);
  const nnnode2 = tree.addToRightOf(nnnode0, 7);

  const nnnode6 = tree.addToRightOf(tree.root, 35);
  const nnnode7 = tree.addToRightOf(nnnode6, 47);
  const nnnode8 = tree.addToRightOf(nnnode7, 56);

  const dfsPreOrderIterator = tree.createIterator("pre-order");
  dfsPreOrderIterator.startIteration();
  const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult();
  console.log("Resultado Pre-Orden");
  console.log(dfsPreOrderResult);
};

export default executePreOrderExample;
