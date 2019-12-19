import React, { Component } from 'react';

import Stat from '../components/stat'

class Player extends Component {
  // playerPos(ps) {
  //   let pos = ps.shift();
  //   for (let p in ps) {
  //     pos = pos + ', ' + ps[p];
  //   }
  //   return pos;
  // }

  render() {
    return (
      <div className='d-flex align-items-center card'>
        <div id='player-info'>
          <h2>{this.props.name}</h2>
          <h3>{this.props.team} {this.props.id}</h3>
          {/* <h3>{this.props.team} {this.playerPos(this.props.pos)}</h3> */}
        </div>
        <div className='d-flex stats justify-content-end'>
          <Stat type='MIN' />
          <Stat type='FGM/FGA' />
          <Stat type='FG%' />
          <Stat type='FTM/FTA' />
          <Stat type='FT%' />
          <Stat type='3PM' />
          <Stat type='REB' />
          <Stat type='AST' />
          <Stat type='STL' />
          <Stat type='BLK' />
          <Stat type='PTS' />
        </div>
      </div>
    );
  }
}

export default Player;