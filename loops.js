function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  array.push( "I am ${i} strange loop" )  
  }
 return array
}
function whileLoop(n) {
  while (n >0) {
    console.log(n)
    n--
  }
  return "done"
}
function doWhileLoop(array){
<<<<<<< HEAD
  
  do {
    console.log("Number of items in array:" + array.length)
    console.log(array.shift())
    
  } while ( array.length > 0 && maybeTrue())
  return array
=======
  do {
    console.log(array.shift())
  } while ( array.lenth > 0 && maybeTrue())
>>>>>>> 902d67050329f643c4095fd3f2ba429b22060c23
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}


<<<<<<< HEAD
=======
}
>>>>>>> 902d67050329f643c4095fd3f2ba429b22060c23
