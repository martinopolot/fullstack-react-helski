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
    </div>
  );
};

export default App;
