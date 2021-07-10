import React from "react";

import fetchData from "../services/fetchData";
import "../styles/SnapsList.css";
import { Snap } from "../types";

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void;
  snaps: Snap[];
};

let convertTimeStamp = function (unix_timestamp) {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(unix_timestamp)
}

// let showImage = function (imgUrl) {
//   console.log('imageUrl: ', imgUrl)
// }

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
            // return (<div key={snap.id}>{(new Date(snap.timestamp*1000)+'').slice(16,24)}</div>)
            // return (<div key={snap.id}>{oneLineConvertTimeStamp(snap.timestamp)}</div>)
            return (
              <div className="snap" key={snap.id}>
                <div>{convertTimeStamp(snap.timestamp)}</div>
                <button onClick={() => this.handleClick(snap.imgUrl)}></button>
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
