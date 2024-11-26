class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor
        this.capacity = capacity
        this.buckets = []
        for (let i = 0; i < capacity; i++) {
            this.buckets[i] = null
        }
    }

    hash = function (key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
        }

        return hashCode
    }

    set = function (key, value, index = this.hash(key)) {
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        } else {
            if (this.buckets[index] == null) {
                this.buckets[index] = [key, value]
            } else if (this.buckets[index][0] == key) {
                this.buckets[index] = [key, value]
            } else {
                if (index < this.capacity) {
                    this.set(key, value, index + 1)
                } else {
                    this.set(key, value, 0)
                }
            }
        }
    }

    checkFwd = function (key, index = this.hash(key)) {
        if (index > this.capacity) {
            return false
        } else {
            if (this.buckets[index] && this.buckets[index][0] === key) {
                return index
            } else {
                return this.checkFwd(key, index + 1)
            }
        }
    }

    checkBwd = function (key, index = this.hash(key)) {
        if (index < 0) {
            return false
        } else {
            if (this.buckets[index] && this.buckets[index][0] === key) {
                return index
            } else {
                return this.checkBwd(key, index - 1)
            }
        }
    }

    get = function (key) {
        if (this.buckets[this.hash(key)] == null) {
            return null
        } else if (this.buckets[this.hash(key)][0] === key) {
            return this.buckets[this.hash(key)][1]
        } else if (this.checkFwd(key) !== false) {
            return this.buckets[this.checkFwd(key)][1]
        } else if (this.checkBwd(key) !== false) {
            return this.buckets[this.Bwd(key)][1]
        } else {
            return null
        }
    }

    has = function (key) {

        if (this.buckets[this.hash(key)] && this.buckets[this.hash(key)][0] === key) {
            return true
        } else {
            if (this.checkFwd(key) || this.checkBwd(key)) {
                return true
            } else {
                return false
            }
        }
    }

    remove = function (key) {
        if (this.buckets[this.hash(key)] == null) {
            return false
        } else {
            if (this.checkFwd(key) !== false) {
                this.buckets[this.checkFwd(key)] = null
            } else if (this.checkBwd(key) !== false) {
                this.buckets[this.checkBwd(key)] = null
            } else {
                return false
            }
        }
    }

    length = function () {
        let total = 0
        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] != null) {
                total++
            }
        }
        return total
    }

    clear = function () {
        this.buckets = []
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = null
        }    }
}

const hashMap = new HashMap(1, 16)
// hashMap.hash('Alex')
// hashMap.hash('Alxe')
hashMap.set('Alex', 3)
hashMap.set('Axel', 33)
hashMap.set('Axel', 33)
hashMap.set('Axle', 55)
hashMap.set('Axel', 35)
console.log(hashMap.clear())
console.log(hashMap.length())
// console.log(hashMap.get('Axle'))
