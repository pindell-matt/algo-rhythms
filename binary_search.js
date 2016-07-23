class BinarySearch {
  constructor(array) {
    this.array = array
  }

  search(item) {
    if (this.array.includes(item)) {
      low = 0
      high = this.array.length

      while low <= high {
        mid = low + high
        guess = this.array[mid]

        if guess === item { return mid }
        if guess > item {
          high = mid--
        } else {
          low = mid++
        }
      }
    }
  }
}
