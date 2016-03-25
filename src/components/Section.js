import React, { Component } from 'react'
import classNames from 'classnames'

class Section extends Component {

  sectionRender () {
    let style = 'section'
    let props = this.props;
    style += ` ${classNames(props)}` + ` ${props.className}`
    return <div {...props} className={style}>{this.props.children}</div>
  }

  render () {
    return this.sectionRender()
  }

}

Section.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
}

Section.defaultProps = {
  className: ''
}

export default Section
