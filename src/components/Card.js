import React, { Component } from 'react'
import classNames from 'classnames'

class Card extends Component {
  render () {
    let style = 'card'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}>{this.props.children}</div>
  }
}

export default Card
