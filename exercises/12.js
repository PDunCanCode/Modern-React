// VanillaTilt: React.lazy
// 🐨 3. add "Suspense" as an import from react here
import React, {Suspense, useState} from 'react'
// 🐨 1. remove this import
import Tilt from '../tilt'

// 🐨 2. Use React.lazy with a dynamic import of ../tilt and assign that
// to a variable called Tilt
const Tilt = React.lazy(() => import('../tilt'))

function App() {
  const [showTilt, setShowTilt] = useState()
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={showTilt}
          onChange={e => setShowTilt(e.target.checked)}
        />
        {' show tilt'}
      </label>
      <div>
        <Suspense fallback="loading...">
          {showTilt ? (
            <div className="totally-centered">
              <Tilt>
                <div className="totally-centered">vanilla-tilt.js</div>
              </Tilt>
            </div>
          ) : null}
        </Suspense>
      </div>
    </div>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <App />
}
Usage.title = 'VanillaTilt: React.lazy'

export default Usage
