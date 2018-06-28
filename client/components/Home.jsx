import React from 'react'

import Form from './Form'

const Home = (props) => {
    return (
        <div>
            <div className="hero is-primary is-fullheight has-text-centered">
                <div className="hero-head">
                    <h1 className="title">Pokemon of EDA</h1>
                </div>
                <div className="hero-body has-content-centered">
                    <Form updateState={props.updateState} />
                </div>
            </div>
        </div>
    )
}

export default Home
