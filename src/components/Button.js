import React, { Component } from 'react'
import classNames from 'classnames'

class Button extends Component {

  buttonTypeRender(){
    let style = 'button'
    let props = this.props;

    style += ` ${classNames(props)}` + ` ${props.className}`
    let type  = props.type

    if (!type || type === 'link')
      return <a className={style}>{this.props.children}</a>
    else
      return <button className={style} type={type} desabled={this.props.disabled}>{this.props.children}</button>
  }

  render () {
    return this.buttonTypeRender()
  }

}

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['submit', 'button', 'link', '']),
  "is-primary": React.PropTypes.bool,
  "is-info": React.PropTypes.bool,
  "is-success": React.PropTypes.bool,
  "is-warning": React.PropTypes.bool,
  "is-danger": React.PropTypes.bool,
  "is-small": React.PropTypes.bool,
  "is-medium": React.PropTypes.bool,
  "is-large": React.PropTypes.bool,
  "is-fullwidth": React.PropTypes.bool,
  "is-outlined": React.PropTypes.bool,
  "is-loading": React.PropTypes.bool,
  "is-disabled": React.PropTypes.bool,
  className: React.PropTypes.string
}

Button.defaultProps = {
  type: '',
  "is-primary": false,
  "is-info": false,
  "is-success": false,
  "is-warning": false,
  "is-danger": false,
  "is-small": false,
  "is-medium": false,
  "is-large": false,
  "is-fullwidth": false,
  "is-outlined": false,
  "is-loading": false,
  "is-disabled": false,
  className: ''
}

export default Button
