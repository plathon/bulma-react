import React, { Component } from 'react'
import classNames from 'classnames'

class Title extends Component {
  render () {

    let style = 'title'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`

    if (props['is-2'])
      return <h2 {...props} className={style}>{this.props.children}</h2>
    else if (props['is-3'])
      return <h3 {...props} className={style}>{this.props.children}</h3>
    else if (props['is-4'])
      return <h4 {...props} className={style}>{this.props.children}</h4>
    else if (props['is-5'])
      return <h5 {...props} className={style}>{this.props.children}</h5>
    else if (props['is-6'])
      return <h6 {...props} className={style}>{this.props.children}</h6>
    else
      return <h1 {...props} className={style}>{this.props.children}</h1>
  }
}

Title.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
}

Title.defaultProps = {
  className: ''
}

export default Title
