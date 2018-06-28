import React from 'react'

import Form from './Form'

const Home = (props) => {
    return (
        <div>
            <h1>Pokemon EDA</h1>
            <Form updateState={props.updateState} />
        </div>
    )
}

export default Home
