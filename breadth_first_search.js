'use strict'
const _ = require('lodash')

class Graph {
  constructor() {
    this.content = new Map()
  }

  add(key, value) {
    this.content.set(key, value)
  }

  search(name) {
    let search_queue = this.content.get(name),
        searched = []

    while (search_queue.length !== 0) {
      let person = search_queue.shift()
      if (!_.includes(searched, person)) {
        if (_.endsWith(person,'m')) {
          console.log(person + " is a mango seller!")
          return true
        } else {
          let new_connections = this.content.get(person)
          search_queue.push(...new_connections)
          searched.push(person)
        }
      }
    }
    return false
  }
}

let graph = new Graph
graph.add("you", ["alice", "bob", "claire"])
graph.add('you', ["alice", "bob", "claire"])
graph.add("bob", ["anuj", "peggy"])
graph.add("alice", ["peggy"])
graph.add("claire", ["tom", "jonny"])
graph.add("anuj", [])
graph.add("peggy", [])
graph.add("tom", [])
graph.add("jonny", [])

graph.search("you")
