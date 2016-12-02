window.onload = function() {


// GLOBAL ARRAYS ----------------------------------------------------

//individuals
var empty = [];

//totals
var calc = [];

//-------------------------------------------------------------------

//REFERENCE VARIABLES -----------------------------------------------

// includes divide symbol after 'TOP Numbers' code.
var ops = ["+", "-", "x"];

var dot = '.';

var dotReg = /\./;

//------------------------------------------------------------------

// TOP Numbers-----------------------------------------------
var theNode = document.getElementById('divide').innerHTML;

// adds divide symbol to 'ops' array
ops.push(theNode);

// var textnode = document.createTextNode(theNode);
//
// document.getElementById('topSpan').appendChild(textnode);4

//------------------------------------------------------------

                     // NUMBERS 1 - 9

var oneNine = document.getElementsByClassName('nonZero');

//ATTACHES EVENT LISTENER TO EACH NUMBER
for (var i = 0; i < oneNine.length; i++) {

    oneNine[i].addEventListener('click', function() {

        //WHEN BUTTON IS CLICKED...

        //variables ------------------------------------------
        var topOp = "no";

        var textNode = document.createTextNode(this.innerHTML);

        var textNode2 = document.createTextNode(this.innerHTML);
        //-----------------------------------------------------

        // pushes # to 'empty' array
        empty.push(this.innerHTML);

        // TOP-DISPLAY FUNCTIONALITY---------------------------

        // checks for op in top-display
        for (var e = 0; e < ops.length; e++) {

            if(ops[e] == document.getElementById('topSpan').innerHTML) {

                topOp = "yes";
            }
        }

        // CLEARS and ADDS # to top-display IF OP in top-display
        if (topOp == 'yes') {
            // clears top-display
            document.getElementById('topSpan').innerHTML = '';
            // adds # to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }

        else {
            // adds # to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }
        //-----------------------------------------------------------

        // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

        // adds # to bottom-display
        document.getElementById('bottomSpan').appendChild(textNode2);

        //-----------------------------------------------------------

    }); // END OF CURRENT ELEMENT EVENT LISTENER FUNCTION

} // END OF EVENT LISTENER ATTACHING LOOP

//-------------------------------------------------------------------------

                    // DOT BUTTON

//ATTACHES EVENT LISTENER DOT BUTTON
document.getElementById('dot').addEventListener('click', function() {

    //WHEN BUTTON IS CLICKED...

    //variables ------------------------------------------
    var topOp = "no";

    var textNode = document.createTextNode(this.innerHTML);

    var textNode2 = document.createTextNode(this.innerHTML);
    //-----------------------------------------------------

    // TOP-DISPLAY FUNCTIONALITY---------------------------

    // checks for op in top-display
    for (var u = 0; u < ops.length; u++) {

        if(ops[u] == document.getElementById('topSpan').innerHTML) {

            topOp = "yes";
        }
    }

    // if dot NOT in 'empty' array...
    if (empty.join('').match(dotReg) === null) {

        // pushes dot to 'empty' array
        empty.push(dot);

        // CLEARS and ADDS dot to top-display IF OP in top-display
        if (topOp == 'yes') {
            // clears top-display
            document.getElementById('topSpan').innerHTML = '';
            // adds dot to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }

        else {
            // adds dot to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }
        //-------------------------------------------------------

        // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

        // adds # to bottom-display
        document.getElementById('bottomSpan').appendChild(textNode2);

        //-----------------------------------------------------------

    } // ENDS "if dot NOT in 'empty' array" CONDITIONAL

}); // END of 'click' FUNCTIONALITY
//-------------------------------------------------------------------------


                    // OPERATOR BUTTONS

//ATTACHES EVENT LISTENER OP BUTTONS
var opButtons = document.getElementsByClassName('operator');

//ATTACHES EVENT LISTENER TO EACH NUMBER
for (var r = 0; r < opButtons.length; r++) {

    opButtons[r].addEventListener('click', function() {

        //WHEN BUTTON IS CLICKED...

        //variables ------------------------------------------

        var textNode = document.createTextNode(this.innerHTML);

        var textNode2 = document.createTextNode(this.innerHTML);
        //-----------------------------------------------------

        // checks for valid number in 'empty' array
        if (empty.length > 1 || empty.length == 1 && empty[0] !== dot) {

            // pushes number currently in top-display to 'calc' array
            calc.push(Number(empty.join('')));

            // pushes correct OP symbol to 'calc' array
            switch(this.innerHTML) {

                case '+':
                    calc.push('add');
                    break;
                case '-':
                    calc.push('minus');
                    break;
                case 'x':
                    calc.push('times');
                    break;
                case theNode:
                    calc.push('divide');
            };

            // TOP-DISPLAY FUNCTIONALITY -----------------------------

            // adds OP to top-display

            // clears top-display
            document.getElementById('topSpan').innerHTML = '';
            // adds OP to top-display
            document.getElementById('topSpan').appendChild(textNode);

            //-----------------------------------------------------------

            // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

            // adds OP to bottom-display
            document.getElementById('bottomSpan').appendChild(textNode2);

            //-----------------------------------------------------------

            // empties 'empty' array for next input's use
            empty = [];

        } // END OF 'if "empty" is NOT empty' FUNCTIONALITY

    }); // ENDS CLICK FUNCTIONALITY

} // END OF EVENT LISTENER ATTACHING LOOP


                    // ZERO BUTTON

//ATTACHES EVENT LISTENER to ZERO BUTTON
var zeroButton = document.getElementById('zero').addEventListener('click', function() {

    // WHEN BUTTON IS CLICKED...

    //variables ------------------------------------------

    var textNode = document.createTextNode(this.innerHTML);

    var textNode2 = document.createTextNode(this.innerHTML);
    //-----------------------------------------------------

    if (empty.length > 0) {

        // pushes Zero to 'empty' array
        empty.push(this.innerHTML);

        // TOP-DISPLAY FUNCTIONALITY -----------------------------

        // adds Zero to top-display
        document.getElementById('topSpan').appendChild(textNode);

        //-----------------------------------------------------------

        // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

        // adds Zero to bottom-display
        document.getElementById('bottomSpan').appendChild(textNode2);

        //-----------------------------------------------------------

    } // END of 'if "empty" array is not empty' FUNCTIONALITY

}); // END OF 'CLICK' FUNCTIONALITY


var chain = 2 + 2 + 5 - 2 * 3 - 3 / 3;


var status = 'ready';


// var calc = [2, "add", 2, "add", 5, "minus", 2, "times", 3, "minus", 3, "divide",  3];

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






};
