import React from "react";

import fetchData from "../services/fetchData";
import "../styles/SnapsList.css";
import { Snap, User } from "../types";
import ReactTimeago from 'react-timeago'

type SnapListProps = {
  snaps: Snap[];
  setImgOverlay: (setImgOverlay) => void;
  onLoad: (snaps: Snap[]) => void;
};

type SnapListState = {
  users: {
    [key:number]: User
  };
}

// let convertTimeStamp = function (unix_timestamp) {
//   return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(unix_timestamp)
// }

let getTimeago = function (timestamp) {
  let date = new Date(timestamp)
  return date.toUTCString()
}

class SnapsList extends React.PureComponent<SnapListProps, SnapListState> {
  state = {
    users: {}
  }

  componentDidMount() {
    const { onLoad } = this.props;
    
    fetchData()
      .then((x) => {

        const usersObj = x.users.reduce((acc, user) => {
          return {
            ...acc,
            [user.id]: user
          }
        }, {})
        
        this.setState({users: usersObj});

        return x.snaps
      })
      .then(onLoad)
      .catch(console.error);

    // fetchData()
    //   .then((x) => this.setState({users: x.users})
  }
  
  // Do not use
  // handleClick(snap:object) {
  //   this.props.setImgOverlay(snap);
  // }

  handleClick = (snap:Snap) => {
    this.props.setImgOverlay(snap);
  }
  
  render() {
    const { snaps } = this.props;

    console.log(snaps)
    console.log(this.state.users)

    return (
      <div className="snap-list">
        {snaps.length && Object.keys(this.state.users).length ? (
          // <p>{JSON.stringify(snaps)}</p>
          snaps.map((snap, index) => {
            return (
              <div className="snap" key={snap.id}>
                <div className="avatar"></div>
                <div className="snap-info">
                  <div className="snap-from">Sender: {this.state.users[snap.from].name}</div>
                  <ReactTimeago date={getTimeago(snap.timestamp)} />
                </div>
                <button 
                  className="snap-action" 
                  onClick={() => this.handleClick(snap)}>
                    View
                </button>
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
