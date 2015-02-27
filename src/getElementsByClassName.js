var getElementsByClassName = function(className) {
  var results = [];

  var allNodeChecker = function(node) {
    for(var i = 0; i < node.childNodes.length; i++ ) {
    	var nodeChild = node.childNodes[i]
 	    if (nodeChild.nodeType == document.ELEMENT_NODE && node.childNodes[i].classList.contains(className)) {
    	  results.push(nodeChild);
    	}
      	allNodeChecker(nodeChild);
    }
  };
  allNodeChecker(document);
  return results;
};

