class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

const buildTree = function (arr, start = 0, end = arr.length - 1) {
    let mid = (start + end) / 2
    if (start > end) {
        return null
    } else {
        if (!Number.isInteger(mid)) {
            mid = mid - 0.5
        }
        const treeRoot = new Node(arr[mid])
        treeRoot.left = buildTree(arr, start, mid - 1)
        treeRoot.right = buildTree(arr, mid + 1, end)
        return treeRoot
    }
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr)
    }

}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7]
const newTree = buildTree(sortedArray)
prettyPrint(newTree)