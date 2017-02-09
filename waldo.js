var list = ["Alice", "Bob", "Waldo", "Winston"];// The second argument/parameter is expected to be a function

function findWaldo(list, found) {
  list.forEach (function (him, call){
    if (him === "Waldo"){
  found(call)
  }
 });
}
/*
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}
*/

function actionWhenFound(x) {

  console.log("Found him at " +  x + "!");
}

findWaldo(list, actionWhenFound);