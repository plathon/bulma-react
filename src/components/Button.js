import React, { Component } from 'react'
import { buttonStyle } from '../utils/style'

class Button extends Component {

  buttonTypeRender(){
    let style = buttonStyle(this.props)
    let type  = this.props.type

    if (!type || type === 'link')
      return <a className={style}>{this.props.children}</a>
    else if (type === 'submit')
      return <button className={style} type="submit" desabled={this.props.disabled}>{this.props.children}</button>
    else if (type === 'button')
      return <button className={style} type="button" desabled={this.props.disabled}>{this.props.children}</button>
  }

  render () {
    return this.buttonTypeRender()
  }

}

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['submit', 'button', 'link', '']),
  style: React.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', '']),
  size: React.PropTypes.oneOf(['small', 'medium', 'large', 'fullwidth', '']),
  outlined: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string
}

Button.defaultProps = {
  type: '',
  style: '',
  size: '',
  outlined: false,
  loading: false,
  disabled: false,
  className: ''
}

export default Button
