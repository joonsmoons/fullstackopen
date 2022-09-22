const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => {
  // console.log(props.part) 
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {

  const ret = props.course.parts.map((item) => {
    // console.log(item)
    return <Part part={item}/>
  })
  // console.log(ret)
  return (
    <>
      {ret}
    </>
  )
}

const Total = (props) => (
  <><p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + 
    props.course.parts[2].exercises}</p></>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App