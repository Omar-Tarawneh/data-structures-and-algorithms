# Graph Implementation

Implement Graphs and related methods. Implement getEdges function that returns true or false for whether a specified path through the graph is possible. Implement depthFirst function to do preorder traversal on a graph.

## Challenge

Implement your own graph, should be represented as an adjacency list

- addVertex(): adds a new vertex to the graph, takes in the value of that vertex and returns the added vertex
- addDirectedEdge(): adds a new edge between two nodes in the graph, include ability to have a "weight", takes in the two nodes to be connected by the edge
- getVerteces(): returns all of the nodes in the graph as a collection (set, list, or similar)
- getNeighbors(): returns collection of edges connected to the given node, takes in a given node, includes the weight of the connection in the returned collection
- size(): returns the total number of nodes in the graph

## Approach & Efficiency

- addVertex(): Time complexity -> O(1) adding directly to the adjacency
- addDirectedEdge(): Time complexity -> O(1) adding the value to the vertex directly using the built in method for Map
- getVerteces(): Time complexity -> O(1) retrived using the built in method for the Map
- getNeighbors(): Time complexity -> O(1)
- size():Time complexity -> O(1) check the size of the Map equal to number of nodes.
