import React from 'react'

import Home from './Home'

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
    console.log(state)
    this.setState(state)
  }

  render() {
    return (
      <div>
        <Home updateState={this.updateState} />
      </div>
    )
  }

}


export default App
