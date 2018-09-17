// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  

  // if (typeof obj === 'string' || typeof obj === 'number' || typeof obj ){
  //   return '"' 
  // }

  if(obj == null) return 'null';


  if(Array.isArray(obj)){

    return '[' + obj.map(function(val) {

      return stringifyJSON(val);
    
    }).join(',') + ']';

  }else if(obj.constructor === Object){

    for (var key in obj){
      if(typeof obj[key] === 'function' || obj[key] === undefined){
        delete obj[key];
      } 
    } 

    return '{' + Object.keys(obj).map(function(key) {
    
      return stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 

      }).join(',') + '}'; 

  }else {

    if(typeof obj === 'string'){

      return '"' + obj + '"';

      } else return '' + obj;

  }
  
  
};
