import React, { Component } from 'react'
import classNames from 'classnames'

class NavBar extends Component {
  render(){
    let position = this.props.position
    let componentStyle = classNames(this.props)
    componentStyle += ` ${this.props.className}`
    let style = ''

    if (!position) style = `navbar ${componentStyle}`
    else if (position === 'right') style = `navbar-right ${componentStyle}`
    else if (position === 'item') style = `navbar-item ${componentStyle}`
    else if (position === 'left') style = `navbar-left ${componentStyle}`

    return <nav {...this.props} className={style}>{this.props.children}</nav>
  }
}

NavBar.propTypes = {
  children: React.PropTypes.any.isRequired,
  position: React.PropTypes.oneOf(['left', 'item', 'right', '']),
}

NavBar.defaultProps = {
  position: ''
}

export default NavBar
