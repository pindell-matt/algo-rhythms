'use strict'
const _ = require('lodash')

class BinaryTree {
  constructor(data) {
    this.data = data || null
  }

  leftBranch() {
    this.left = this.left || new BinaryTree
  }

  rightBranch() {
    this.right = this.right || new BinaryTree
  }

  insert(data) {
    if (this.data === null) {
      this.data = data
    } else if (this.data > data) {
      this.leftBranch()
      this.left.insert(data)
    } else {
      this.rightBranch()
      this.right.insert(data)
    }
  }

  include(data) {
    if (this.data === data) {
      return true
    } else if (this.data > data && this.left !== undefined) {
      return this.left.include(data)
    } else if (this.data < data && this.right !== undefined) {
      return this.right.include(data)
    } else {
      return false
    }
  }
}

const tree = new BinaryTree
tree.insert(8)
tree.insert(4)
tree.insert(12)
tree.insert(6)
console.log("Has 4?", tree.include(4))
console.log("Has 5?", tree.include(5))
console.log("Has 12?", tree.include(12))
console.log("Has 13?", tree.include(15))
