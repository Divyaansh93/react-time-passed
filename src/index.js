import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class TimePassed extends Component {

    constructor(props) {
        super(props)
        this.timeAgo = props.timeAgo ? props.timeAgo : moment()
        this.state = {
            text: ''
        }   
    }

    /**
     * clear the interval from the state
     */
    componentWillUnmount() {
       clearInterval(this.intervalFunction)
    }

    componentDidMount() {
        this.setState({ text: moment(this.timeAgo).fromNow() })
        this.intervalFunction = setInterval(() => {
            this.setState({ text: moment(this.timeAgo).fromNow() })
        }, 60001)
    }

    /**
     * function @TimeAgo render after every 1 minute. 
     */
    render() {
        return (
            <div>
                {this.state.text}
            </div>
        )
    }

}
