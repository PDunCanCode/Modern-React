// Stopwatch: Custom hook
import React, {useReducer, useEffect, useRef} from 'react'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

function reducer(currentState, newState) {
  return {...currentState, ...newState}
}

function useStopwatch() {
  const [{running, lapse}, setState] = useReducer(reducer, {
    running: false,
    lapse: 0,
  })
  const timerRef = useRef({timer: null})

  useEffect(() => () => clearInterval(timerRef.current), [])

  function handleRunClick() {
    if (running) {
      clearInterval(timerRef.current)
    } else {
      const startTime = Date.now() - lapse
      timerRef.current = setInterval(() => {
        setState({lapse: Date.now() - startTime})
      }, 0)
    }
    setState({running: !running})
  }

  function handleClearClick() {
    clearInterval(timerRef.current)
    setState({running: false, lapse: 0})
  }

  function Stopwatch() {
    const stopwatchOne = useStopwatch()
    const stopwatchTwo = useStopwatch()
  
    return (
      <div style={{textAlign: 'center'}}>
        <StopwatchView
          lapse={stopwatchOne.lapse}
          running={stopwatchOne.running}
          onRunClick={stopwatchOne.handleRunClick}
          onClearClick={stopwatchOne.handleClearClick}
        />
        <hr />
        <strong>Lapse Difference:</strong>
        <span data-testid="diff">
          {stopwatchOne.lapse - stopwatchTwo.lapse}
          ms
        </span>
        <hr />
        <StopwatchView
          lapse={stopwatchTwo.lapse}
          running={stopwatchTwo.running}
          onRunClick={stopwatchTwo.handleRunClick}
          onClearClick={stopwatchTwo.handleClearClick}
        />
      </div>
    )
  }
  

  // 🐨 3. update the returned JSX to render two stopwatches and the diff between them
  // 💰 if you want the tests to pass, make sure to pass a `data-testid="diff"` prop
  // to the span where you render the difference.

  return (
    <div style={{textAlign: 'center'}}>
      <StopwatchView
        lapse={lapse}
        running={running}
        onRunClick={handleRunClick}
        onClearClick={handleClearClick}
      />
    </div>
  )
}

function StopwatchView({lapse, running, onRunClick, onClearClick}) {
  return (
    <>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {lapse}
        ms
      </label>
      <button onClick={onRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={onClearClick} style={buttonStyles}>
        Clear
      </button>
    </>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Stopwatch />
}
Usage.title = 'Stopwatch: Custom hook'

export default Usage
