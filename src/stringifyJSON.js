// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	
	if (typeof(obj) == "string"){
		return '"' + obj + '"';
	};

	if(obj == null){
		return String(obj);
	};


	if (Array.isArray(obj)){
		var blankArray  =[];

		if (obj.length == 0){
			return "[]";
		}
		else{
			obj.forEach(function(element){	
				blankArray.push(stringifyJSON(element));
			});
		};
		return '[' + blankArray + ']'

	};

	if(typeof(obj) == "object"){
		var blankObject=[];


		if(Object.keys(obj)[0]==undefined){
			return "{}";
		}
		else{
			for(key in obj){
				if(typeof(obj[key])==="function" || key==="undefined"){
					continue;
				}
			blankObject.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
			}
		};
		return '{' + blankObject + '}'
	};
 	return String(obj);

};
