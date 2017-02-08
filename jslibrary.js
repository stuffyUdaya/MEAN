// Look at _.filter when it is invoked.
//
//     How many arguments was _.filter passed?
                // 2 arguments.

//     What are those arguments?

              // one was array and other was function

//     If you had to classify them, what names would you give each of them?

                //_.filter(arr,callback);

//     Given your answers (especially #3), place those names into your filter as parameters.


var _ = {
   map: function() {
     //code here;
   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function(arr, callback) {
     var newarr=[];
     for(var i =0; i<arr.length; i++){
       var num = arr[i];
       var y = callback(num);
           if (y == true) {
             newarr.push(arr[i]);
           }
          //  console.log(newarr);
          //  console.log(y);
     }
     return newarr;
     
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!

console.log(_.filter([1,2,3,4,6], function(num){ return num % 2 == 0; }));
