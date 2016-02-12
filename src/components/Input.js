import React, { Component } from 'react'
import classNames from 'classnames'

class Input extends Component {
  render(){
    let style = 'input'
    let props = this.props;

    style += ` ${classNames(props)}` + ` ${props.className}`
    let controlClass = (!props['is-loading']) ? 'control' : 'control is-loading'
    return (
      <p className={controlClass}>
        <input className={style}
               type={this.props.type}
               name={this.props.name}
               placeholder={this.props.placeholder}
               onChange={this.props.handleChange}
               disabled={this.props['is-disabled']}/>
      </p>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  placehoder: '',
  className: '',
  disabled: false
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  "is-disabled": React.PropTypes.bool
}

export default Input
