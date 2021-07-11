import React, { Component } from "react";

import SnapsList from "./components/SnapsList";
import ImageModal from "./components/ImageModal";
// import CounterPractice from './components/CounterPractice';
import "./styles/App.css";
import { Snap, ImgOverlay } from "./types";

type AppState = {
  snaps: Snap[];
  imgOverlay: ImgOverlay;
};

class App extends Component<void, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      snaps: [],
      // TS underlines
      imgOverlay: {}
    };
  }

  onLoadSnaps = (snaps) => this.setState(() => ({ snaps: snaps }));
  setImgOverlay = (snap) => this.setState(() => ({ 
    imgOverlay: {
      show: true,
      duration: snap.duration,
      imgUrl: snap.imgUrl
    }
  }));

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

  render() {
    const { snaps } = this.state;

    return (
      <div>
        <div id="header" />
        <ImageModal args={this.state.imgOverlay} />
        <SnapsList setImgOverlay={this.setImgOverlay} snaps={snaps} onLoad={this.onLoadSnaps} />
        {/* <CounterPractice /> */}
      </div>
    );
  }
}

export default App;
