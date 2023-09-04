import { Tree } from "../collections/tree";

const executePostOrderExample = () => {
  const tree2 = new Tree("+");
  const nnode0 = tree2.addToLeftOf(tree2.root, 2);
  const nnode1 = tree2.addToLeftOf(nnode0, "-");
  const nnode2 = tree2.addToRightOf(nnode0, "**");

  const nnode3 = tree2.addToLeftOf(tree2.root, 5);

  const postOrderIterator = tree2.createIterator("post-order");
  postOrderIterator.startIteration();
  const postOrderResult = postOrderIterator.getIterationResult();
  console.log("Resultado Post-Orden");
  console.log(postOrderResult);
};

export default executePostOrderExample