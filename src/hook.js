export default class Count {
    constructor () {
        this.count = 2
    }

    increase () {
        this.count++
    }

    decrease () {
        this.count--
    }

    double () {
        this.count *= this.count
    }

    half () {
        this.count /= this.count
    }
}