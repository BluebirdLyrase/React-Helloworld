import '../App.css';

function ArrowFunction(){
    console.log(normal());
    console.log(arrow());
    console.log(arrowReturn());
    console.log(arrowParam('val1'));
    console.log(arrowParams('val1','val2'));
    console.log(arrowParenthese('val1'));
    return (
        <ul>
        <li>{normal()}</li>
        <li>{arrow()}</li>
        <li>{arrowReturn()}</li>
        <li>{arrowParam('val1')}</li>
        <li>{arrowParams('val1','val2')}</li>
        <li>{arrowParenthese('val1')}</li>
        </ul>)
}

//Function
const normal = function() {
    return "This text come from a regular function!";
}

const arrow = () => {
    return "This text come from an arrow function!"; 
}

const arrowReturn = () => "This text cfdome from an arrow function that return value by default";

const arrowParam = (val) => "this text come from an arrow function with a parameter ( " + val + " )";

const arrowParams = (val1,val2) => "this text come from an arrow function with multiple parameters ( " + val1 + ", " + val2 + " )";

const arrowParenthese = val => "this text come from a parenthese function with only a single parameter ( " + val +" )";

//This

export default ArrowFunction;