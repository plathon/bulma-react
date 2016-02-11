import React, { Component } from 'react'

class Checkbox extends Component {
  render(){
    return (
      <p className="control">
        <label className="checkbox">
          <input type="checkbox" name={this.props.name}>
          {this.props.value}
        </label>
      </p>
    )
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
}

export default Checkbox
