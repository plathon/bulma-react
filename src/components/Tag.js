import React, { Component } from 'react'
import classNames from 'classnames'

class Tag extends Component {
  render () {
    let style = 'tag'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return (
      <span {...props} className={style}>{this.props.name}</span>
    )
  }
}

Tag.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Tag
