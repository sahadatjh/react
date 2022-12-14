import React, { Component } from 'react'

export default class Rating extends Component {

  state = {
    isHovered : false
  }

  handleHover = () => {
    this.setState({ isHovered : true })
  }
  
  handleLeave = () => {
    this.setState({ isHovered : false })
  }

  getClassName = () => {
      const { isRated } = this.props;
      const { isHovered } =this.state;
      let className = isRated ? 'bi bi-star-fill' : 'bi bi-star';
      className+= isHovered ? ' text-info' : '';
      return className;
  }

  render() {
    const { handleToggleRatting, rank } = this.props;

    return (
      <i 
        className={ this.getClassName() } 
        onMouseOver={this.handleHover} 
        onMouseLeave={this.handleLeave}
        onClick={ () => handleToggleRatting(rank) }
      ></i>
    )
  }
}