import React, { Component } from 'react'

class Input extends Component {
  render(){
    return (
      <p className="control">
        <input className="input"
               type={this.props.type}
               name={this.props.name}
               placeholder={this.props.placeholder}>
      </p>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  placehoder: ''
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Input
