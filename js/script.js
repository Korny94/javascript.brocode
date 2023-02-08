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

    // document.getElementById("p1").innerHTML = "Hello " + firstName; 
// Output in html: Hello karl magnus

// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// Output in html: You are 29 years old

// document.getElementById("p3").innerHTML = "It's " + isCool + " that you are cool"
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

        let submitUsername = document.querySelector("#submitUsername");

        document.getElementById("myText").oninput = function() {
            
            username = document.getElementById("myText").value;
            document.getElementById("myLabel").innerHTML = "Hello " + username;
            console.log(username);
        }

        submitUsername.onclick = function() {
            document.getElementById("myLabel").innerHTML = "Why would you hit submit when you see that it already said: Hello " + username + "? Are you stupid?";
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

    document.getElementById("backgroundColor").oninput = function() {

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

    document.getElementById("borderColor").oninput = function() {

        borderColor = document.getElementById("borderColor").value;
        document.getElementById("designLogo").style.borderColor = borderColor;
    }

    document.getElementById("inputLetter").oninput = function() {

        inputLetter = document.getElementById("inputLetter").value;
        document.getElementById("designLogo").innerHTML = inputLetter;
    }

    document.getElementById("letterColor").oninput = function() {

        letterColor = document.getElementById("letterColor").value;
        document.getElementById("designLogo").style.color = letterColor;
        borderColor = document.getElementById("borderColor").value;
        document.getElementById("designLogo").style.borderColor = borderColor;
    }


// CALCULATOR 

    // HTML

    /*
    <section id="calculator">
        <div id="screen">

        </div>
        <input type="text" id="inputScreen">
        <div id="numbers">
            <button type="button" id="clear">C</button>
            <button type="button" id="remainder">%</button>
            <button type="button" id="division">/</button>
            <button type="button" id="multiplication">x</button>
            <br>
            <button type="button" id="seven">7</button>
            <button type="button" id="eight">8</button>
            <button type="button" id="nine">9</button>
            <button type="button" id="subtraction">-</button>
            <br>
            <button type="button" id="four">4</button>
            <button type="button" id="five">5</button>
            <button type="button" id="six">6</button>
            <button type="button" id="addition">+</button>
            <br>
            <button type="button" id="one">1</button>
            <button type="button" id="two">2</button>
            <button type="button" id="three">3</button>
            <button type="button" id="comma">,</button>
            <br>
            <button type="button" id="zero">0</button>
            <button type="button" id="equals">=</button>
        </div>
    </section>
    */

    // JavaScript

    const one = 1;
    const two = 2;
    const three = 3;
    const four = 4;
    const five = 5;
    const six = 6;
    const seven = 7;
    const eight = 8;
    const nine = 9;
    const zero = 0; 
    const clear = "";
    const remainder = "%";
    const division = "/";
    const multiplication = "*";
    const subtraction = "-";
    const addition = "+";
    const comma = ".";
    const leftParenthesis = "(";
    const rightParenthesis = ")";
    let result;

    document.getElementById("one").onclick = function() {

       document.getElementById("screen").innerHTML += one;
    }

    document.getElementById("two").onclick = function() {

        document.getElementById("screen").innerHTML += two;
     }

     document.getElementById("three").onclick = function() {

        document.getElementById("screen").innerHTML += three;
     }

     document.getElementById("four").onclick = function() {

        document.getElementById("screen").innerHTML += four;
     }

     document.getElementById("five").onclick = function() {

        document.getElementById("screen").innerHTML += five;
     }

     document.getElementById("six").onclick = function() {

        document.getElementById("screen").innerHTML += six;
     }

     document.getElementById("seven").onclick = function() {

        document.getElementById("screen").innerHTML += seven;
     }

     document.getElementById("eight").onclick = function() {

        document.getElementById("screen").innerHTML += eight;
     }

     document.getElementById("nine").onclick = function() {

        document.getElementById("screen").innerHTML += nine;
     }

     document.getElementById("zero").onclick = function() {

        document.getElementById("screen").innerHTML += zero;
     }

     document.getElementById("comma").onclick = function() {

        document.getElementById("screen").innerHTML += comma;
     }

     document.getElementById("clear").onclick = function() {

        document.getElementById("screen").innerHTML = clear;
     }

     document.getElementById("remainder").onclick = function() {

        document.getElementById("screen").innerHTML += remainder;
     }

     document.getElementById("division").onclick = function() {

        document.getElementById("screen").innerHTML += division;
     }

     document.getElementById("multiplication").onclick = function() {

        document.getElementById("screen").innerHTML += multiplication;
     }

     document.getElementById("subtraction").onclick = function() {

        document.getElementById("screen").innerHTML += subtraction;
     }

     document.getElementById("addition").onclick = function() {

        document.getElementById("screen").innerHTML += addition;
     }

     document.getElementById("leftParenthesis").onclick = function() {

        document.getElementById("screen").innerHTML += leftParenthesis;
     }

     document.getElementById("rightParenthesis").onclick = function() {

        document.getElementById("screen").innerHTML += rightParenthesis;
     }

     document.getElementById("equals").onclick = function() {

        result = document.getElementById("screen").innerText;
        result = eval(result);
        result = result.toString();
        console.log(result.length)
        if (result.length > 7) {
            console.log("more")
            result = Number(result);
            document.getElementById("screen").innerHTML = result.toPrecision(7);
        } else {
            console.log("less")
            result = Number(result);
            document.getElementById("screen").innerHTML = result;
        }
     }



// Which animal are you?

     // HTML

    /*
    <section id="sectionWhichAnimal">
        <b>Which animal are you?</b>
        <br><br>
        <label for="whichAnimal" id="whichAnimal">Type in your name to find out:</label>
        <div>
            <img src="/images/haley.PNG" id="imgAnimalLion">
            <img src="/images/pappa.PNG" id="imgAnimalTiger">
            <img src="/images/victoria.PNG" id="imgAnimalPanda">
            <img src="/images/oskar.PNG" id="imgAnimalFrog">
            <img src="/images/mommo.PNG" id="imgAnimalCow">
            <img src="/images/hals.PNG" id="imgAnimalPig">
            <img src="/images/renate.PNG" id="imgAnimalKoala">
            <img src="/images/mamma.PNG" id="imgAnimalZebra">
            <img src="/images/question.PNG" id="imgAnimalQuestion">
        </div>
        <input type="text" name="whichAnimal" id="inputNameAnimal">
    </section>
    */


     // JavaScript

     let inputNameAnimal;

     document.getElementById("resetNameAnimal").onclick = function() {

        document.getElementById("imgAnimalLion").style.display = "none";
        document.getElementById("imgAnimalTiger").style.display = "none";
        document.getElementById("imgAnimalCow").style.display = "none";
        document.getElementById("imgAnimalPanda").style.display = "none";
        document.getElementById("imgAnimalFrog").style.display = "none";
        document.getElementById("imgAnimalPig").style.display = "none";
        document.getElementById("imgAnimalKoala").style.display = "none";
        document.getElementById("imgAnimalZebra").style.display = "none";
        document.getElementById("imgAnimalQuestion").style.display = "block";
        document.getElementById("whichAnimal").innerHTML = "Type in your name to find out:";
     }

     document.getElementById("submitNameAnimal").onclick = function() {

        inputNameAnimal = document.getElementById("inputNameAnimal").value;
        inputNameAnimal = inputNameAnimal.toLowerCase();
        if (inputNameAnimal === "haley" || inputNameAnimal === "isabel") {
            document.getElementById("imgAnimalLion").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Lion:";
        } else if (inputNameAnimal === "pappa" || inputNameAnimal === "karl" || inputNameAnimal === "karl magnus") {
            document.getElementById("imgAnimalTiger").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Tiger:";
        } else if (inputNameAnimal === "mommo" || inputNameAnimal === "inger" || inputNameAnimal === "inger lill" || inputNameAnimal === "inger-lill") {
            document.getElementById("imgAnimalCow").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Cow:";
        } else if (inputNameAnimal === "victoria" || inputNameAnimal === "tante" || inputNameAnimal === "tante victoria" || inputNameAnimal === "tante toria" || inputNameAnimal === "toria") {
            document.getElementById("imgAnimalPanda").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Panda:";
        } else if (inputNameAnimal === "oskar" || inputNameAnimal === "onkel" || inputNameAnimal === "onkel oskar" || inputNameAnimal === "osk" || inputNameAnimal === "oskis") {
            document.getElementById("imgAnimalFrog").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Frog:";
        } else if (inputNameAnimal === "hals" || inputNameAnimal === "onkel hals" || inputNameAnimal === "onkel hans" || inputNameAnimal === "hans" || inputNameAnimal === "hansebass") {
            document.getElementById("imgAnimalPig").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Pig:";
        } else if (inputNameAnimal === "renate" || inputNameAnimal === "tante renate" || inputNameAnimal === "per ole" || inputNameAnimal === "per" || inputNameAnimal === "ole") {
            document.getElementById("imgAnimalKoala").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Koala:";
        } else if (inputNameAnimal === "mamma" || inputNameAnimal === "elsa" || inputNameAnimal === "chibssa" || inputNameAnimal === "idossa" || inputNameAnimal === "finbak") {
            document.getElementById("imgAnimalZebra").style.display = "block";
            document.getElementById("imgAnimalQuestion").style.display = "none";
            document.getElementById("whichAnimal").innerHTML = "You are a Zebra:";
        } else {
            document.getElementById("imgAnimalLion").style.display = "none";
            document.getElementById("imgAnimalTiger").style.display = "none";
            document.getElementById("imgAnimalCow").style.display = "none";
            document.getElementById("imgAnimalPanda").style.display = "none";
            document.getElementById("imgAnimalFrog").style.display = "none";
            document.getElementById("imgAnimalPig").style.display = "none";
            document.getElementById("imgAnimalKoala").style.display = "none";
            document.getElementById("imgAnimalZebra").style.display = "none";
            document.getElementById("imgAnimalQuestion").style.display = "block";
            document.getElementById("whichAnimal").innerHTML = "Type in your name to find out:";
        }
     }





// Number Counter

    let counterButton = document.getElementById("counterButton");

    let counterLabel = document.getElementById("counterLabel");

    let counterInput = document.getElementById("counterInput");

    const resetButtonCount = document.querySelector("#resetButtonCount");

    resetButtonCount.onclick = function() {
        counterLabel.innerHTML = "Counter: ";
    }

    counterButton.onclick = function() {
        for (let i = 0; i <= counterInput.value; i++) {
            counterLabel.innerHTML += " " + i + " ";
        }
    }


// Click Counter 

let clickButton = document.getElementById("clickIncrease");

let clickLabel = document.getElementById("clickLabel");

const resetButton = document.querySelector("#resetButton");

const decreaseButton = document.querySelector("#clickDecrease");

let clicks = 0;

decreaseButton.onclick = function() {
    clicks -= 1;
    clickLabel.innerHTML = clicks;
}

resetButton.onclick = function() {
    clicks = 0;
    clickLabel.innerHTML = "0";
}

clickButton.onclick = function() {
    clicks += 1;
    clickLabel.innerHTML = clicks;
}


// LETTER COUNTER

let letterInput = document.getElementById("letterInput");

let letterLabel = document.getElementById("letterLabel");



letterInput.oninput = function() {
    letterValue = letterInput.value;
    letterWOSpaces = letterValue.replace(/ /g,"");
    letterLabel.innerHTML = letterWOSpaces.length;
}

let resetLetterCounter = document.getElementById("resetLetterCounter");

resetLetterCounter.onclick = function() {
    letterInput.value = "";
    letterLabel.innerHTML = "0";
}



// ZODIAC SIGN


let Aquarius = document.getElementById("birthday1");

let pisces = document.getElementById("birthday2");

let aries = document.getElementById("birthday3");

let taurus = document.getElementById("birthday4");

let gemini = document.getElementById("birthday5");

let cancer = document.getElementById("birthday6");

let leo = document.getElementById("birthday7");

let virgo = document.getElementById("birthday8");

let libra = document.getElementById("birthday9");

let scorpio = document.getElementById("birthday10");

let sagittarius = document.getElementById("birthday11");

let capricorn = document.getElementById("birthday12");

let zodiacResult = document.getElementById("zodiacResult");


Aquarius.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Aquarius"; 
}

pisces.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Pisces"; 
}

aries.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Aries"; 
}

taurus.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Taurus"; 
}

gemini.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Gemini"; 
}

cancer.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Cancer"; 
}

leo.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Leo"; 
}

virgo.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Virgo"; 
}

libra.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Libra"; 
}

scorpio.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Scorpio"; 
}

sagittarius.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Sagittarius"; 
}

capricorn.onclick = function() {
    zodiacResult.innerHTML = "Your Zodiac sign is: Capricorn"; 
}


// RANDOM NUMBER GENERATOR

let minNum = document.querySelector("#minInput");

let maxNum = document.querySelector("#maxInput");

const resetNum = document.querySelector("#resetNum");

const generateNum = document.querySelector("#generateNum");

const labelNum = document.querySelector("#labelNum");

generateNum.onclick = function() {
    minNumber = parseInt(minNum.value);
    maxNumber = parseInt(maxNum.value);
    labelNum.innerHTML = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    if (minNumber > maxNumber) {
        labelNum.innerHTML = Math.floor(Math.random() * (minNumber - maxNumber + 1) + maxNumber);
    }
}


// IS THE CHECKBOX CHECKED?

const checkedLabel = document.querySelector("#isItCheckedLabel");

const checkedBox = document.querySelector("#isItChecked");

const checkedBtn = document.querySelector("#isItCheckedBtn");

checkedBtn.onclick = function() {
    if (checkedBox.checked) {
        checkedLabel.innerHTML = "Yes, it is checked";
    } else {
        checkedLabel.innerHTML = "No, it is not checked";
    }
};



// WHICH RADIOBUTTON IS CHECKED?

const radioLabel1 = document.querySelector("#radioLabel1");

const radioLabel2 = document.querySelector("#radioLabel2");

const radioLabel3 = document.querySelector("#radioLabel3");

const radioBtn1 = document.querySelector("#radioOne");

const radioBtn2 = document.querySelector("#radioTwo");

const radioBtn3 = document.querySelector("#radioThree");

radioBtn1.onclick = function() {
    radioLabel1.innerHTML = "This one is checked!";
    radioLabel2.innerHTML = "";
    radioLabel3.innerHTML = "";
}

radioBtn2.onclick = function() {
    radioLabel2.innerHTML = "This one is checked!";
    radioLabel1.innerHTML = "";
    radioLabel3.innerHTML = "";
}

radioBtn3.onclick = function() {
    radioLabel3.innerHTML = "This one is checked!";
    radioLabel2.innerHTML = "";
    radioLabel1.innerHTML = "";
}



// HOW MANY ROWS & COLUMNS OF YOUR DESIRED SYMBOL DO YOU WANT?

let symbol = document.querySelector("#symbol");

let stringRows = document.querySelector("#numberRows");

let stringColumns = document.querySelector("#numberColumns");

let rowsAndCols = document.querySelector("#rowsAndColumns");



numberRows.oninput = function() {
    numberRows = stringRows.value
    numberColumns = stringColumns.value
    rowsAndCols.innerHTML = "";
    if (numberColumns == 0 || symbol.value == "") {
        rowsAndCols.innerHTML = "";
    }
    for (let i = 1; i <= numberRows; i++) {
        for (let j = 1; j <= numberColumns; j++) {
            rowsAndCols.innerHTML += j;
        }
        rowsAndCols.innerHTML += "<br>";
    }
}



numberColumns.oninput = function() {
    numberRows = stringRows.value
    numberColumns = stringColumns.value
    rowsAndCols.innerHTML = "";
    if (numberRows == 0 || symbol.value == "") {
        rowsAndCols.innerHTML = "";
    }
    for (let i = 1; i <= numberRows; i++) {
        for (let j = 1; j <= numberColumns; j++) {
            rowsAndCols.innerHTML += symbol.value;
        }
        rowsAndCols.innerHTML += "<br>";
    }
}

symbol.oninput = function() {
    numberRows = stringRows.value
    numberColumns = stringColumns.value
    rowsAndCols.innerHTML = "";
    if (numberRows == 0 || numberColumns == 0) {
        rowsAndCols.innerHTML = "";
    }
    for (let i = 1; i <= numberRows; i++) {
        for (let j = 1; j <= numberColumns; j++) {
            rowsAndCols.innerHTML += symbol.value;
        }
        rowsAndCols.innerHTML += "<br>";
    }
}



// NUMBER GUESSING GAME 

const randomNumber = Math.floor(Math.random() * 10 + 1);

const stringGuess = document.querySelector("#numberGuess");

const submitGuess = document.querySelector("#submitGuess");

const answerGuess = document.querySelector("#answerGuess");

const newGame = document.querySelector("#newGame");

let guesses = 0;


submitGuess.onclick = function() {
    numberGuess = parseInt(stringGuess.value);
    console.log(randomNumber);
    guesses += 1;
    if (randomNumber == numberGuess) {
        answerGuess.innerHTML = "Congratulations! You guessed correctly! It took you " + guesses + " guesses!"
    } else if (numberGuess > randomNumber) {
        answerGuess.innerHTML = "Your guess is too big!"
    } else if (numberGuess < randomNumber) {
        answerGuess.innerHTML = "Your guess is too small!"
    }
}

newGame.onclick = function() {
    location.reload();
}



// TEMPERATURE CONVERSION

const inputStringTemp = document.querySelector("#inputTemp");

const toCelsius = document.querySelector("#toCelsius");

const toFahrenheit = document.querySelector("#toFahrenheit");

const degrees = document.querySelector("#degrees");


toCelsius.onclick = function() {
    inputNumTemp = parseFloat(inputStringTemp.value);
    celsius = (inputNumTemp - 32) * .5556;
    degrees.innerHTML = "Temperature: " +  celsius.toLocaleString(undefined, {style: "unit", unit: "celsius"})
}

toFahrenheit.onclick = function() {
    inputNumTemp = parseFloat(inputStringTemp.value);
    fahrenheit = inputNumTemp * 1.8 + 32;
    degrees.innerHTML = "Temperature: " + fahrenheit.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})
}



// TOGGLE HEARTS

    // IMAGE

const whiteHeart = document.querySelector("#whiteHeart");

const blackHeart = document.querySelector("#blackHeart");

whiteHeart.onclick = function() {
    this.classList.toggle("noHeart");
}

    // ICON

const iconHeart = document.querySelector("#iconHeart i");


iconHeart.addEventListener("click", function() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
});



// LOADING & DISCO 

let discoDiv = document.querySelector("#disco");

const loadingDiv = document.querySelector("#loading");

const resetDisco = document.querySelector("#resetDisco");

let clicks1 = 0;

resetDisco.addEventListener("click", function() {
    discoDiv.style.backgroundColor = "";
})


discoDiv.addEventListener("click", function(event) {
    clicks1 += 1;
    loadingDiv.style.display = "block";
    setTimeout(function() {
        discoDiv.style.backgroundColor = "red";
        loadingDiv.style.display = "none";

        function disco() {
            if (discoDiv.style.backgroundColor = "red") {
                setTimeout(function() {
                    discoDiv.style.backgroundColor = "blue";
                    repeat();
                }, 500)
            } else if (discoDiv.style.backgroundColor = "blue") {
                discoDiv.style.backgroundColor = "red"
            }
        }
        
        function repeat() {
            setTimeout(function() {
                disco()
            }, 500)
        }

        repeat();

        disco();



    }, 2000)
    
});

