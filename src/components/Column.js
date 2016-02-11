import React, { Component } from 'react'
import classNames from 'classnames'

class Column extends Component {

  columnsRender(){
    let style = 'column'
    let props = this.props;

    style += ` ${classNames(props)}` + ` ${props.className}`

    return <div className={style}>{this.props.children}</div>
  }

  render () {
    return this.columnsRender()
  }

}

Column.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
}

Column.defaultProps = {
  className: ''
}

export default Column
