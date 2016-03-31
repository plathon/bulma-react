import React, { Component } from 'react'
import classNames from 'classnames'

class Table extends Component {
  render () {
    let style = 'table'
    let props = this.props
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <table {...props} className={style}>{this.props.children}</table>
  }
}

export default Table
