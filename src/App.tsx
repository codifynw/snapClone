import React, { Component } from "react";

import SnapsList from "./components/SnapsList";
import ImageModal from "./components/ImageModal";
import "./styles/App.css";
import { Snap, ImgOverlay } from "./types";

type AppState = {
  snaps: Snap[];
  showOverlay: boolean;
  imgOverlay: ImgOverlay;
};

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      snaps: [],
      imgOverlay: {
        duration: 0,
        imgUrl: ''
      },
      showOverlay: false
    };
  }

  onLoadSnaps = (snaps) => this.setState({ snaps: snaps });
  setImgOverlay = (snap) => {
    this.setState({ 
      imgOverlay: {
        duration: snap.duration,
        imgUrl: snap.imgUrl
      }, 
      showOverlay: true
    })
  };

  setShowOverlay = (boolValue) => {
    this.setState({ 
      showOverlay: boolValue
    })    
  }

  render() {
    const { snaps } = this.state;

    return (
      <div>
        <div id="header" />
        {this.state.showOverlay ? <ImageModal args={this.state.imgOverlay} setShowOverlay={this.setShowOverlay} /> : '' }
        <SnapsList setImgOverlay={this.setImgOverlay} snaps={snaps} onLoad={this.onLoadSnaps} />
      </div>
    );
  }
}

export default App;




  // below doesn't work because not arrow function and this has wrong context
  // setImgOverlay(snap) {
  //   console.log('snap: ', snap);
  //   this.setState({
  //     imgOverlay: {
  //       show: true,
  //       duration: snap.duration,
  //       imgUrl: snap.imgUrl
  //     }
  //   })
  // }