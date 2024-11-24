export class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

export class LinkedList {
    constructor() {
        this.nodes = null
    }

    head = function() {
        return this.nodes
    }

    tail = function(node = this.nodes) {
        if (node === null) {
            return node
        } else {
            if (node.next === null) {
                return node
            } else {
                return this.tail(node.next)
            }
        }
    }

    append = function(value = null, next = null) {
        if (this.nodes === null) {
            this.nodes = new Node(value, next)
        } else {
            const lastNode = this.tail()
            lastNode.next = new Node(value, next)
        }
    }

    prepend = function(value = null, next = null) {
        if (this.nodes === null) {
            this.nodes = new Node(value, next)
        } else {
            this.nodes = new Node(value, this.nodes)
        }
    }

    size = function(node = this.nodes) {
        let count = 0
        if (this.nodes === null) {
            return 0
        } else {
            if (node.next === null) {
                return 1
            } else {
                count = this.size(node.next) + 1
                return count
            }
        }
    }

    at = function(idx, node = this.nodes) {
        if (idx > this.size()) {
            return 'Error'
        } else {
            if (idx === 0) {
                return node
            } else {
                return this.at(idx - 1, node.next)
            }
        }
    }

    pop = function(node = this.nodes) {
        if (this.size() === 0) {
            return
        } else if (this.size() === 1) {
            this.nodes = null
        } else {
            if (node.next.next === null) {
                node.next = null
            } else {
                this.pop(node.next)
            }
        }
    }

    contains = function(val, idx = this.size(), node = this.nodes) {
        if (idx === 0) {
            return false
        } else {
            if (node.value === val) {
                return true
            } else {
                return this.contains(val, idx - 1, node.next)
            }
        }
    }

    find = function(val, idx = 0, node = this.nodes) {
        if (idx >= this.size()) {
            return null
        } else {
            if (node.value === val) {
                return idx
            } else {
                return this.find(val, idx + 1, node.next)
            }
        }
    }

    toString = function(node = this.nodes) {
        let result = ''
        if (this.size() === 0) {
            return null
        } else {
            if (node.next === null) {
                return result + `(${node.value}) -> null`
            } else {
                result = result + `(${node.value}) -> `
                return result + this.toString(node.next)
            }
        }
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.at(2))