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

const log = function (arg) {
    console.log(arg.data)
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
            root.left = this.delete(data, root.left)
        } else if (data > root.data) {
            root.right = this.delete(data, root.right)
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

    find = function (data, root = this.root) {
        if (root === null) {
            return root
        } else {
            if (data === root.data) {
                return root
            } else if (data < root.data) {
                return this.find(data, root.left)
            } else {
                return this.find(data, root.right)
            }
        }
        return root
    }

    levelOrder = function (cb, root = this.root) {
        if (cb == undefined) {
            throw new Error('Callback function is required!')
        }
        let queue = []
        if (root === null) {
            return
        } else {
            queue.push(root)
            while (queue.length > 0) {
                let node = queue.shift()
                cb(node)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
        }
    }

    inOrder = function (cb, root = this.root) {
        if (cb == undefined) {
            throw new Error('Callback function is required!')
        }
        if (root == null) {
            return
        } else {
            if (root.left) this.inOrder(cb, root.left)
            cb(root)
            if (root.right) this.inOrder(cb, root.right)
        }
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7]
const newTree = new Tree(sortedArray)
newTree.insert(6.5)
// newTree.insert(7)
// newTree.delete(5)
// newTree.delete(4)
// prettyPrint(newTree.root)
newTree.inOrder(log)
// console.log(newTree.find(3))
// console.log(newTree.root)