"use strict";

// vertex === node
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  // add a node and then return it.
  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      throw new Error("Invalid Node");
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error("__Error__ Invalid Vertex", vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
  size() {
    return this._adjacencyList.size;
  }
  getVerteces() {
    return [...this._adjacencyList.keys()];
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
