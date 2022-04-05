function Football() {
    const shoot = (a,b) => {
      alert(a + " Great Shot! " + b);
    }
  
    return (
      <button onClick={() => shoot("Goal!", 'Sir')}>Take the shot!</button>
    );
  }
  
 export default Football