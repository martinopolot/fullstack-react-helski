// Function to calculate the total number of exercises, including nested parts
const allExercises = (parts) => {
  return parts.reduce((sum, part) => {
    if (part.parts) {
      // Recursively sum exercises from nested parts
      return sum + allExercises(part.parts);
    }
    return sum + (part.exercises || 0); // Ensure exercises is defined
  }, 0);
};

// Component for rendering a course
const Course = ({ course }) => {
  const numberOfExercises = allExercises(course.parts);
  console.log(numberOfExercises);
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <strong>total of {allExercises(course.parts)} exercises</strong>
    </div>
  );
};

// Component for rendering a part (handles nested parts)
const Part = ({ part }) => {
  if (part.parts) {
    return (
      <div>
        <h3>{part.name}</h3>
        {part.parts.map((nested) => (
          <Part key={nested.id} part={nested} />
        ))}
        <strong>total of {allExercises(part.parts)} exercises</strong>
      </div>
    );
  }

  return (
    <p>
      {part.name}
      {part.exercises || 0}
    </p>
  );
};

// App component with course data
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
      {
        name: "Node.js",
        id: 5,
        parts: [
          {
            name: "Routing",
            exercises: 3,
            id: 1,
          },
          {
            name: "Middlewares",
            exercises: 7,
            id: 2,
          },
        ],
      },
    ],
  };

  return <Course course={course} />;
};

export default App;

// Expected output
// Half Stack application development
// Fundamentals of React 10
// Using props to pass data 7
// State of a component 14
// Redux 11
// total of 42 exercises
// Node.js
// Routing 3
// Middlewares 7
// total of 10 exercises
