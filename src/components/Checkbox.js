import React, { Component } from 'react'

class Checkbox extends Component {
  render(){
    let props = this.props
    return (
      <p className="control">
        <label className="checkbox">
          <input type="checkbox" {...props}/>
          {props.description}
        </label>
      </p>
    )
  }
}

Checkbox.propTypes = {
  description: React.PropTypes.string.isRequired
}

export default Checkbox
