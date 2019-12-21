import React, { Component } from 'react';

class Stat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <div className='d-flex flex-column mx-4'>
        <span className='stat-type py-0'>{this.props.type}</span>
        <span>{this.state.value}</span>
      </div>
    )
  }
}

export default Stat;