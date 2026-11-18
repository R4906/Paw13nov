import React from 'react'
import Counter from './components/counter'
import ThemeSwap from './components/ThemeSwap'

  const App = () => {
  return (
    <div>
      <h1>hello react</h1>
      <button className='btn btn-primary'>
        button example</button>
      <Counter/> 
      <div className="p-5">
        <ThemeSwap/>
      </div>
    </div>
  )
}


export default App