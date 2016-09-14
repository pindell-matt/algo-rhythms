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
let result = bestStations(statesNeeded, stations);
let answer = new Set(['k1', 'k2', 'k3', 'k5'])
console.log(result, answer)


function intersect_safe(a, b) {
  let ai = 0;
  let bi = 0;
  let result = [];
  while( ai < a.length && bi < b.length ){
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(ai);
       ai++;
       bi++;
     }
  }
  return result;
}
