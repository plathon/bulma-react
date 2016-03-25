import React, { Component } from 'react'
import classNames from 'classnames'

class Input extends Component {

  render(){
    let style = 'input'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    let controlClass = (!props['is-loading']) ? 'control' : 'control is-loading'
    if (!props.standalone) {
      return (
        <p className={controlClass}>
          <label className="label">{this.props.label}</label>
          <input {...props}
                 className={style}
                 type={props.type}
                 name={props.name}
                 disabled={props['is-disabled']}/>
          <span className="is-danger">{(props.showError) ? props.error : ''}</span>
        </p>
      )
    } else {
      return <input {...props}
                    className={style}
                     type={props.type}
                     name={props.name}
                     disabled={props['is-disabled']} />
    }
  }

}

Input.defaultProps = {
  type: 'text',
  className: '',
  disabled: false,
  standalone: false
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  "is-disabled": React.PropTypes.bool
}

export default Input
