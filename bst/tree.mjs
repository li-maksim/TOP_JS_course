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

    preOrder = function (cb, root = this.root) {
        if (cb == undefined) {
            throw new Error('Callback function is required!')
        }
        let queue = []
        if (root == null) {
            return
        } else {
            cb(root)
            if (root.left) this.preOrder(cb, root.left)
            if (root.right) queue.push(root.right)
            while (queue.length > 0) {
                this.preOrder(cb, queue[0])
                queue.shift()
            }
        }
    }

    postOrder = function (cb, root = this.root) {
        if (cb == undefined) {
            throw new Error('Callback function is required!')
        }
        if (root == null) {
            return
        } else {
            if (root.left) this.postOrder(cb, root.left)
            if (root.right) this.postOrder(cb, root.right)
            cb(root)
        }
    }

    height = function (root = this.root) {
        if (root == null) {
            return 0
        } else {
            let leftLength = this.height(root.left)
            let rightLength = this.height(root.right)
            return Math.max(leftLength, rightLength) + 1
        }
    }

    depth = function (node, root = this.root) {
        let depth = null
        if (root == null) {
            return depth = null
        } else {
            if (node === root.data) {
                return depth = 1
            } else if (node < root.data) {
                return depth + this.depth(node, root.left)
            } else {
                return depth + this.depth(node, root.right)
            }
        }
    }

    isBalanced = function () {
        if (this.height(this.root.left) === this.height(this.root.right)) {
            return true
        } else {
            let max = Math.max(this.height(this.root.left), this.height(this.root.right))
            let min = Math.min(this.height(this.root.left), this.height(this.root.right))
            console.log(max)
            console.log(min)
            if (max - min > 1) {
                return false
            } else {
                return true
            }
        }
    }

    rebalance = function () {
        if (!this.isBalanced()) {
            let arr = []
            const createArray = function(arg) {
                arr.push(arg.data)
            }
            this.inOrder(createArray)
            this.root = buildTree(arr)
        }
    }
}

const sortedArray = [1, 2, 3, 4, 5]
const newTree = new Tree(sortedArray)
newTree.insert(6)
newTree.insert(7)
newTree.insert(8)
// newTree.delete(4)
console.log(newTree.rebalance())
prettyPrint(newTree.root)
// console.log(newTree.find(3))
// console.log(newTree.root)