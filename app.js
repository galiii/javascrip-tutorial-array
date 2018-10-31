/*********************************************/
/************ Array tutorial *****************/
/********************************************/



function printJS(val = '') {
    console.log(val);
}

function go() {
    console.log('hello world');
}


var myLst = ['apple', 1, go];
var strLst = ['apple', 'banas', 'orange', 'mango', 'another val', 'last val'];

printJS(); //newline
printJS(myLst);// output : [ 'apple', 1, [Function: go] ]
printJS(typeof myLst[2]); // output : function
myLst[2](); //output : hello world

printJS('\n'); //new line

/* Methods in arrays */
printJS(strLst + '\n');

// shift() - will return the first value of the array and pull it out of the list
printJS('************************ Shift **************************************');
printJS(strLst.shift()); //output : apple
printJS('**********************  after Shift  ********************************');
printJS(strLst + '\n'); //output: 


printJS('******************** POP *******************************************');
// pop() - will return the last value of the array and pull it out of the list
printJS(strLst.pop());
printJS('***************** after POP ******************************************');
printJS(strLst + '\n');  //output : [ 'banas', 'orange', 'mango', 'another val' ]



/*
 forEach - we past a function and it automatically put 2 arguments in that function 
 value index = for each item 
*/
printJS('******************** array : forEach loop *****************************');
strLst.forEach(function (value, index) {
    console.log(value, index);
});


