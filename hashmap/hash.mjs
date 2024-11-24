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
        console.log(index)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        } else {
            if (this.buckets[index] === null) {
                this.buckets[index] = [key, value]
            } else if (this.buckets[index][0] == key && this.buckets[index][1] != value) {
                this.buckets[index] = [key, value]
            } else if (this.buckets[index][0] != key && this.buckets[index][1] != value) {
                if (index < this.buckets.length) {
                    this.set(key, value, index + 1)
                } else {
                    this.set(key, value, 0)
                }
            }
        }
    }
}

const hashMap = new HashMap(1, 16)
// hashMap.hash('Alex')
hashMap.hash('Alxe')
// hashMap.set('Alex', 3)
// hashMap.set('Axel', 33)
// hashMap.set('Axel', 33)
// hashMap.set('Axle', 55)
// hashMap.set('Axel', 35)
// console.log(hashMap.buckets)