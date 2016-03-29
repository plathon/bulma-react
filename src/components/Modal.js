import react, { Component } from 'react'

class Modal extends Component {
  render () {
    let { isOpen } = this.props
    let className  = (isOpen) ? 'modal is-open' : 'modal'
    return (
      <div {...this.props} className={className}>
        <div className="modal-background"></div>
        <div className="modal-container">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
        <button className="modal-close"></button>
      </div>
    )
  }
}

Modal.defaultProps = {
  isOpen: false
}

export default Modal
