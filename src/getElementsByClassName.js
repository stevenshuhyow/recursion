// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className){
	var blankArray=[];
	var nodes =document.body.childNodes; 
	console.log(nodes)
	nodes.forEach(function(element){
		console.log(element);
		if(element.nodeType ===1 && element.classList.contains(className)){
			blankArray.push(element);
		}
	})
	return blankArray;
}
