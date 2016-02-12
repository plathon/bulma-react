import React, { Component } from 'react'

class Checkbox extends Component {
  render(){
    return (
      <p className="control">
        <label className="checkbox">
          <input type="checkbox" name={this.props.name}/>
          {this.props.description}
        </label>
      </p>
    )
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default Checkbox
