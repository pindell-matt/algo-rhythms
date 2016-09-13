'use strict';
const _ = require('lodash');

let stations = new Map();
stations.set('k1', new Set(['id', 'nv', 'ut']));
stations.set('k2', new Set(['id', 'nv', 'ut']));
stations.set('k2', new Set(['wa', 'id', 'mt']));
stations.set('k3', new Set(['or', 'nv', 'ca']));
stations.set('k4', new Set(['nv', 'ut']));
stations.set('k5', new Set(['ca', 'az']));


function bestStations(statesNeeded, stations) {
  let final = new Set();
  return final
}

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
var result = bestStations(statesNeeded, stations);
var answer = new Set(['k1', 'k2', 'k3', 'k5'])
console.log(result, answer)
