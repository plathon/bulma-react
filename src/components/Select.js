import React, { Component } from 'react'

class Select extends Component {
  render(){
    return (
      <p className="control">
        <span className="select">
          <select name={this.props.name}>
            {this.props.data.map((data, i) => {
              return <option key={i} value={data.name}>{data.name}</option>
            })}
          </select>
        </span>
      </p>
    )
  }
}

Select.propTypes = {
  name: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired
}

export default Select
