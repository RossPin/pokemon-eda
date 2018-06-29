import React from 'react'
import { getTypes } from '../apiClient'
import { capitalise } from '../functions'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: 'Fire',
            types: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitButton = this.submitButton.bind(this)

    }

    componentDidMount() {
        getTypes()
            .then(types => {
                console.log(types)
                this.setState({
                    types
                })
            })
    }


    handleChange(e) {
        const state = this.state
        state[e.target.name] = e.target.value
    }

    submitButton(e) {
        e.preventDefault()
        this.props.updateState(this.state)
    }


    render() {
        return (
            <div>
                <div className="box">
                    <form>
                        <div className="field">
                            <div className="control">
                                <label>What's your name?</label>
                                <input type="text" className="input is-small" name="name" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <label>What type best defines you?</label>
                                <br />
                                <div className="select">
                                    <select className="select" name="type" onChange={(e) => this.handleChange(e)}>

                                        {this.state.types.map((type, i) => {
                                            return (
                                                <option key={i}>{capitalise(type)}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <br /><hr />
                                <button className="button" type="submit" onClick={this.submitButton}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}




export default Form
