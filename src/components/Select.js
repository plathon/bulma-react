import React, { Component } from 'react'

class Select extends Component {
  render(){
    return (
      <p className="control">
        <span className="select">
          <select>
            {this.props.data.map((data, i) => {
              <option key={i} value={data.value}>{data.name}</option>
            })}
          </select>
        </span>
      </p>
    )
  }
}

Select.propTypes = {
  name: React.PropTypes.array.isRequired
}

export default Select
