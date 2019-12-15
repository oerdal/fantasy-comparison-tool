import React, { Component } from 'react';
import Player from './player';

class PlayerList extends Component {
  render() {
    return (
      <div className='container'>
        <div className='Roster card-deck'>
          <Player name='Joon Ho Kim' team='STO' pos={['SG','PG','C','PF','SF']}/>
          <Player name='Joel Embid' team='Phi' pos={['C']}/>
          <Player name='Lou Williams' team='LAC' pos={['SG']} />
        </div>
      </div>
    );
  }
}

export default PlayerList;