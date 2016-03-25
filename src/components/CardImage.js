import React, { Component } from 'react'
import classNames from 'classnames'

class CardImage extends Component {
  render () {
    return (
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="http://placehold.it/300x225" alt=""/>
        </figure>
      </div>
    )
  }
}

export default CardImage
