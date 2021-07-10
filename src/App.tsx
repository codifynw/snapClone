import React, { Component } from "react";

import SnapsList from "./components/SnapsList";
import "./styles/App.css";
import { Snap } from "./types";

type AppState = {
  snaps: Snap[];
};

class App extends Component<void, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      snaps: [],
    };
  }

  onLoadSnaps = (snaps) => this.setState(() => ({ snaps }));

  render() {
    const { snaps } = this.state;

    return (
      <div>
        <SnapsList snaps={snaps} onLoad={this.onLoadSnaps} />
      </div>
    );
  }
}

export default App;
