// Counter: custom hooks
import React, {useState} from 'react'

function useCounter() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(count + 1)
  return {count, incrementCount}

}

function Counter() {
  // 🐨 move these two lines to your function and return what you need
  const {count, incrementCount} = useCounter()
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export default Usage, useCounter
