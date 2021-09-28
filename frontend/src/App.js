import React from 'react'
import axios from 'axios'
import {
  Switch, Route, BrowserRouter as Router
} from 'react-router-dom'

const testUrl = '/api/test'

const getTest = () => {
  const req = axios.get(testUrl)
  return req.then(res => {
    console.log(res)
  })
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/apitest'>
          <button onClick={getTest}>Api kutsu</button>
        </Route>
        <Route path='/terve'>
          <p>Terve</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
