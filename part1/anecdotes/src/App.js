import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const StatisticLine = ({scores}) => {
  return (
    <tr>
      <td>{scores.name}</td>
      <td>{scores.score}</td>
    </tr>
  )

}
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({scoreboard}) => {
  if (scoreboard.total.score > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine scores={scoreboard.good}/>
          <StatisticLine scores={scoreboard.neutral}/>
          <StatisticLine scores={scoreboard.bad}/>
          <StatisticLine scores={scoreboard.total}/>
          <StatisticLine scores={scoreboard.average}/>
          <StatisticLine scores={scoreboard.positive}/>
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const scoreboard = {
    good: {
      name: 'good', 
      score: good
      }, 
    neutral: {
      name: 'neutral', 
      score: neutral
    }, 
    bad: {
      name: 'bad', 
      score: bad
    }, 
    total: {
      name: 'total', 
      score: total
    },
    average: {
      name: 'average', 
      score: Math.round((good*1 + neutral*0 + bad*-1)*100/total, 2) / 100
    }, 
    positive: {
      name: 'positive', 
      score: Math.round((good /total)*10000, 2) / 100 + '%'
    }
  }

  const clickDirection = (text) => () => {
    if (text == "good") {
      return setGood(good+1)
    } else if (text == "neutral") {
      return setNeutral(neutral+1)
    } else if (text == "bad") {
      return setBad(bad+1)
    }
  }

  return (
    <div>
      <Header title={'give feedback'}/>
      <Button handleClick={clickDirection('good')} text='good'/>
      <Button handleClick={clickDirection('neutral')} text='neutral'/>
      <Button handleClick={clickDirection('bad')} text='bad'/>
      <Header title={'statistics'}/>
      <Statistics scoreboard={scoreboard}/>
    </div>
  )
}

export default App