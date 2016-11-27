

var chain = 2 + 2 + 5 - 2 * 3 - 3 / 3;


var status = "ready";


var calc = [2, "add", 2, "add", 5, "minus", 2, "times", 3, "minus", 3, "divide", 3];

var operations = {

    add: function(a, b) {
        return a + b;
    },

    minus: function(a, b) {
        return a - b;
    },

    times: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

var two = 2;

var five = 5;

//--------------------------------------
function compute(num1, operator, num2) { // computes 2 numbers

    // status = "no";

    // REMOVES operator & both numbers used
    calc.shift(calc[0]);
    calc.shift(calc[1]);
    calc.shift(calc[2]);

    // ADDS result to FRONT of "calc" array
    calc.unshift(operations[operator](num1, num2));

    // status = "ready";
}
//---------------------------------------

if (calc.length == 3) {

    console.log(operations[calc[1]](calc[0], calc[2]));
}


else if (calc.length > 3) {

    while (calc.length > 1) {

        // if (status == "ready") {

            // PASSES two numbers & operator to be computed
            compute(calc[0], calc[1], calc[2]);
        // }
    }
}

console.log(calc);
