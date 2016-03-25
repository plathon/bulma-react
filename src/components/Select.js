import React, { Component } from 'react'

class Select extends Component {
  render(){
    let props = this.props
    return (
      <p className="control">
        <label className="label">{props.label}</label>
        <span className="select">
          <select {...props} name={props.name} className="is-large">
            <option></option>
            {props.data.map((data, i) => {
              return <option key={i} value={data.name}>{data.name}</option>
            })}
          </select>
          <span className="is-danger">{(props.showError) ? props.error : ''}</span>
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
