
import { useState } from 'react';
import './App.css';

function App() {
const [opp, setOpp] = useState('')
const [player, setPlayer] = useState('')
const [result, setResult] = useState('')
const [oppScore, setOppScore] = useState(0)
const [playScore, setPlayScore] = useState(0)
const [round, setRound] = useState(0)

const options = ['Rock', 'Paper', 'Scissors']

const play = () => {
  const oppVal = options[Math.floor(Math.random()*options.length)]
  setOpp(oppVal)
  const playVal = options[Math.floor(Math.random()*options.length)]
  setPlayer(playVal)

  setRound(round + 1)

  if (oppVal === playVal) {
    setResult('Draw')
  } else {
    setResult('')
  }

  if (oppVal === 'Rock' && playVal === 'Scissors') {
    setResult('Rock Breaks Scissors. You Lose')
    setOppScore(oppScore + 1)
  } else if (oppVal === 'Rock' && playVal === 'Paper') {
    setResult('Paper Covers Rock. You Win!')
    setPlayScore(playScore + 1)
  }

  if (oppVal === 'Paper' && playVal === 'Scissors') {
    setResult('Scissors Cut Paper. You Win!')
    setPlayScore(playScore + 1)
  } else if (oppVal === 'Paper' && playVal === 'Rock') {
    setResult('Paper Covers Rock. You Lose!')
    setOppScore(oppScore + 1)
  }

  if (oppVal === 'Scissors' && playVal === 'Rock') {
    setResult('Rock Breaks Scissors. You Win!')
    setPlayScore(playScore + 1)
  } else if (oppVal === 'Scissors' && playVal === 'Paper') {
    setResult('Scissors Cut Paper. You Lose!')
    setOppScore(oppScore + 1)
  }

  if (oppScore == 5) {
    setResult('You LOSE!!!')
    setOppScore(0)
    setPlayScore(0)
    setRound(0)
  } else if (playScore == 5) {
    setResult('YOU WIN!!!!!!!!!')
    setOppScore(0)
    setPlayScore(0)
    setRound(0)
  }
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>ROCK, PAPER, SCISSORS</h1>
        <h2>First to Reach 5 Points WINS!!</h2>
        <div className='scores'>
          <p>Opponent Score: {oppScore}</p>
          <p>Your Score: {playScore}</p>
        </div>
        <div className='moves'>
          <div className='opp'>Opponent Move: {opp}</div>
          <div className='player'>Your Move: {player}</div>
        </div>
        <button onClick={play}>Play</button>
        <div className='round'>Round {round}</div>
        <div className='result'>{result}</div>
      </header>
    </div>
  );
}

export default App;
