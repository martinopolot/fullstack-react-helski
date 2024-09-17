import { useState } from "react";
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
  const handleClickedGood = () => setGood(good + 1);
  const handleClickedNeutral = () => setNeutral(neutral + 1);
  const handleClickedBad = () => setBad(bad + 1);

  console.log("clicked the button");
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickedGood}>good</button>
      <button onClick={handleClickedNeutral}>nuetral</button>
      <button onClick={handleClickedBad}>bad</button>
      <h2>Statistics</h2>
      good: {good}
      <br />
      neutral: {neutral}
      <br />
      bad: {bad}
      <br />
      all {all}
      <br />
      average {average}
      <br />
      positive {positive}
    </div>
  );
};

export default App;
