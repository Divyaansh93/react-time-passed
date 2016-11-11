import React from 'react'
import {render} from 'react-dom'
import moment from 'moment'
import Component from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-time-passed (Real time update) Demo</h1>
      <br />
      <h3>Prop is undefined: </h3>
      <i>{"<Component />"}</i>
      <br/>
      Output: <Component/>
      <br />
      <h3>Passed current time in prop: </h3>
      <i>{"<Component timeAgo={ moment() }/>"}</i>
      <br/>
      Output: <Component
        timeAgo={moment() }
        />
      <h3>passed time 20 min less from now in props: </h3>
      <i>{"<Component timeAgo={moment().subtract(20, 'minutes') } />"}</i>
      <br/>
      Output: <Component
        timeAgo={moment().subtract(20, 'minutes') }
        />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
