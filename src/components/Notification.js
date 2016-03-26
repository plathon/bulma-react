import React, { Component } from 'react'
import classNames from 'classnames'

class Notification extends Component {
  render () {
    let style = 'notification'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    if (props.close) {
      return (
        <div {...props} className={style}>
          <button className="delete" onClick={props.close}></button>
          {this.props.description}
        </div>
      )
    } else {
      return (
        <div {...props} className={style}>
          {this.props.description}
        </div>
      )
    }
  }
}

Notification.propTypes = {
  description: React.PropTypes.string.isRequired
}

export default Notification
