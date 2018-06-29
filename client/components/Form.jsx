import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: 'Fire'
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitButton = this.submitButton.bind(this)

    }


    handleChange(e) {
        const state = this.state
        state[e.target.name] = e.target.value
    }

    submitButton(e) {
        e.preventDefault()
        this.props.updateState(this.state)
        const openingSound = new Audio("openingSound.mp3")
        openingSound.play()
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
                                <br/>
                                <div className="select">
                                <select className="select" name="type" onChange={(e) => this.handleChange(e)}>
                                    <option>Fire</option>
                                    <option>Water</option>
                                    <option>Electric</option>
                                    <option>Ground</option>
                                    <option>Steel</option>
                                    <option>Fighting</option>
                                    <option>Dark</option>
                                    <option>Psychic</option>
                                    <option>Ghost</option>
                                    <option>Normal</option>
                                    <option>Grass</option>
                                    <option>Dragon</option>
                                    <option>Bug</option>
                                    <option>Poison</option>
                                    <option>Ice</option>
                                </select>
                                </div>
                                <br/><hr/>
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
