import React, { Component } from 'react';

const url = 'https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2019-20&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=';

class Roster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: null
    };
  }

  fetchStats = async () => {
    const res = await fetch(url);
    return res;
  }

  componentDidMount() {
    const b = fetch(url)
      .then(res => res.body)
      .then(data => new Response(data))
      .then(res => res.blob());
    alert(b);
    // this.fetchStats();
  }

  render() {
    return (
      <div className='container'>
        <h1>Roster</h1>
        <p>{this.state.stats}</p>
      </div>
    );
  }
}

export default Roster;