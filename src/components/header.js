import React from 'react';
import logo from '../res/nbalogo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='w-50'>
          <img src={logo} />
          <h1 className='Header-title'>NBA Fantasy Player Comparison Tool</h1>
        </div>
      </header>
    );
  }
}