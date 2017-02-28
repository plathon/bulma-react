import React, { Component } from 'react'
import classNames from 'classnames'

class Tab extends Component {

  render () {
    let style = '';
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <li {...props} className={style}>{this.props.children}</li>
  }

}

Tab.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
}

Tab.defaultProps = {
  className: ''
}

export default Tab
