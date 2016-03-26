import React, { Component } from 'react'

class Media extends Component {
  render () {
    let style = ''
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`

    if (props.type === 'left')
      return <article {...props} className={`media-left ${style}`}>{this.props.children}</article>
    else if (props.type === 'right')
      return <article {...props} className={`media-right ${style}`}>{this.props.children}</article>
    else if (props.type === 'content')
      return <article {...props} className={`media-content ${style}`}>{this.props.children}</article>
    else
      return <article {...props} className={`media ${style}`}>{this.props.children}</article>
  }
}

Media.propTypes = {
  children: React.PropTypes.any.isRequired,
  type: React.PropTypes.oneOf(['left', 'item', 'right', '']),
}

Media.defaultProps = {
  type: ''
}

export default Media
