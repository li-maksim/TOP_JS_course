class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.nodes = null
    }
    append = function() {
        this.nodes = new Node()
    }
}

const list = new LinkedList()
list.append('Lol')

console.log(list)