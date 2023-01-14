// BroCode YouTube JavaScript Full Course 2023



// COMMENTS

    // This is a single line comment

    /*
        This is a
        multiline comment
    */


// Console.log()

    console.log("This message will be logged in console");
    // Output: This message will be logged in console


// VARIABLES var let const

    // Var, don't use

    // let, use when the variable will change
        let colorPreferance = "blue";

    // const, use when the variable wont change
        const speedOfLight = 299792458;

        // EXAMPLE circumference of circle

            const pi = 3.14159;

            let radius = 3;

            let circumference;

            // radius = window.prompt("Enter the radius of the circle");

            radius = Number(radius);

            circumference = 2 * pi * radius;

            console.log("The circumference of the circle is:", circumference);
            // Output first prompt input then console.log: The circumference of the circle is: 18.85


// NUMBER 4, 14, 20
    let age = 28; 

    // STRING ""
    let firstName = "karl";

    // BOOLEAN true; false;
    let isCool = true;

    console.log("name:", firstName, "age:", age);
    // Output: name: karl age: 28

        // EDIT VARIABLE
    
            // NUMBER
                age = 29;

                    // OR

                age = age + 1;

                    // OR

                age += 1;

                console.log(age);
                // Output: 29

            // STRING
                firstName = firstName + " magnus";

                console.log(firstName);
                // Output: karl magnus

            // BOOLEAN
                let isWeird = false;

                isWeird = true;

                console.log(isWeird);
                // Output: true


// EDIT HTML BY ID

document.getElementById("p1").innerHTML = "Hello " + firstName; 
// Output in html: Hello karl magnus

document.getElementById("p2").innerHTML = "You are " + age + " years old";
// Output in html: You are 29 years old

document.getElementById("p3").innerHTML = "It's " + isCool + " that you are cool"
// Output in html: It's true that you are cool



// OPERATORS (PEMDAS SEQUENCE)
/*
Operator    Description                 Example     Result

===         equal to (type & value)	    3 === 3	    true ("3" === 3 FALSE) 

==          equal to (only value)       "3" == 3    true

!==	        not equal to (type & value) 3 !== 3	    false ("3" !== 3 TRUE)

!=          not equal to (only value)   "3" != 2    true

>	        greater than	            6 > 4	    true

>=	        greater than or equal to	5 >= 4	    true

<	        less than	                5 < 4	    false

<=	        less than or equal to	    3 <= 4	    true

+           addition                    3 + 4       7

-           subtraction                 4 - 3       1

*           multiplication              3 * 4       12

/           division                    4 / 2       2

%           remainder                   5 % 2       1

**          expoentiation               2 ** 3      8

++          increment                   ++2         3

--          decrement                   --2         1

&&          logical "and" operator      &&
            var selectedNumber = 30;

            if (selectedNumber >= 10 && selectedNumber <= 50) {
                console.log("The selected number is within range");
            }

!           logical "not" operator      !
            var isCool = false;

            if (!isCool)                EQUIVALENT TO: if (isCool === false); OR 
            // Is Not Cool                             if (isCool !== true);

||          logical "or" operator       ||
            var isWeekend = saturday;

            if ((isWeekend = saturday) || (isWeekend = sunday)) {
                console.log("It's the weekend");
            }
*/



// INPUT IN WINDOW ALERT MESSAGE POP UP

/*
    window.alert("Hello");
    
    // Output in pop-up: Hello


            // User input

    let username = window.prompt("What is your name?");
    console.log(username);

    // Output first in popup window then in console log: 
    // What is you name?
    // (In console) What user input ex: Korny
*/


// USER INPUT IN HTML

/*
    In index.html:

        <label id="myLabel">Enter your name:</label><br>
        <input type="text" id="myText"><br>
        <button type="submit" id="submit">submit</button>
*/

    // In script.js:
            
        let username;

        document.getElementById("submit").onclick = function() {
            
            username = document.getElementById("myText").value;
            document.getElementById("myLabel").innerHTML = "Hello " + username;
            console.log(username);
        }



// TYPE CONVERSION

    // STRING TO NUMBER Number(string/var);

        let headCount = "4";

        console.log(typeof headCount);
        // Output: string

        headCount = Number(headCount);

        console.log(typeof headCount);
        // Output: number

        headCount += 1;

        console.log("Instead of 4 + 1 being 41, it will now be", headCount);


        let finger = "pinky";

        finger = Number(finger);

        console.log(finger, typeof finger);
        // Output (Not a Number): NaN number

    // NUMBER TO STRING String(number/var);

        numberedString = 6;

        numberedString = String(numberedString);

        console.log(numberedString, typeof numberedString);
        // Output: 6 string 


    // STRING TO BOOLEAN Boolean(value/var);

        stringBoolean = "";

        stringBoolean = Boolean(stringBoolean);

        console.log(stringBoolean, typeof stringBoolean)
        // Output (false because empty): False boolean 

        stringBoolean = "fruit";

        stringBoolean = Boolean(stringBoolean);

        console.log(stringBoolean, typeof stringBoolean)
        // Output (true because not empty): true boolean



// MATH.doSomething(var / value)

        Math.round(3.1);
        // Round a number: Output: 3; 

        Math.floor(3.9);
        // Round a number down: Output: 3;
        
        Math.ceil(3.1);
        // Round a number up: Output: 4;

        Math.pow(3, 2);
        // 3 to the power of 2: Output: 9;

        Math.sqrt(9);
        // Square root a number: Output: 3;

        Math.abs(-5);
        // A numbers absolute value (distance from number to 0): Output: 5;

        Math.max(3.9, 8.4, 14);
        // Find the maximum number: Output: 14;

        Math.min(3.9, 8.4, 14);
        // Find the minimum number: Output: 3.9;

        x = Math.PI;
        // x = 3.14159...


// USING MATH. TO CALCULATE HYPOTHENUS

/*  CONSOLE

    let a = window.prompt("Input a of triangle");

    a = Math.pow(a, 2);

    console.log("a =", a);

    let b = window.prompt("Input b of triangle"); 

    b = Math.pow(b, 2);

    console.log("b =", b);

    let c = Math.sqrt(a + b);

    console.log("The hypothenus c, is", c);
*/

// HTML

/*
        let username;

        document.getElementById("submit").onclick = function() {
            
            username = document.getElementById("myText").value;
            document.getElementById("myLabel").innerHTML = "Hello " + username;
            console.log(username);
        }
*/
/*
    <section id="hypothenus">
        <label id="inputA">Input a:</label>
        <input id="textInputA" type="text">
        <button type="submit" id="submitA">Submit</button>  <br> <br>
        <label id="inputB">Input b:</label>
        <input id="textInputB" type="text">
        <button type="submit" id="submitB">Submit</button>  <br> <br>
        <button type="submit" id="calculateC">Calculate c</button> <br> <br>
        <label id="resultC">Result: </label>
    </section>
*/
    
    let textInputA;

    let textInputB;

    let textInputC;

    document.getElementById("calculateC").onclick = function() {

        textInputA = document.getElementById("textInputA").value;
        textInputA = Number(textInputA);
        textInputA = Math.pow(textInputA, 2);
        textInputB = document.getElementById("textInputB").value;
        textInputB = Number(textInputB);
        textInputB = Math.pow(textInputB, 2);
        textInputC = Number(textInputC);
        textInputC = Math.sqrt(textInputA + textInputB);
        document.getElementById("resultC").innerHTML += textInputC;
    }

    // OR

/*
    document.getElementById("submitA").onclick = function() {

        textInputA = document.getElementById("textInputA").value;
        textInputA = Number(textInputA);
        console.log("a =", textInputA);
    }

    document.getElementById("submitB").onclick = function() {

        textInputB = document.getElementById("textInputB").value;
        textInputB = Number(textInputB);
        console.log("b =", textInputB);
    }

    document.getElementById("calculateC").onclick = function() {

        textInputA = Math.pow(textInputA, 2);
        textInputB = Math.pow(textInputB, 2);
        textInputC = Number(textInputC);
        textInputC = Math.sqrt(textInputA + textInputB);
        document.getElementById("resultC").innerHTML = "Result: " + textInputC;
        console.log("The hypothenus c =", textInputC);
    }
*/


// WHICH COLOR DO YOU WANT THE CIRCLE TO BE?

    // HTML

        /*
        <p>Which color do you want the circle to be?</p>
        <div id="radioButtons">
            <label for="blue">Blue</label>
            <input type="radio" value="blue" name="desiredColor" id="radioBlue">
            <br><br>
            <label for="red">Red</label>
            <input type="radio" name="desiredColor" value="red" id="radioRed">
            <br><br>
            <label for="green">Green</label>
            <input type="radio" name="desiredColor" value="green" id="radioGreen">
        </div>
        <div id="desiredColor">
        </div>
        */

    // JavaScript

        document.getElementById("radioBlue").onclick = function() {

            document.getElementById("desiredColor").style.background = "blue";
        }

        document.getElementById("radioRed").onclick = function() {

            document.getElementById("desiredColor").style.background = "red";
        }

        document.getElementById("radioGreen").onclick = function() {

            document.getElementById("desiredColor").style.background = "green";
        }



// TRUE OR FALSE GAME

    // HTML

        /*
        <p>True or False</p>
        <p>The sky is blue</p>
        <label for="blueSky">True</label>
        <input type="radio" name="blueSky" id="blueSkyTrue" value="true">
        <label for="blueSky">False</label>
        <input type="radio" name="blueSky" id="blueSkyFalse" value="false">
        <p id="blueSkyResult">Result:</p>
        <br>
        <p>The grass is red</p>
        <label for="redGrass">True</label>
        <input type="radio" name="redGrass" id="redGrassTrue" value="true">
        <label for="redGrass">False</label>
        <input type="radio" name="redGrass" id="redGrassFalse" value="false">
        <p id="redGrassResult">Result:</p>
        */

    // JAVASCRIPT

    document.getElementById("blueSkyTrue").onclick = function() {

        document.getElementById("correctSky").style.display = "inline-block";
        document.getElementById("incorrectSky").style.display = "none";

    }

    document.getElementById("blueSkyFalse").onclick = function() {

        document.getElementById("incorrectSky").style.display = "inline-block";
        document.getElementById("correctSky").style.display = "none";
    }

    document.getElementById("redGrassTrue").onclick = function() {

        document.getElementById("correctGrass").style.display = "inline-block";
        document.getElementById("incorrectGrass").style.display = "none";
    }

    document.getElementById("redGrassFalse").onclick = function() {

        document.getElementById("incorrectGrass").style.display = "inline-block";
        document.getElementById("correctGrass").style.display = "none";
    }


// DESIGN YOUR OWN LOGO

    // HTML

    /*
    <section id="logoDesign">
        <div id="radioButtons">
            <b>Design your own logo</b>
            <p>Choose a background color:</p>
            <input type="color" id="backgroundColor">
            <button type="submit" id="submitBGColor">Submit</button>
            <br>
            <p>Choose a border:</p>
            <label for="borderType">Solid</label>
            <input type="radio" name="borderType" id="borderTypeSolid" value="solid" checked="checked">
            <br>
            <label for="borderType">Dashed</label>
            <input type="radio" name="borderType" id="borderTypeDashed" value="dashed">
            <br>
            <label for="borderType">Dotted</label>
            <input type="radio" name="borderType" id="borderTypeDotted" value="dotted">
            <br>
            <p>Choose a border color:</p>
            <input type="color" id="borderColor">
            <button type="submit" id="submitBorderColor">Submit</button>
            <p>Choose a letter:</p>
            <input type="text" id="inputLetter">
            <button type="submit" id="submitInputLetter">Submit</button>
            <p>Choose a letter color:</p>
            <input type="color" id="letterColor">
            <button type="submit" id="submitLetterColor">Submit</button>
        </div>
        <div id="designLogo">
        </div>
    </section>
    */

    // JavaScript

    let backgroundColor;

    let borderColor;

    let inputLetter;

    let letterColor;

    document.getElementById("submitBGColor").onclick = function() {

        backgroundColor = document.getElementById("backgroundColor").value;
        document.getElementById("designLogo").style.background = backgroundColor;
    }

    document.getElementById("borderTypeSolid").onclick = function() {

        document.getElementById("designLogo").style.borderStyle = "solid";
        document.getElementById("designLogo").style.borderWidth = "10px";
    }

    document.getElementById("borderTypeDashed").onclick = function() {

        document.getElementById("designLogo").style.borderStyle = "dashed";
        document.getElementById("designLogo").style.borderWidth = "10px";
    }

    document.getElementById("borderTypeDotted").onclick = function() {

        document.getElementById("designLogo").style.borderStyle = "dotted";
        document.getElementById("designLogo").style.borderWidth = "10px";
    }

    document.getElementById("submitBorderColor").onclick = function() {

        borderColor = document.getElementById("borderColor").value;
        document.getElementById("designLogo").style.borderColor = borderColor;
    }

    document.getElementById("submitInputLetter").onclick = function() {

        inputLetter = document.getElementById("inputLetter").value;
        document.getElementById("designLogo").innerHTML = inputLetter;
    }

    document.getElementById("submitLetterColor").onclick = function() {

        letterColor = document.getElementById("letterColor").value;
        document.getElementById("designLogo").style.color = letterColor;
        borderColor = document.getElementById("borderColor").value;
        document.getElementById("designLogo").style.borderColor = borderColor;
    }


// CALCULATOR 

    // HTML