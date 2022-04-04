function ArrayMethod(){
    const myArray = ['apple', 'banana', 'orange'];
    const myList = myArray.map((item) => <li key={item}>{item}</li>);
    return (<ul>{myList}</ul>);
}

export default ArrayMethod;