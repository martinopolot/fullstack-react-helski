import { useState } from "react";

// Button handlers - refractored
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// StatisticLine for displaying a single statistic, e.g. the average score.
const StatisticLine = (props) => {
  return (
    // <p>
    //   {props.text} {props.value}
    // </p>
    //{/* Display the statistics in an HTML tab unicafe step 6 */}
    <div>
      <tr>
        <td style={{ paddingRight: "13px" }}>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  console.log(props);
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      {/* good: {good}
      <br />
      neutral: {neutral}
      <br />
      bad: {bad}
      <br />
      all {all}
      <br />
      average {average}
      <br />
      positive {positive}% */}
      {/*   {/*  StatisticLine component always displays a single statistic, meaning that the application 
      uses multiple components for rendering all of the statistics:*/}
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive.toFixed(1) + "%"} />
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // 1.12*: anecdotes step 1
  // Expand the application by adding a button that can be clicked
  // to display a random anecdote from the field of software engineering
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // diplay random anecdote
  const randomAnecdotes = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Expand your application so that you can vote for the displayed anecdote
  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  //  Anecdotes with the largest number of votes
  const mostVotes = votes.indexOf(Math.max(...votes));

  // lets calculate the score averagely (good + neutral + bad) divide by 3
  const all = good + neutral + bad;
  console.log(`Total score is ${all}`);
  const average = all > 0 ? (good - bad) / all : 0;
  console.log(`Average score is ${average}`);

  // calculating on the percentage of positive feedback
  const positive = all > 0 ? (good / all) * 100 : 0;
  console.log(`percentage of positive feedback ${positive}`);

  // create handlers for buttons clicked
  // const handleClickedGood = () => setGood(good + 1);
  // const handleClickedNeutral = () => setNeutral(neutral + 1);
  // const handleClickedBad = () => setBad(bad + 1);

  console.log("clicked the button");
  return (
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={handleClickedGood}>good</button>
      <button onClick={handleClickedNeutral}>nuetral</button>
      <button onClick={handleClickedBad}>bad</button> */}
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      {/* bjects are not valid as a React child */}
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
      <h2>Anecdotes of the day</h2>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={randomAnecdotes}>next Anecdote</button>
      <h2>Anecdotes with most votes</h2>
      {votes[mostVotes] > 0 ? (
        <div>
          {anecdotes[mostVotes]}
          <br />
          has {votes[mostVotes]} votes
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default App;
