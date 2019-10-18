import React, { Component } from 'react';
import Timme from './Timme'
class Timmer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            TimeMs:0
        }
        setInterval(
            () => {
               this.setState({
                   TimeMs: this.state.TimeMs+1000
               }) 
            },
            1000
        )
    }
    render() {
        return <Timme ms={this.state.TimeMs} />
    }
}

export default Timmer






