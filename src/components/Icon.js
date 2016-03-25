import React, { Component } from 'react'
import classNames from 'classnames'

class Icon extends Component {
  render () {
    let props = this.props
    let icon  = `fa fa-${props.icon}`
    let style = 'icon'
    style += ` ${classNames(props)}` + ` ${props.className}`
    return (
      <span {...props} className={style}>
        <i className={icon}></i>
      </span>
    )
  }
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
