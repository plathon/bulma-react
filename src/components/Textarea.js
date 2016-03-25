import React, { Component } from 'react'

class Textarea extends Component {
  render(){
    let props = this.props
    let controlClass = (!props['is-loading']) ? 'control' : 'control is-loading'
    return (
      <p className="control">
        <label className="label">{this.props.label}</label>
        <textarea {...props}
                  className="textarea"
                  name={this.props.name}></textarea>
        <span className="is-danger">{(props.showError) ? props.error : ''}</span>
      </p>
    )
  }
}

Textarea.defaultProps = {
  placehoder: ''
}

Textarea.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Textarea
