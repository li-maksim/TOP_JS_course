class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.nodes = null
    }

    tail = function(node = this.nodes) {
        if (node.next == null) {
            return node
        } else {
            return this.tail(node.next)
        }
    }

    append = function(value = null, next = null) {
        if (this.nodes == null) {
            this.nodes = new Node(value, next)
        } else {
            const lastNode = this.tail()
            lastNode.next = new Node(value, next)
        }
    }
}

const list = new LinkedList()
list.append('Lol')
list.append('Kek')
list.append('Cheburek')
list.append('Pie')


// console.log(list)
console.log(list.tail())