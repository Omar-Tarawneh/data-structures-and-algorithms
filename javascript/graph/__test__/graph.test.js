"use strict";
const { Graph, Vertex, Edge } = require("../graph.js");

describe("Graph Data Structure testing", () => {
  const graph = new Graph();
  beforeAll(() => {
    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const seven = new Vertex(7);
    const three = new Vertex(3);
    const eight = new Vertex(8);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(three);
    graph.addVertex(eight);

    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, six);
    graph.addDirectedEdge(ten, three);
    graph.addDirectedEdge(ten, seven);
    graph.addDirectedEdge(two, seven);
    graph.addDirectedEdge(six, seven);
    graph.addDirectedEdge(six, eight);
    graph.addDirectedEdge(three, eight);
    graph.addDirectedEdge(eight, seven);
  });
  test("Node can be successfully added to the graph", () => {
    const node = new Vertex(1);
    graph.addVertex(node);
    expect(graph.size()).toEqual(7);
  });
  test("An edge can be successfully added to the graph", () => {
    const vertex = graph.getVerteces()[0];
    expect(graph.getNeighbors(vertex)[0]).toBeInstanceOf(Edge);
  });
  test("A collection of all nodes can be properly retrieved from the graph", () => {
    expect(graph.getVerteces()).toEqual([
      new Vertex(10),
      new Vertex(2),
      new Vertex(6),
      new Vertex(7),
      new Vertex(3),
      new Vertex(8),
      new Vertex(1),
    ]);
  });
  test("All appropriate neighbors can be retrieved from the graph", () => {
    // vertex 6 has two neighbors 7 and 8
    const vertex = graph.getVerteces()[2];
    expect(graph.getNeighbors(vertex)).toEqual([
      { vertex: { value: 7 }, weight: 0 },
      { vertex: { value: 8 }, weight: 0 },
    ]);
  });
  test("Neighbors are returned with the weight between nodes included", () => {
    // vertex 6 has two neighbors 7 and 8
    // weight is included and it's equal to 0
    const vertex = graph.getVerteces()[2];
    expect(graph.getNeighbors(vertex)).toEqual([
      { vertex: { value: 7 }, weight: 0 },
      { vertex: { value: 8 }, weight: 0 },
    ]);
  });
  test("The proper size is returned, representing the number of nodes in the graph", () => {
    expect(graph.size()).toEqual(7);
  });
  test("A graph with only one node and edge can be properly returned", () => {
    const graphTwo = new Graph();
    const vertex = new Vertex(1);
    graphTwo.addVertex(vertex);
    expect(graphTwo.getVerteces()).toEqual([{ value: 1 }]);
  });
  test("An empty graph properly returns null", () => {
    const empty = new Graph();
    expect(empty.getVerteces()).toEqual([]);
    expect(empty.size()).toEqual(0);
  });
});
