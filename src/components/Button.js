import React, { Component } from 'react'
import classNames from 'classnames'

class Button extends Component {

  buttonTypeRender(){
    let style = 'button'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    if (props.type === 'link')
      return <a {...props} className={style} href={this.props.to}>{this.props.children}</a>
    else
      return <button {...props} className={style} type={props.type} desabled={this.props['is-disabled']}>{this.props.children}</button>
  }

  render () {
    return this.buttonTypeRender()
  }

}

Button.propTypes = {
  children: React.PropTypes.any.isRequired,
  type: React.PropTypes.oneOf(['submit', 'button', 'link', '']),
  className: React.PropTypes.string,
  to: React.PropTypes.string
}

Button.defaultProps = {
  type: 'link',
  className: '',
  to: '#'
}

export default Button
