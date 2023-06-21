const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total parts={{part1, part2, part3}} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      {props.parts.name} {props.parts.exercises}
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part parts={props.part1} />
      <Part parts={props.part2} />
      <Part parts={props.part3} />
    </div>
  ); 
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {''}
        {props.parts.part1.exercises +
          props.parts.part2.exercises +
          props.parts.part3.exercises}
      </p>
    </div>
  );
};

export default App;  
