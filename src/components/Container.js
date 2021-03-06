import React, { Component } from 'react'
import classNames from 'classnames'

class Container extends Component {
  render(){
    let style = 'container'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}>{this.props.children}</div>
  }
}

Container.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default Container
