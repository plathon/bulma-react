import React, { Component } from 'react'
import classNames from 'classnames'

class Tile extends Component {
    render(){
        let style = 'tile';
        let props = this.props;
        style += ` ${classNames(props)}`
        return (<div className={style}>{props.children}</div>)
    }
}

Tile.propTypes = {
    children: React.PropTypes.any,
    className:React.PropTypes.string
}

Tile.defaultProps = {
    className:''
}

export default Tile