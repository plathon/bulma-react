import React, { Component } from 'react'
import classNames from 'classnames'

class Table extends Component {
  render () {
    let style = 'card'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <table {...props} className={props}>{this.props.children}</table>
  }
}

export default Table
