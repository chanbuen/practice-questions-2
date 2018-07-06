//TRAVERSE BST
// function inOrderTraverse(tree, array) {
//   if (tree) {
//     inOrderTraverse(tree.left, array);
//     array.push(tree.value);
//     inOrderTraverse(tree.right, array);
//   }
//   console.log(array);
//   return array;
// }

// function preOrderTraverse(tree, array) {
//   if (tree) {
//     array.push(tree.value);
//     preOrderTraverse(tree.left, array);
//     preOrderTraverse(tree.right, array);
//   }
//   console.log(array);
//   return array;
// }

// function postOrderTraverse(tree, array) {
//   if (tree) {
//     postOrderTraverse(tree.left, array);
//     postOrderTraverse(tree.right, array);
//     array.push(tree.value);
//   }
//   console.log(array);
//   return array;
// }

// // Do not edit the lines below.
// exports.inOrderTraverse = inOrderTraverse;
// exports.preOrderTraverse = preOrderTraverse;
// exports.postOrderTraverse = postOrderTraverse;


class Node {
  constructor(val) {
    this.value = val;
    this.left = this.right = null
  }
}

let tree = new Node(10)
tree.left = new Node(5)
tree.right = new Node(15)
tree.left.left = new Node(2)
tree.left.right = new Node(5)
tree.right.right = new Node(22)
tree.left.left.left = new Node(1)

function inOrderTraverse(tree, arr){
	console.log(tree)
	let leftNode = tree.left
	let rightNode = tree.right
	if (leftNode) {
		arr = inOrderTraverse(leftNode, arr)
	} 
	if (tree) {
		arr.push(tree.value)
	}
	if (rightNode) {
		arr = inOrderTraverse(rightNode, arr)
	} 

	return arr
}

// inOrderTraverse(tree, [])


function preOrderTraverse(tree, arr){
	let leftNode = tree.left
	let rightNode = tree.right
	if (tree) {
		arr.push(tree.value)
	}

	if (leftNode){
		arr = preOrderTraverse(leftNode, arr)	
	}
	
	if (rightNode) {
		arr = preOrderTraverse(rightNode, arr)
	}
	
	return arr
}

// preOrderTraverse(tree, [])

function postOrderTraverse(tree, arr){
	let leftNode = tree.left
	let rightNode = tree.right
	
	if (leftNode) {
		arr = postOrderTraverse(leftNode, arr)	
	}
	
	if (rightNode) {
		arr = postOrderTraverse(rightNode, arr)	
	}
		
	if (tree) {
		arr.push(tree.value)	
	}
	
	return arr
}

// postOrderTraverse(tree, [])
//Find the maximum difference in an unsorted array with the index of max greater than min. array cant be sorted
// function findMinMax(arr){
//   let greatestDiff = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       let diff =  arr[j+i] - arr[i]
//       console.log('arr[i]', arr[i])
//       console.log('arr[j]', arr[j])
//       console.log('diff', diff)
//       greatestDiff = (diff > greatestDiff) ? diff : greatestDiff
//     }
//   }
//   return greatestDiff
// }

// findMinMax([1,5,3,8,10])

