import React, { Component } from 'react'

class Search extends Component {
  render(){
    return (
      <p className="control is-grouped">
        <input className="input"
               type={this.props.type}
               name={this.props.name}
               placeholder={this.props.placeholder}
               onChange={this.props.handleChange}/>
        <button className="button" onClick={this.props.handleSubmit}>{this.props.buttonText}</button>
      </p>
    )
  }
}

Search.propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  buttonText: React.PropTypes.string
}

Search.defaultProps = {
  type: 'text',
  buttonText: 'Search'
}

export default Search
