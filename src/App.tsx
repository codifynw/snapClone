import React, { Component } from "react";

import SnapsList from "./components/SnapsList";
import ImageModal from "./components/ImageModal";
import "./styles/App.css";
import { Snap, ImgOverlay } from "./types";

type AppState = {
  snaps: Snap[];
  imgOverlay: ImgOverlay | boolean;
};

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      snaps: [],
      imgOverlay: {
        duration: 0,
        imgUrl: ''
      }
    };
  }

  onLoadSnaps = (snaps) => this.setState({ snaps: snaps });
  setImgOverlay = (snap) => {
    this.setState({ 
      imgOverlay: {
        duration: snap.duration,
        imgUrl: snap.imgUrl
      },
    })
  };

  clearOverlay = () => {
    this.setState({ 
      imgOverlay: false
    })    
  }

  render() {
    const { snaps } = this.state;

    return (
      <div>
        <div id="header" />
        { typeof this.state.imgOverlay === 'object' ? <ImageModal args={this.state.imgOverlay} clearOverlay={this.clearOverlay} /> : '' }
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