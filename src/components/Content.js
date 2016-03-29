import React, { Component } from 'react'
import classNames from 'classnames'

class Content extends Component {
  render () {
    let style = 'content'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}>{this.props.children}</div>
  }
}

export default Content
