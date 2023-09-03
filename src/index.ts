import { Tree } from "./collections/tree";

const tree = new Tree(4);
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

const inOrderIterator = tree.createIterator("in-order");
inOrderIterator.startIteration();
const inOrderResult = inOrderIterator.getIterationResult();
console.log("Resultado In-Orden")
console.log(inOrderResult);


const tree2 = new Tree("+");
const nnode0 = tree.addToLeftOf(tree2.root, 2);
const nnode1 = tree.addToLeftOf(nnode0, "-");
const nnode2 = tree.addToRightOf(nnode0, "**");

const nnode3 = tree.addToLeftOf(tree2.root, 5);

const postOrderIterator = tree2.createIterator('post-order');
postOrderIterator.startIteration();
const postOrderResult = postOrderIterator.getIterationResult();
console.log("Resultado Post-Orden");
console.log(postOrderResult);


const tree3 = new Tree(10);
const nnnode0 = tree3.addToLeftOf(tree3.root, 5);
const nnnode1 = tree3.addToLeftOf(nnnode0, 3);
const nnnode2 = tree3.addToRightOf(nnnode0, 7);


const nnnode6 = tree3.addToRightOf(tree3.root, 15);





const dfsPreOrderIterator = tree3.createIterator("dfs-pre-order");
dfsPreOrderIterator.startIteration();
const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult()
console.log("Resultado Pre-Orden Primero en profundidad");
console.log(dfsPreOrderResult);
