import { Tree } from "../collections/tree";

 const tree = new Tree("Libro");
 const node0 = tree.addToLeftOf(tree.root, "Capítulo 1");

 const node1 = tree.addToLeftOf(node0, "Sección 1.1");
 const node2 = tree.addToRightOf(node0, "Sección 1.2");
 const node3 = tree.addToLeftOf(node2, "Sección 1.2.1");
 const node4 = tree.addToRightOf(node2, "Sección 1.2.2");

 const node5 = tree.addToRightOf(tree.root, "Capítulo 2");

 const node6 = tree.addToLeftOf(node5, "Sección 2.1");
 const node7 = tree.addToRightOf(node5, "Sección 2.2");
 const node8 = tree.addToLeftOf(node7, "Sección 2.2.1");
 const node9 = tree.addToRightOf(node7, "Sección 2.2.2");

 const PreOrderIterator = tree.createIterator("pre-order");
 PreOrderIterator.startIteration();
 const PreOrderResult = PreOrderIterator.getIterationResult();



 const postOrderIterator = tree.createIterator("post-order");
 postOrderIterator.startIteration();
 const postOrderResult = postOrderIterator.getIterationResult();



 const inOrderIterator = tree.createIterator("in-order");
 inOrderIterator.startIteration();
 const inOrderResult = inOrderIterator.getIterationResult();


 const dfsPostOrderIterator = tree.createIterator("dfs-post-order");
 dfsPostOrderIterator.startIteration();
 const dfsPostOrderResult = dfsPostOrderIterator.getIterationResult();



 const dfsPreOrderIterator = tree.createIterator("dfs-pre-order");
 dfsPreOrderIterator.startIteration();
 const dfsPreOrderResult = dfsPreOrderIterator.getIterationResult();



 const results = {
    inOrderResult,
    PreOrderResult,
    postOrderResult,
    dfsPreOrderResult,
    dfsPostOrderResult,
    
 }
console.log(results)