import React from 'react'

import {getTypes, getByType} from '../apiClient'
import {capitalise} from '../functions'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.name,
            type: this.props.type,
            name: '',
            height: '',
            weight: '',
            abilities: '',
            image: ''
        }
        this.updateData = this.updateData.bind(this)
    }

    componentDidMount(){              
        getByType(this.state.type).then(this.updateData)        
    }

    updateData(data){
        let {name, height, weight, sprites} = data
        const image = sprites.front_default
        this.setState({name, height, weight, image}) 
    }

    render() {
        return (
            <div id="pokedex">
                <div id="left">
                    <div id="logo"></div>
                    <div id="bg_curve1_left"></div>
                    <div id="bg_curve2_left"></div>
                    <div id="curve1_left">
                        <div id="buttonGlass">
                            <div id="reflect"> </div>
                        </div>
                        <div id="miniButtonGlass1"></div>
                        <div id="miniButtonGlass2"></div>
                        <div id="miniButtonGlass3"></div>
                    </div>
                    <div id="curve2_left">
                        <div id="junction">
                            <div id="junction1"></div>
                            <div id="junction2"></div>
                        </div>
                    </div>
                    <div id="screen">
                        <div id="topPicture">
                            <div id="buttontopPicture1"></div>
                            <div id="buttontopPicture2"></div>
                        </div>
                        <div id="picture">
                            <img src={this.state.image} height="170" />
                        </div>
                        <div id="buttonbottomPicture"></div>
                        <div id="speakers">
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                        </div>
                    </div>
                    <div id="bigbluebutton"></div>
                    <div id="barbutton1"></div>
                    <div id="barbutton2"></div>
                    <div id="cross">
                        <div id="leftcross">
                            <div id="leftT"></div>
                        </div>
                        <div id="topcross">
                            <div id="upT"></div>
                        </div>
                        <div id="rightcross">
                            <div id="rightT"></div>
                        </div>
                        <div id="midcross">
                            <div id="midCircle"></div>
                        </div>
                        <div id="botcross">
                            <div id="downT"></div>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="stats">
                        <strong>Name :</strong> {capitalise(this.state.userName)}<br />
                        <strong>Pokemon :</strong> {capitalise(this.state.name)}<br />
                        <strong>Type :</strong> {this.state.type}<br />
                        <strong>Height :</strong> {this.state.height/10} m<br />
                        <strong>Weight :</strong> {this.state.weight/10} kg<br /><br />
                    </div>
                    <div id="blueButtons1">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="blueButtons2">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                   
                    <div id="yellowBox1" onClick={this.props.goBack}>BACK</div>
                    <div id="yellowBox2"></div>
                    <div id="bg_curve1_right"></div>
                    <div id="bg_curve2_right"></div>
                    <div id="curve1_right"></div>
                    <div id="curve2_right"></div>
                </div>
            </div>
        )
    }
}

export default Results

