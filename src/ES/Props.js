function Car(props) {
  return <li>I am a { props.brand }!</li>;
}

function Tool(props){
  return <li>I am a { props.tool }!</li>
}

function Snack(props){
  return <li>I am a {props.snack.container} of {props.snack.food}</li>
}

function Garage() {
  const carName = "Ford Car";
  const snack = { container: "bag", food: "chip" };
  return (
    <>
      <h3>Who lives in my garage?</h3>
      <ul>
      <Tool tool='screw driver' />
      <Car brand={ carName } />
      <Snack snack={snack} />
      </ul>
    </>
  );
}

export default Garage;