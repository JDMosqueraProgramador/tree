import { Tree } from "../collections/tree";

const tree = new Tree('F');
const nodeB = tree.addToLeftOf(tree.root, 'B');
const nodeA = tree.addToLeftOf(nodeB, 'A');
const nodeD = tree.addToRightOf(nodeB, 'D');
const nodeC = tree.addToLeftOf(nodeD, 'C');
const nodeE = tree.addToRightOf(nodeD, 'E');

const nodeG = tree.addToRightOf(tree.root, 'G');
const nodeI = tree.addToRightOf(nodeG, 'I');
const nodeH = tree.addToLeftOf(nodeI, 'H');

const inOrderIterator = tree.createIterator('in-order');
inOrderIterator.startIteration();
const inOrderResult = inOrderIterator.getIterationResult();

const posOrderIterator = tree.createIterator('post-order');
posOrderIterator.startIteration();
const posOrderResult = posOrderIterator.getIterationResult();

const preOrderIterator = tree.createIterator('pre-order');
preOrderIterator.startIteration();
const preOrderResult = preOrderIterator.getIterationResult();

const dfsPostOrderIterator = tree.createIterator('dfs-post-order');
dfsPostOrderIterator.startIteration();
const dfsPostResult = dfsPostOrderIterator.getIterationResult();

const dfsPreOrderIterator = tree.createIterator('dfs-pre-order');
dfsPreOrderIterator.startIteration();
const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult();

const results = {
    inOrderResult,
    posOrderResult,
    preOrderResult,
    dfsPostResult,
    dfsPreOrderResult,
}

console.log(results);
