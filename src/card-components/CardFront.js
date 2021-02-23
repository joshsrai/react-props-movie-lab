import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      {/* This component should have one prop, which should be used to apply a background image. */}
      </div>
    )
  }
}
