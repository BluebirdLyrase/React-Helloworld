function MissedGoal() {
    return <p>MISSED!</p>;
}

function MadeGoal() {
    return <p>Goal!</p>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

export default Goal;