import React, { Component } from 'react'

class Icon extends Component {
  render () {
    let style = `fa fa-${this.props.icon}`
    return (
      <span className="icon">
        <i className={style}></i>
      </span>
    )
  }
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
