import React, { Component } from 'react'
import classNames from 'classnames'

class Tabs extends Component {

  render () {
    let style = 'tabs'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}><ul>{this.props.children}</ul></div>
  }

}

Tabs.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
}

Tabs.defaultProps = {
  className: ''
}

export default Tabs
