import { useState } from 'react'
import Header from './components/Header.jsx'
import Result from './components/Result.jsx'
import { calculateInvestmentResults } from './util/investment.js'

/* 
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration, 
*/

const investments = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}


function App() {
  const [getInvestments, setNewInvestments] = useState(investments)
  const [getResults, setNewResults] = useState(calculateInvestmentResults(getInvestments))

  function investmentChangeHandler(event) {
    const newInvestments = investments
    
    let element = event.target.id
    let value = parseFloat(event.target.value)
    
    newInvestments[element] = value
    setNewInvestments(newInvestments)

    if(Object.values(newInvestments).includes(NaN)){
      const newResults = []
      setNewResults(newResults)
    }else{
      const newResults = calculateInvestmentResults(getInvestments)
      setNewResults(newResults)
    }
  }

  return (
    <>
      <Header />
      <main>
        <div id="user-input" className="input-group">

          <label htmlFor="initialInvestment"> INITIAL INVESTMENT
            <input type="number" id="initialInvestment"
              value={undefined}
              onChange={(element) => {
                investmentChangeHandler(element)
              }}
            />
          </label>

          <label htmlFor="annualInvestment"> ANNUAL INVESTMENT
            <input type="number" id="annualInvestment"
              value={undefined}
              onChange={(element) => {
                investmentChangeHandler(element)
              }}
            />
          </label>

          <label htmlFor="expectedReturn"> EXPECTED RETURN
            <input type="number" id="expectedReturn"
              value={undefined}
              onChange={(element) => {
                investmentChangeHandler(element)
              }}
            />
          </label>

          <label htmlFor="duration"> DURATION
            <input type="number" id="duration"
              value={undefined}
              onChange={(element) => {
                investmentChangeHandler(element)
              }}
            />
          </label>

        </div>
        <Result
          results={getResults}
          investments={getInvestments}
        />
      </main>
    </>
  )
}

export default App
