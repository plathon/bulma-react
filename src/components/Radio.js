import React, { Component } from 'react'

class Radio extends Component {
  render () {
    return (
      <label className="radio">
        <input type="radio" name={this.props.name} value={this.props.value}/>
        {this.props.value}
      </label>
    )
  }
}

Radio.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
}

export default Radio
