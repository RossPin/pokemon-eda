import React from 'react'

import Home from './Home'
import Results from './Results'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      type: '',
      userSubmitted: false
    }

    this.updateState = this.updateState.bind(this)

  }

  updateState(state) {
    state.userSubmitted = true
    console.log(state)
    this.setState(state)
  }

  render() {
    return (
      <div>
        {!this.state.userSubmitted && <Home updateState={this.updateState} />}
        {this.state.userSubmitted && <Results {...this.state}/>}
      </div>
    )
  }

}


export default App
