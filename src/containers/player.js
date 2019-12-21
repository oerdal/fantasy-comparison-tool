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

  state = {
    stats: [],
    loaded: false
  }

  componentDidMount() {
    this.getPlayerStats();
  }

  getPlayerStats = _ => {
    const url = 'http://stats.nba.com/stats/playerfantasyprofile/?measureType=Base&perMode=PerGame&plusMinus=N&paceAdjust=N&rank=N&leagueId=00&season=2019-20&seasonType=Regular+Season&playerId=' + this.props.id;
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ stats: res.resultSets[0].rowSet[0], loaded: true }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.loaded) {
      return <div />
    }

    return (
      <div className='player-card d-flex align-items-center card'>
        <div className='player-info'>
          <h2>{this.props.name}</h2>
          <h3>{this.props.team} {this.props.id}</h3>
          {/* <h3>{this.props.team} {this.playerPos(this.props.pos)}</h3> */}
        </div>
        <div className='d-flex stats justify-content-end'>
          <Stat type='MIN' value={this.state.stats[6]} />
          <Stat type='FGM/FGA' />
          <Stat type='FG%' value={this.state.stats[9]} />
          <Stat type='FTM/FTA' />
          <Stat type='FT%' value={this.state.stats[15]} />
          <Stat type='3PM' value={this.state.stats[10]} />
          <Stat type='REB' value={this.state.stats[18]} />
          <Stat type='AST' value={this.state.stats[19]} />
          <Stat type='STL' value={this.state.stats[21]} />
          <Stat type='BLK' value={this.state.stats[22]} />
          <Stat type='PTS' value={this.state.stats[26]} />
        </div>
      </div>
    );
  }
}

export default Player;