import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListView from './Pages/ListView'
import AppContext from './AppContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'OMDB Search'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <Route exact path='/' component={ListView}/>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App