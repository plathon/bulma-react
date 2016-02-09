import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    return (
      <a className="button">{this.props.children}</a>
    )
  }
}
