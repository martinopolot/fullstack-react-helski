// import Header from "./Header";
// import Content from "./Content";

import Total from "./Total";
function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundementals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      {/* <Header />
      <Content />
      <Total /> */}
      <h1>{course}</h1>
      <p>{part1}</p>
      <p>{part2}</p>
      <p>{part3}</p>
      <Total />
    </div>
  );
}

export default App;
