import React, { Component } from 'react'
import classNames from 'classnames'

class Columns extends Component {

  columnsRender(){
    let style = 'columns'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}>{this.props.children}</div>
  }

  render () {
    return this.columnsRender()
  }

}

Columns.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
}

Columns.defaultProps = {
  className: ''
}

export default Columns
