const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const insert = (node, data) => {
      if (!node) return new Node(data);
      if (data < node.data) node.left = insert(node.left, data);
      else if (data > node.data) node.right = insert(node.right, data);
      return node;
    };
    this.rootNode = insert(this.rootNode, data);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    const search = (node, data) => {
      if (!node || node.data === data) return node;
      return data < node.data ? search(node.left, data) : search(node.right, data);
    };
    return search(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;
      if (data < node.data) node.left = removeNode(node.left, data);
      else if (data > node.data) node.right = removeNode(node.right, data);
      else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        let minNode = node.right;
        while (minNode.left) minNode = minNode.left;
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
      }
      return node;
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let node = this.rootNode;
    while (node?.left) node = node.left;
    return node?.data || null;
  }

  max() {
    let node = this.rootNode;
    while (node?.right) node = node.right;
    return node?.data || null;
  }
}


module.exports = {
  BinarySearchTree
};