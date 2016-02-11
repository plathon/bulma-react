import React, { Component } from 'react'

class Container extends Component {
  render(){
    return <div className="container">{this.props.children}</div>
  }
}

Container.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default Container
