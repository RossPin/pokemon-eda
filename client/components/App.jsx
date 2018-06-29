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
    this.goBack = this.goBack.bind(this)

  }

  updateState(state) {
    state.userSubmitted = true
    console.log(state)
    this.setState(state)
  }

  goBack() {
    let {userSubmitted} = this.state
    userSubmitted = false
    this.setState({userSubmitted})

  }

  render() {
    return (
      <div className="hero is-primary is-fullheight has-text-centered">
        {!this.state.userSubmitted && <Home updateState={this.updateState} />}
        {this.state.userSubmitted && <Results {...this.state} goBack={this.goBack}/>}
      </div>
    )
  }

}


export default App
