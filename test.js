// // console.log('I am running from node');
// // var myunknown = 'hello';
// // console.log(typeof(myunknown));
//
// // console.log(a);
// // var a = "hello";
//
// console.log(typeof(b));
// var b = "happy";
// console.log(typeof(b));


// var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15;                       // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
//                                   // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);



// var arr = [3, 6];
// // arr[234] = "hi";
// // console.log(arr.length); // 235
// // console.log( arr[34] ); // undefined
// arr.length = 3;
// arr[234] = "hi";
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var x in ninja) {
  if (ninja.hasOwnProperty(x)) {
    console.log(x);
    console.log(ninja[x]);
  }
}
