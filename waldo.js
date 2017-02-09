var list = ["Alice", "Bob", "Waldo", "Winston"];// The second argument/parameter is expected to be a function

function findWaldo(list, found) {
  list.forEach (function (him, call){
    if (him === "Waldo"){
  found(call)
  }
 });
}

function actionWhenFound(x) {

  console.log("Found him at " +  x + "!");
}

findWaldo(list, actionWhenFound);