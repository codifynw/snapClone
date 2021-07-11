import React from "react";

import fetchData from "../services/fetchData";
import "../styles/SnapsList.css";
import { Snap } from "../types";
import ReactTimeago from 'react-timeago'

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void;
  snaps: Snap[];
};

let convertTimeStamp = function (unix_timestamp) {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(unix_timestamp)
}

let getTimeago = function (timestamp) {
  let date = new Date(timestamp)
  return date.toUTCString()
}

class SnapsList extends React.PureComponent<SnapListProps> {
  componentDidMount() {
    console.log('this.props: ', this.props);
    const { onLoad } = this.props;

    fetchData()
      .then((x) => x.snaps)
      .then(onLoad)
      .catch(console.error);
  }

  handleClick(event: MouseEvent) {
    console.log('hi')
  }

  render() {
    const { snaps } = this.props;

    console.log('snaps: ', snaps)

    return (
      <div className="snap-list">
        {snaps.length ? (
          // <p>{JSON.stringify(snaps)}</p>
          snaps.map((snap, index) => {
            return (
              <div className="snap" key={snap.id}>
                <div className="snap-from">{snap.from}</div>
                <ReactTimeago date={getTimeago(snap.timestamp)} />
                <button className="snap-action" onClick={() => this.handleClick()}>View</button>
              </div>
            )
          })
        ) : (
          <p>Loading snaps...</p>
        )}
      </div>
    );
  }
}

export default SnapsList;
