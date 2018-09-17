// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var nodeList = [];


    if(document.body.classList.contains(className)){
      nodeList.push(document.body);
    }

  var findClass = function (curNode) {
  
    if (curNode.hasChildNodes()){
      var children = curNode.childNodes;

      children.forEach((child) => {
        if (child.hasChildNodes()){
          findClass(child);      
        }

        if(child.classList){
          if(child.classList.contains(className)){
              nodeList.push(child);        
          }
        }
      }); // end of forEach
  
    } // end of if HasChildNodes


  }; // end of findclass function
  
  findClass(document.body);


  return nodeList;
};
