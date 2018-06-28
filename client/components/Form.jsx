import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: ''
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
    }


    render() {
        return (
            <div>

                <form>
                    <label htmlFor="name">What's your name?
                    <input type="text" name="name" onChange={(e) => this.handleChange(e)} />
                    </label>
                    <label htmlFor="type">Select a type
                    <select name="type" onChange={(e) => this.handleChange(e)}>
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
                    </label>
                    <button type="submit" onClick={this.submitButton}>Submit</button>
                </form>


            </div>
        )


    }
}




export default Form
