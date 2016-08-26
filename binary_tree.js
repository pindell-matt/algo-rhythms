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
}

const tree = new BinaryTree
tree.insert(8)
console.log("First:", tree)
tree.insert(4)
console.log("Second:", tree)
tree.insert(12)
console.log("Third:", tree)
tree.insert(6)
console.log("Fourth:", tree)
