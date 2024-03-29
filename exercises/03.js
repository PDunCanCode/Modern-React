// Counter: useEffect
// 🐨 2. you'll also want useEffect here!
import React, {useState, useEffect} from 'react'

// We moved things back to within the Counter component for the exercise.

function Counter() {
  // 🐨 1. initialize the state to the value from localStorage
  // 💰
  const [count, setCount] = useState(
    Number(window.localStorage.getItem('count') || 0),
  )
  const incrementCount = () => setCount(count + 1)
  useEffect(() => {
    window.localStorage.setItem('count', count)
  })
  // 3. 🐨 Here's where you'll use `useEffect`.
  // The callback should set the `count` in localStorage.
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useEffect'

export default Usage
