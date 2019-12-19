import React, { Component } from 'react';
import Player from './player';

class PlayerList extends Component {

  state = {
    loaded: false,
    roster: []
  }

  componentDidMount() {
    this.getPlayerIDs();
  }

  parseRoster = roster => {
    let players = [];
    for (let player in roster) {
      let pname = roster[player][2];
      let pid = roster[player][0];
      let tname = roster[player][10];
      players.push({ pname: pname, pid: pid, tname: tname });
    }
    return players;
  }

  getPlayerIDs = _ => {
    const teamid = '1610612745';
    const leagueid = '00';
    const season = '2019-20';
    const url = 'https://stats.nba.com/stats/commonallplayers/?leagueId=00&season=' + season + '&isOnlyCurrentSeason=1';
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ loaded: true, roster: this.parseRoster(res.resultSets[0].rowSet) }))
      .catch(err => console.error(err))
  }

  renderRoster() {
    alert('beep');
    return this.state.roster.map(player => {
      console.log(player)
      return <Player key={player.pid} name={player.pname} team={player.tname} id={player.pid} />
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div />
  }

    return (
      <div className='container'>
        <div className='Roster card-deck'>
          {this.renderRoster()}
        </div>
      </div>
    );
  }
}

export default PlayerList;