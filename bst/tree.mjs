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

class Tree {
    constructor(arr) {
        this.root = buildTree(arr.sort(function (a, b) { return a - b; }))
    }

    show = function () {
        prettyPrint(this.root)
    }

    insert = function (data, root = this.root) {
        if (root === null) {
            return root = buildTree([data])
        } else {
            if (data < root.data) {
                root.left = this.insert(data, root.left)
            } else if (data > root.data) {
                root.right = this.insert(data, root.right)
            } else {
                return root
            }
            return root
        }
    }

    delete = function (data, root = this.root) {

        const getSuccessor = function (currRoot) {
            currRoot = currRoot.right
            while (currRoot !== null && currRoot.left !== null) {
                currRoot = currRoot.left
            }
            return currRoot
        }

        if (root === null) {
            return root
        }
        if (data < root.data) {
            root.left = this.delete (data, root.left)
        } else if (data > root.data) {
            root.right = this.delete (data, root.right)
        } else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            } else {
                let succ = getSuccessor(root)
                root.data = succ.data
                root.right = this.delete(succ.data, root.right)
            }
        }
        return root
    }
}



const sortedArray = [1, 2, 3, 5]
const newTree = new Tree(sortedArray)
newTree.insert(5)
newTree.insert(4)
newTree.insert(6)
newTree.delete(5)
newTree.delete(4)
newTree.show()
// console.log(newTree.root)