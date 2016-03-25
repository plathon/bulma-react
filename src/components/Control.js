import React, { Component } from 'react'
import classNames from 'classnames'

class Control extends Component {
  render () {
    let style = 'control'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <p {...props} className={style}>{this.props.children}</p>
  }
}

export default Control
