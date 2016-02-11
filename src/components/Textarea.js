import React, { Component } from 'react'

class Textarea extends Component {
  render(){
    return (
      <p className="control">
        <textarea className="textarea"
                  name={this.props.name}
                  placeholder={this.props.placeholder}></textarea>
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
