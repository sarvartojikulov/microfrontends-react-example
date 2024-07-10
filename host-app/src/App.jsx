import { useState } from 'react'
import './App.css'
import TodoApp from "todo_app/App"
import StatisticsApp from "statistics_app/App"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div>
          <h1>Host</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </section>

      <section><TodoApp /></section>

      <section><StatisticsApp /></section>
    </>

  )
}

export default App