import React from "react";

import fetchData from "../services/fetchData";
import "../styles/SnapsList.css";
import { Snap } from "../types";
import ReactTimeago from 'react-timeago'

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void;
  snaps: Snap[];
  // Adding this eliminated an error in App.tsx but I'm not sure if it is right.
  setImgOverlay: (setImgOverlay) => void;
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
    const { onLoad } = this.props;

    console.log('onLoad: ', onLoad);

    fetchData()
      .then((x) => x.snaps)
      .then(onLoad)
      .catch(console.error);
  }
  
    handleClick(snap:object) {
      this.props.setImgOverlay(snap);
    }
  
    // handleClick(event: MouseEvent) {
    //   this.props.setImgOverlay('url value');
    // }
  
  render() {
    const { snaps } = this.props;

    console.log(snaps)

    return (
      <div className="snap-list">
        {snaps.length ? (
          // <p>{JSON.stringify(snaps)}</p>
          snaps.map((snap, index) => {
            return (
              <div className="snap" key={snap.id}>
                <div className="avatar"></div>
                <div className="snap-info">
                  <div className="snap-from">Sender: {snap.from}</div>
                  <ReactTimeago date={getTimeago(snap.timestamp)} />
                </div>
                <button className="snap-action" onClick={() => this.handleClick(snap)}>View</button>
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
