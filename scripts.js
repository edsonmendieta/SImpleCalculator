window.onload = function() {


// GLOBAL ARRAYS ----------------------------------------------------

//individuals
var empty = [];

//totals
var calc = [];

//-------------------------------------------------------------------

//REFERENCE VARIABLES -----------------------------------------------

// includes divide symbol after 'TOP Numbers' code.
var ops = ["+", "-", "x", theNode];

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

        // DIGIT LIMIT --------------------------------------
        if (document.getElementById('topSpan').innerHTML.length >= 10 || document.getElementById('bottomSpan').innerHTML.length >= 28) {

            document.getElementById('topSpan').innerHTML = '';

            document.getElementById('bottomSpan').innerHTML = 'Digit Limit Met';

            empty = [];
            calc = [];

        }
        //---------------------------------------------------

        else{

            if (document.getElementById('bottomSpan').innerHTML == 'Digit Limit Met') {

                document.getElementById('bottomSpan').innerHTML = '';
            }

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
        }
    }); // END OF CURRENT ELEMENT EVENT LISTENER FUNCTION

} // END OF EVENT LISTENER ATTACHING LOOP

//-------------------------------------------------------------------------

                    // DOT BUTTON

//ATTACHES EVENT LISTENER DOT BUTTON
document.getElementById('dot').addEventListener('click', function() {

    //WHEN BUTTON IS CLICKED...

    // DIGIT LIMIT --------------------------------------
    if (document.getElementById('topSpan').innerHTML.length >= 10 || document.getElementById('bottomSpan').innerHTML.length >= 28) {

        document.getElementById('topSpan').innerHTML = '';

        document.getElementById('bottomSpan').innerHTML = 'Digit Limit Met';

        empty = [];
        calc = [];

    }
    //---------------------------------------------------

    else{

        if (document.getElementById('bottomSpan').innerHTML == 'Digit Limit Met') {

            document.getElementById('bottomSpan').innerHTML = '';
        }

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
    }
}); // END of 'click' FUNCTIONALITY
//-------------------------------------------------------------------------


                    // OPERATOR BUTTONS

//ATTACHES EVENT LISTENER OP BUTTONS
var opButtons = document.getElementsByClassName('operator');

//ATTACHES EVENT LISTENER TO EACH OP BUTTON
for (var r = 0; r < opButtons.length; r++) {

    opButtons[r].addEventListener('click', function() {

        //WHEN BUTTON IS CLICKED...


        // DIGIT LIMIT --------------------------------------
        if (document.getElementById('bottomSpan').innerHTML.length >= 28) {

            document.getElementById('topSpan').innerHTML = '';

            document.getElementById('bottomSpan').innerHTML = 'Digit Limit Met';

            empty = [];
            calc = [];

        }
        //---------------------------------------------------

        else {
            //variables ------------------------------------------

            var textNode = document.createTextNode(this.innerHTML);

            var textNode2 = document.createTextNode(this.innerHTML);

            var bottom = document.getElementById('bottomSpan');
        //-----------------------------------------------------

            // checks for valid number in 'empty' array
            if (empty.length > 1 || empty.length == 1 && empty[0] !== dot || (empty.length === 0 && bottom.innerHTML.length > 0)) {

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

                // Checks for EQUALS symbol
                if (document.getElementById('bottomSpan').innerHTML.match('=') !== null) {

                    var totalNode = document.createTextNode(empty);

                    document.getElementById('bottomSpan').innerHTML = '';

                    document.getElementById('bottomSpan').appendChild(totalNode);
                    document.getElementById('bottomSpan').appendChild(textNode2);
                }

                else {
                // adds OP to bottom-display
                document.getElementById('bottomSpan').appendChild(textNode2);
                }

                //-----------------------------------------------------------

                // empties 'empty' array for next input's use
                empty = [];

            } // END OF 'if "empty" is NOT empty' FUNCTIONALITY
        } // END of 'else'
    }); // ENDS CLICK FUNCTIONALITY

} // END OF EVENT LISTENER ATTACHING LOOP
//-----------------------------------------------------------------------

                    // ZERO BUTTON

//ATTACHES EVENT LISTENER to ZERO BUTTON
var zeroButton = document.getElementById('zero').addEventListener('click', function() {

    // WHEN BUTTON IS CLICKED...

    //variables ---------------------------------------------

    var textNode = document.createTextNode(this.innerHTML);

    var textNode2 = document.createTextNode(this.innerHTML);

    var bottom = document.getElementById('bottomSpan');
    //-------------------------------------------------------

    if (empty.length > 0 || (empty.length === 0 && bottom.innerHTML.length > 0)) {

        // DIGIT LIMIT --------------------------------------
        if (document.getElementById('topSpan').innerHTML.length >= 10 || document.getElementById('bottomSpan').innerHTML.length >= 28) {

            document.getElementById('topSpan').innerHTML = '';

            document.getElementById('bottomSpan').innerHTML = 'Digit Limit Met';

            empty = [];
            calc = [];

        }
        //---------------------------------------------------

        else {

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
        } // Ends 'else'
    } // END of 'if "empty" array is not empty' FUNCTIONALITY

}); // END OF 'CLICK' FUNCTIONALITY
//------------------------------------------------------------------------


                    // EQUALS BUTTON

//ATTACHES EVENT LISTENER to EQUALS BUTTON
document.getElementById('equals').addEventListener('click', function() {

    // BUTTON IS CLICKED...

        // variables --------------------------------------------------
        var bottomP = document.getElementById('bottomSpan').innerHTML;

        var opStatus = "no";

        //-------------------------------------------------------------



        //checking if 'bottomP' ends with an operator ------------
        for (var t = 0; t < ops.length; t++) {

            if(bottomP[bottomP.length - 1] == ops[t]) {

                opStatus = "yes";
            }
        }
        //---------------------------------------------------------

        // IF bottomP doesn't end with operator, and has no equals symbol...
        if(opStatus == "no" &&
        document.getElementById('bottomSpan').innerHTML.match('=') === null) {

            calc.push(Number(empty.join('')));

            console.log(empty);

            // VARIABLES -------------------------------------------

            var textNode = document.createTextNode(this.innerHTML);

            var total = [];

            var status = 'ready';

            //------------------------------------------------------
        empty = [];

            // REFERENCE OBJECT ------------------------------------

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
            //-----------------------------------------------------


            // 'COMPUTE' FUNCTION -------------------------------------------

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
            //--------------------------------------------------------------

            if (calc.length == 3) {

                // FINAL TOTAL
                total.push((operations[calc[1]](calc[0], calc[2])).toFixed(2));

                var decZeros = /\.00/;

                if (String(total[0]).match(decZeros)) {

                    total = [];
                    total.push((operations[calc[1]](calc[0], calc[2])));

                }
            }


            else if (calc.length > 3) {

                while (calc.length > 1) {

                    // if (status == "ready") {

                        // PASSES two numbers & operator to be computed
                        compute(calc[0], calc[1], calc[2]);
                    // }
                }

                console.log(calc[0]);
                // FINAL TOTAL
                if (String(calc[0]).match(dotReg)) {

                    total.push(calc[0].toFixed(2));
                }

                else {

                    total.push(calc[0]);
                }
            }

            // FINAL TOTAL
            // if (String(calc[0]).match('.')) {
            //
            //     total.push(calc[0].toFixed(2));
            // }
            //
            // else {
            //
            //     total.push(calc[0]);
            // }


            // TOP-DISPLAY FUNCTIONALITY -----------------------------

            var totalNode = document.createTextNode(total[0]);
            var totalNode2 = document.createTextNode(total[0]);

            // clears top-display
            document.getElementById('topSpan').innerHTML = '';
            // adds total to top-display
            document.getElementById('topSpan').appendChild(totalNode);

            //-----------------------------------------------------------

            // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

            // adds equals symbol & total to bottom-display
            document.getElementById('bottomSpan').appendChild(textNode);
            document.getElementById('bottomSpan').appendChild(totalNode2);

            //-----------------------------------------------------------

            // DIGIT LIMIT --------------------------------------
            if (document.getElementById('topSpan').innerHTML.length >= 10 || document.getElementById('bottomSpan').innerHTML.length >= 28) {

                document.getElementById('topSpan').innerHTML = '';

                document.getElementById('bottomSpan').innerHTML = 'Digit Limit Met';

                empty = [];
                calc = [];

            }
            //---------------------------------------------------

            // console.log(empty);
            empty = [];
            // console.log(empty);
            empty.push(total[0]);
            // console.log(empty);
            // console.log(calc);
            calc = [];
            // console.log(calc);

        }


}); // END OF 'CLICK' FUNCTIONALITY




//-------------------------------------------------------------------------



                    // CE BUTTON

document.getElementById('CE').addEventListener('click', function() {

    // WHEN BUTTON IS CLICKED...

    // variables ----------------------------------

    var top = document.getElementById('topSpan');

    var bottom = document.getElementById('bottomSpan');

    var opStatus = "no";

    //---------------------------------------------

    // Checks for OP in top-display -------------------

    if (top.innerHTML.length > 0) {

        for (var i = 0; i < ops.length; i++) {

            if (top.innerHTML[0] == ops[i]) {

                opStatus = "yes";
            }
        }
    }
    //-------------------------------------------------

    if (bottom.innerHTML == 'Digit Limit Met') {

        bottom.innerHTML = '';
    }

    else if (bottom.innerHTML.match('=') !== null) {

        top.innerHTML = '';
        bottom.innerHTML = '';

        empty = [];
        calc = [];
    }

    else if (empty.length > 0 || opStatus == "yes" || (top.innerHTML.length === 0 && bottom.innerHTML.length > 0)) {

        if (top.innerHTML.length > 0) {

            top.removeChild(top.childNodes[top.childNodes.length - 1]);
        }

        bottom.removeChild(bottom.childNodes[bottom.childNodes.length - 1]);

        if (empty.length > 0) {

            empty.pop();
            console.log(empty);
        }
    } // Last 'else if'

}); // END of 'CLICK' functionality

//-----------------------------------------------------------------------


                    // AC BUTTON

document.getElementById('AC').addEventListener('click', function() {

    // WHEN BUTTON IS CLICKED...

    // variables -------------------------------

    var top = document.getElementById('topSpan');

    var bottom = document.getElementById('bottomSpan');

    //------------------------------------------

    top.innerHTML = '';
    bottom.innerHTML = '';

    empty = [];
    calc = [];

}); // END of 'CLICK' functionality




}; // END ALL
