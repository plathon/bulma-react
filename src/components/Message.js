import React, { Component } from 'react'
import classNames from 'classnames'

class Message extends Component {
  render () {
    let style = 'message'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return (
      <div {...props} className={style}>
        <div className="message-header">
          {this.props.title}
        </div>
        <div className="message-body">
          {this.props.description}
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default Message
