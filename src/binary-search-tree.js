const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addInside(this._root, data);

    function addInside (node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInside(this._root, data);

    function searchInside (node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchInside(node.left, data);
      } else {
        return searchInside(node.right, data);
      }
    }
  }

  find(data) {
    return getSearchInside(this._root, data);

    function getSearchInside (node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return getSearchInside(node.left, data);
      } else {
        return getSearchInside(node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};