const conceptList = [
    { concept: "array", hint: "A collection of values" },
    { concept: "object", hint: "A collection of key-value pairs" },
    { concept: "string", hint: "A sequence of characters" },
    { concept: "number", hint: "A numeric value" },
    { concept: "boolean", hint: "A logical value (true or false)" },
    { concept: "function", hint: "A block of code that can be invoked" },
    { concept: "variable", hint: "A named container for a value" },
    { concept: "loop", hint: "A construct for repeating code" },
    { concept: "if", hint: "A conditional statement" },
    { concept: "else", hint: "An alternative branch of a conditional statement" },
    { concept: "DOM", hint: "Document Object Model - representation of web page elements" },
    { concept: "event", hint: "An action or occurrence in the browser" },
    { concept: "callback", hint: "A function passed as an argument to another function" },
    { concept: "method", hint: "A function that belongs to an object" },
    { concept: "property", hint: "A value associated with an object" },
    { concept: "prototype", hint: "A shared object used for inheritance" },
    { concept: "async", hint: "Asynchronous programming with Promises or async/await" },
    { concept: "class", hint: "A blueprint for creating objects with shared properties" },
    { concept: "module", hint: "A self-contained unit of code that can be imported/exported" },
    { concept: "arrow", hint: "A concise syntax for writing anonymous functions" },
    { concept: "map", hint: "A data structure that stores key-value pairs" },
    { concept: "set", hint: "A collection of unique values" },
    { concept: "spread", hint: "A syntax for expanding elements in an array or object" },
    { concept: "rest", hint: "A syntax for gathering elements into an array" },
    { concept: "promise", hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "template", hint: "A string with embedded expressions for easy variable interpolation" },
    { concept: "hoisting", hint: "The process of moving declarations to the top of a scope" },
    { concept: "closure", hint: "A function that has access to variables from an outer scope" },
    { concept: "destructure", hint: "A syntax for extracting values from arrays or objects" },
    { concept: "callback", hint: "A function passed as an argument to another function" },
    { concept: "bind", hint: "A method for setting the value of 'this' in a function" },
    { concept: "call", hint: "A method for invoking a function with a specified 'this' value" },
    { concept: "apply", hint: "A method for invoking a function with an array of arguments" },
    { concept: "immutable", hint: "A value that cannot be changed after it is created" },
    { concept: "mutable", hint: "A value that can be changed after it is created" },
    { concept: "prototype", hint: "A shared object used for inheritance" },
    { concept: "operator", hint: "A symbol that performs an operation on values" },
    { concept: "NaN", hint: "A special value representing 'Not a Number'" },
    { concept: "null", hint: "A special value representing the absence of a value" },
    { concept: "undefined", hint: "A special value representing an uninitialized variable" },
    { concept: "NaN", hint: "A special value representing 'Not a Number'" },
    { concept: "JSON", hint: "JavaScript Object Notation - a data interchange format" },
    { concept: "AJAX", hint: "Asynchronous JavaScript and XML - a technique for making asynchronous server requests" },
    { concept: "Promise", hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "Generator", hint: "A special type of function that can be paused and resumed" },
    { concept: "async", hint: "A keyword used to declare a function that returns a Promise" },
    { concept: "await", hint: "A keyword used to wait for a Promise to resolve or reject" },
    { concept: "then", hint: "A method used to attach callbacks to a Promise" },
    { concept: "catch", hint: "A method used to attach error-handling callbacks to a Promise" },
    { concept: "finally", hint: "A method used to attach callbacks that are always executed, whether the Promise resolves or rejects" },
    { concept: "try", hint: "A block of code that is used to handle exceptions" },
    { concept: "catch", hint: "A block of code that is executed when an exception is thrown" },
    { concept: "promise",hint: "A JavaScript object representing the eventual completion of an asynchronous operation" },
    { concept: "template", hint: "A string with embedded expressions for easy variable interpolation" },
    { concept: "hoisting", hint: "The process of moving declarations to the top of a scope" },
    { concept: "closure", hint: "A function that has access to variables from an outer scope" },
    { concept:"destructure", hint: "A syntax for extracting values from arrays or objects" },
    { concept: "callback", hint: "A function passed as an argument to another function" },
    { concept: "bind", hint: "A method for setting the value of 'this' in a function" },
    { concept: "call", hint: "A method for invoking a function with a specified 'this' value" },
    { concept: "apply", hint: "A method for invoking a function with an array of arguments" },
    { concept: "immutable", hint: "A value that cannot be changed after it is created" },
    { concept: "mutable", hint: "A value that can be changed after it is created" }
];



// Functia trebuie sa itereze random prin array, sa aleaga un concept, iar in baza nr de litere sa creeze
// tot atatea campuri pentru literele ce trebuie ghicite
// de asemenea sa coreleze conceptul cu hintul ei aferent  si sa il printeze 

let generateWord = () => {
    
    const randomIndex = Math.floor(Math.random()*conceptList.length);
    const randomPair = conceptList[randomIndex];
    const concept = randomPair.concept;
    const hint = randomPair.hint;


    console.log(concept, hint)


}
generateWord()