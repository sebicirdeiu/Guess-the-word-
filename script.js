const conceptList = [
    { concept: "object", hint: "A collection of key-value pairs" },
    { concept: "string", hint: "A sequence of characters" },
    { concept: "number", hint: "A numeric value" },
    { concept: "function", hint: "A block of code that can be invoked" },
    { concept: "if", hint: "A conditional statement" },
    { concept: "DOM", hint: "Document Object Model - representation of web page elements" },
    { concept: "method", hint: "A function that belongs to an object" },
    { concept: "async", hint: "Asynchronous programming with Promises or async/await" },
    { concept: "module", hint: "A self-contained unit of code that can be imported/exported" },
    { concept: "map", hint: "A data structure that stores key-value pairs" },
    { concept: "set", hint: "A collection of unique values" },
    { concept: "spread", hint: "A syntax for expanding elements in an array or object" },
    { concept: "rest", hint: "A syntax for gathering elements into an array" },
    { concept: "promise", hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "closure", hint: "A function that has access to variables from an outer scope" },
    { concept: "bind", hint: "A method for setting the value of 'this' in a function" },
    { concept: "mutable", hint: "A value that can be changed after it is created" },
    { concept: "JSON", hint: "JavaScript Object Notation - a data interchange format" },
    { concept: "AJAX", hint: "Asynchronous JavaScript and XML - a technique for making asynchronous server requests" },
    { concept: "Promise", hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "then", hint: "A method used to attach callbacks to a Promise" },
    { concept: "try", hint: "A block of code that is used to handle exceptions" },
    { concept: "catch", hint: "A block of code that is executed when an exception is thrown" },
    { concept: "promise",hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "closure", hint: "A function that has access to variables from an outer scope" },
    { concept: "bind", hint: "A method for setting the value of 'this' in a function" },
    { concept: "strategy", hint: "A design pattern that allows interchangeable algorithms to be selected during runtime" },
    { concept: "factory", hint: "A design pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created" },
    
];


let playRound = () => {
    const randomIndex = Math.floor(Math.random()*conceptList.length);
    const randomPair = conceptList[randomIndex];
    const concept = randomPair.concept;
    const letters = randomPair.concept.split("");
    const word = document.querySelector(".word");
    word.innerHTML = ""
    const hint = randomPair.hint;
    const html_hint = document.querySelector(".hint");
    html_hint.innerHTML = `<strong>Hint:</strong> ${hint}`;
    let remainingGuesses = 3;
    const remainingTriesHtml = document.querySelector(".remaining_guesses");
    remainingTriesHtml.innerHTML = `<strong>Remaining Guesses:</strong> ${remainingGuesses}`;
    const wrongLetters_html = document.querySelector(".letters");
    wrongLetters_html.innerHTML = `<strong>Wrong Letters:</strong>`;
    let wrongLettersArr = [];

    for (let i=0; i< concept.length; i++) {
        const letterSpace = document.createElement("div");
        letterSpace.classList.add("letter");
        word.appendChild(letterSpace);
    }

    const checkForLetter = (event) => {
        const keyPressed = event.key;

        let letterIndex = letters.indexOf(keyPressed);

        if(letters.includes(keyPressed)){
            word.childNodes[(letterIndex)].innerHTML = keyPressed;
        }
        else {
            remainingGuesses--;
            wrongLettersArr.push(keyPressed);
            remainingTriesHtml.innerHTML = `<strong>Remaining Guesses:</strong> ${remainingGuesses}`;
            wrongLetters_html.innerHTML = `<strong>Wrong Letters:</strong> ${wrongLettersArr}`;
        }

        if (remainingGuesses === 0) {
           
            alert("Game over! You lost.");
            window.removeEventListener("keydown", checkForLetter); 
            
        } else if (word.textContent === concept) {
            
            alert("Correct!");
            window.removeEventListener("keydown", checkForLetter); 
        }
    }

    window.addEventListener("keydown", checkForLetter);
}

const newRound = () => {
    let button = document.querySelector(".reset");
    button.addEventListener("click", playRound)
};
playRound();
newRound();