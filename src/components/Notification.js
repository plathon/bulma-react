import React, { Component } from 'react'
import classNames from 'classnames'

class Notification extends Component {
  render () {
    let style = 'notification'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return (
      <div className={style}>
        <button className="delete"></button>
        {this.props.description}
      </div>
    )
  }
}

Notification.propTypes = {
  description: React.PropTypes.string.isRequired
}

export default Notification
