var words = ["ground", "control", "to", "major", "tom"];
function mapCustomized(arr, call){
  var output = [];
  for (i = 0; i < arr.length; i++) {
    output.push(call(arr[i]));
  }
  return output;
}
function findLength(word){

  return word.length;
}
console.log(mapCustomized(words, findLength));
