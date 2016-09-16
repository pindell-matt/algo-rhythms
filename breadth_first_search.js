'use strict';

const _ = require('lodash');

class Graph {
  constructor() {
    this.content = new Map();
  }

  add(key, value) {
    this.content.set(key, value);
  }

  search(name) {
    let searchQueue = this.content.get(name),
        searched = [];
    while (searchQueue.length !== 0) {
      let person = searchQueue.shift();
      if (!_.includes(searched, person)) {
        if (checkIfSeller(person)) {
          console.log(`${person} is a seller!`);
          return true;
        } else {
          let newConnections = this.content.get(person);
          searchQueue.push(...newConnections);
          searched.push(person);
        }
      }
    }
    return false;
  }
}

function checkIfSeller(name) {
  // can be changed to whatever indicates 'seller' status
  if (_.endsWith(name, 'm')) return true;
}

let graph = new Graph();
graph.add("you", ["alice", "bob", "claire"]);
graph.add("bob", ["anuj", "peggy"]);
graph.add("alice", ["peggy"]);
graph.add("claire", ["tom"]);
graph.add("anuj", []);
graph.add("peggy", []);
graph.add("tom", []);

graph.search("you");
